"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { TrendingUp, Zap, BarChart2, Layers, RefreshCw, Bitcoin, ArrowUpDown, Briefcase, DollarSign } from "lucide-react";
import Link from "next/link";
import * as d3 from "d3";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

// Each instrument maps to a primary lat/lon for globe rotation
const instruments = [
  {
    id: "forex",
    name: "Forex",
    tag: "FX",
    icon: ArrowUpDown,
    spread: "0.0 pips RAW",
    leverage: "1:200",
    examples: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"],
    lat: 51.5, lon: -0.1,   // London
    city: "London",
  },
  {
    id: "metals",
    name: "Metals",
    tag: "METALS",
    icon: Layers,
    spread: "from 0.1 pips",
    leverage: "1:100",
    examples: ["XAU/USD", "XAG/USD", "XAU/EUR", "XAU/GBP"],
    lat: 40.7, lon: -74.0,  // New York (COMEX)
    city: "New York",
  },
  {
    id: "energies",
    name: "Energies",
    tag: "ENERGY",
    icon: Zap,
    spread: "from 0.3 pips",
    leverage: "1:50",
    examples: ["WTI", "Brent", "Natural Gas"],
    lat: 24.7, lon: 46.7,   // Riyadh
    city: "Riyadh",
  },
  {
    id: "indices",
    name: "Indices",
    tag: "IDX",
    icon: BarChart2,
    spread: "from 0.5 pips",
    leverage: "1:100",
    examples: ["S&P 500", "DAX 40", "FTSE 100", "Nikkei 225"],
    lat: 35.7, lon: 139.7,  // Tokyo
    city: "Tokyo",
  },
  {
    id: "equities",
    name: "Equities",
    tag: "EQ",
    icon: Briefcase,
    spread: "from 0.1%",
    leverage: "1:20",
    examples: ["AAPL", "AMZN", "Airbus", "Honda"],
    lat: 40.7, lon: -74.0,  // New York
    city: "New York",
  },
  {
    id: "etfs",
    name: "ETFs",
    tag: "ETF",
    icon: Layers,
    spread: "from 0.1%",
    leverage: "1:20",
    examples: ["GLD", "QQQ", "VOO", "TQQQ"],
    lat: 40.7, lon: -74.0,  // New York
    city: "New York",
  },
  {
    id: "crypto",
    name: "Crypto",
    tag: "CRYPTO",
    icon: Bitcoin,
    spread: "from 0.5 pips",
    leverage: "1:10",
    examples: ["BTC/USD", "ETH/USD", "SOL/USD", "XRP/USD"],
    lat: 1.35, lon: 103.8,  // Singapore
    city: "Singapore",
  },
  {
    id: "ndfs",
    name: "NDFs",
    tag: "NDF",
    icon: RefreshCw,
    spread: "on request",
    leverage: "1:50",
    examples: ["USD/BRL", "USD/INR", "USD/KRW", "USD/CLP"],
    lat: 22.3, lon: 114.2,  // Hong Kong
    city: "Hong Kong",
  },
  {
    id: "cfds",
    name: "CFDs",
    tag: "CFD",
    icon: TrendingUp,
    spread: "from 0.0 pips",
    leverage: "varies",
    examples: ["Futures CFDs", "Commodity CFDs"],
    lat: -26.2, lon: 28.0,  // Johannesburg
    city: "Johannesburg",
  },
  {
    id: "options",
    name: "Options",
    tag: "OPT",
    icon: DollarSign,
    spread: "on request",
    leverage: "N/A",
    examples: ["Vanilla", "Digital", "Barrier"],
    lat: 48.9, lon: 2.3,    // Paris
    city: "Paris",
  },
];

// ─── D3 Globe ─────────────────────────────────────────────────────────────────
interface GlobeProps {
  activeId: string | null;
}

function D3Globe({ activeId }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landRef = useRef<GeoJSON.FeatureCollection | null>(null);
  const rotationRef = useRef<[number, number, number]>([0, -20, 0]);
  const targetRotRef = useRef<[number, number, number]>([0, -20, 0]);
  const rafRef = useRef<number>(0);
  const autoRef = useRef(true);
  const sizeRef = useRef(360);

  // Fetch GeoJSON once
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then((r) => r.json())
      .then((data) => {
        landRef.current = data;
      })
      .catch(() => {
        // fallback silently
      });
  }, []);

  // When active instrument changes, rotate globe to its location
  useEffect(() => {
    if (activeId) {
      const inst = instruments.find((i) => i.id === activeId);
      if (inst) {
        targetRotRef.current = [-inst.lon, -inst.lat, 0];
        autoRef.current = false;
      }
    } else {
      autoRef.current = true;
    }
  }, [activeId]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const size = sizeRef.current;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 8;

    let lastTime = 0;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function lerpAngle(a: number, b: number, t: number) {
      let diff = b - a;
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;
      return a + diff * t;
    }

    function draw(timestamp: number) {
      const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;

      const [rx, ry, rz] = rotationRef.current;
      const [tx, ty, tz] = targetRotRef.current;

      if (autoRef.current) {
        // Slow auto-spin
        targetRotRef.current = [tx + 3 * dt, ty, tz];
        rotationRef.current = [rx + 3 * dt, ry, rz];
      } else {
        rotationRef.current = [
          lerpAngle(rx, tx, 0.04),
          lerp(ry, ty, 0.04),
          lerp(rz, tz, 0.04),
        ];
      }

      ctx.clearRect(0, 0, size, size);

      const projection = d3.geoOrthographic()
        .scale(radius)
        .translate([cx, cy])
        .rotate(rotationRef.current)
        .clipAngle(90);

      const path = d3.geoPath(projection, ctx);

      // Ocean sphere
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      path({ type: "Sphere" } as any);
      const oceanGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 0, cx, cy, radius);
      oceanGrad.addColorStop(0, "rgba(10,37,53,0.95)");
      oceanGrad.addColorStop(0.5, "rgba(5,20,35,0.98)");
      oceanGrad.addColorStop(1, "rgba(3,5,9,1)");
      ctx.fillStyle = oceanGrad;
      ctx.fill();

      // Graticule grid
      const graticule = d3.geoGraticule().step([20, 20])();
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(0,186,179,0.07)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Land masses
      if (landRef.current) {
        landRef.current.features.forEach((feature) => {
          ctx.beginPath();
          path(feature);
          ctx.fillStyle = "rgba(0,186,179,0.18)";
          ctx.fill();
          ctx.strokeStyle = "rgba(0,186,179,0.45)";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        });
      }

      // Instrument dots
      instruments.forEach((inst) => {
        const projected = projection([inst.lon, inst.lat]);
        if (!projected) return;

        // Check if on visible hemisphere
        const cos = d3.geoDistance([inst.lon, inst.lat], [
          -rotationRef.current[0],
          -rotationRef.current[1],
        ]);
        if (cos > Math.PI / 2) return; // behind globe

        const [px, py] = projected;
        const isActive = inst.id === activeId;

        if (isActive) {
          // Outer glow ring
          ctx.beginPath();
          ctx.arc(px, py, 12, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,186,179,0.08)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 7, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,186,179,0.15)";
          ctx.fill();

          // Solid dot
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#00BAB3";
          ctx.shadowColor = "rgba(0,186,179,0.9)";
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0,186,179,0.6)";
          ctx.shadowColor = "rgba(0,186,179,0.5)";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Sphere border ring
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      path({ type: "Sphere" } as any);
      ctx.strokeStyle = "rgba(0,186,179,0.25)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Highlight sheen
      const sheen = ctx.createRadialGradient(
        cx - radius * 0.35, cy - radius * 0.35, 0,
        cx - radius * 0.2, cy - radius * 0.2, radius * 0.7
      );
      sheen.addColorStop(0, "rgba(255,255,255,0.05)");
      sheen.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      path({ type: "Sphere" } as any);
      ctx.fillStyle = sheen;
      ctx.fill();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  return (
    <div className="relative shrink-0" style={{ width: sizeRef.current, height: sizeRef.current }}>
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none animate-glow-breathe" style={{
        background: "radial-gradient(ellipse at center, rgba(0,186,179,0.18) 0%, transparent 70%)",
        filter: "blur(28px)",
        transform: "scale(1.25)",
      }} />
      {/* Equator ring */}
      <div className="absolute pointer-events-none rounded-full" style={{
        inset: "-6px",
        border: "1px solid rgba(0,186,179,0.12)",
      }} />
      <canvas ref={canvasRef} className="relative z-10 rounded-full" />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function GlobalMarketsSection() {
  const locale = useLocale();
  const t = translations[locale].markets;

  const [active, setActive] = useState<string | null>(null);

  const handleClick = useCallback((id: string) => {
    setActive((prev) => (prev === id ? null : id));
  }, []);

  const activeInst = instruments.find((i) => i.id === active);

  return (
    <section className="relative py-24 lg:py-32 bg-arka-elevated overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(0,186,179,0.06) 0%, transparent 60%)",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(0,186,179,0.12) 50%, transparent 100%)",
      }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-arka-turquoise" />
            <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.28em] uppercase">{t.label}</span>
          </div>
          <h2 className="font-display font-black text-arka-white leading-[0.95] tracking-tight mb-4"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            {t.headline1}<br />
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 70%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>{t.headline2}</span>
          </h2>
          <p className="text-arka-gray text-lg max-w-xl leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Globe + Instruments layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Globe — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col items-center gap-4 lg:sticky lg:top-32 shrink-0 w-full lg:w-auto"
          >
            <D3Globe activeId={active} />

            {/* Active instrument callout */}
            <div className="h-8 flex items-center">
              {activeInst ? (
                <motion.div
                  key={activeInst.id}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                  style={{ background: "rgba(0,186,179,0.08)", border: "1px solid rgba(0,186,179,0.2)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-arka-turquoise animate-pulse" />
                  <span className="text-arka-turquoise font-mono text-[11px] tracking-wider">{activeInst.city}</span>
                  <span className="text-arka-gray font-mono text-[10px]">· {activeInst.name}</span>
                </motion.div>
              ) : (
                <span className="text-arka-gray font-mono text-[10px] tracking-wider opacity-50">{t.selectPrompt}</span>
              )}
            </div>
          </motion.div>

          {/* Instruments grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {instruments.map((inst, i) => {
              const Icon = inst.icon;
              const isActive = active === inst.id;
              const detail = t.instruments[inst.id as keyof typeof t.instruments]?.detail ?? inst.name;
              return (
                <motion.button
                  key={inst.id}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => handleClick(inst.id)}
                  className={`text-left rounded-sm border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-arka-turquoise/40 bg-arka-turquoise/[0.05]"
                      : "border-arka-border/60 bg-arka-card/50 hover:border-arka-turquoise/25 hover:bg-arka-card"
                  }`}
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-sm flex items-center justify-center transition-colors ${
                          isActive ? "bg-arka-turquoise/15 text-arka-turquoise" : "bg-arka-elevated text-arka-gray"
                        }`}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-arka-white font-semibold text-sm font-display">{inst.name}</span>
                            <span className="text-[9px] font-mono text-arka-gray tracking-[0.15em] border border-arka-border/60 px-1.5 py-0.5 rounded-sm">
                              {inst.tag}
                            </span>
                          </div>
                          <div className="text-arka-gray text-xs mt-0.5">{detail}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-arka-turquoise text-xs font-mono">{inst.spread}</div>
                        <div className="text-arka-gray text-[10px] mt-0.5">{t.upTo} {inst.leverage}</div>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.25 }}
                        className="mt-3 pt-3 border-t border-arka-border/40"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1 h-1 rounded-full bg-arka-turquoise" />
                          <span className="text-[10px] font-mono text-arka-gray">{inst.city}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {inst.examples.map((ex) => (
                            <span key={ex} className="px-2 py-1 text-[10px] font-mono text-arka-turquoise border border-arka-turquoise/25 rounded-sm bg-arka-turquoise/5">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href={t.marketsHref}
            className="inline-flex items-center gap-2 text-arka-turquoise font-mono text-xs tracking-wider uppercase hover:text-arka-white transition-colors">
            {t.ctaFull}
          </Link>
          <span className="hidden sm:block w-px h-4 bg-arka-border" />
          <Link href={t.tradingConditionsHref}
            className="inline-flex items-center gap-2 text-arka-gray font-mono text-xs tracking-wider uppercase hover:text-arka-white transition-colors">
            {t.ctaConditions}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
