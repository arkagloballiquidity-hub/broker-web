"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, BarChart2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

const accountMeta = [
  { icon: BarChart2, rgb: "200,169,106", accent: "#C8A96A", popular: false },
  { icon: Zap,       rgb: "0,186,179",   accent: "#00BAB3", popular: true  },
];

type AccountItem = {
  id: string; tier: string; name: string; subtitle: string;
  deposit: string; depositSub: string; description: string;
  highlights: readonly string[]; cta: string; href: string;
};

// ─── Compact market-style card with cursor glow ───────────────────────────────
function AccountCard({
  acc, rgb, accent, popular, recommended, index,
}: {
  acc: AccountItem;
  rgb: string; accent: string; popular: boolean; recommended: string; index: number;
}) {
  const Icon = accountMeta[index].icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hot, setHot] = useState(false);

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <Link href={acc.href} target="_blank" rel="noopener noreferrer" className="block h-full">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseMove={move}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
        className="group flex flex-col bg-arka-card rounded-xl p-5 h-full relative overflow-hidden"
        style={{
          border: `1px solid rgba(${rgb},${hot ? "0.28" : (popular ? "0.2" : "0.09")})`,
          boxShadow: popular && hot ? `0 0 32px rgba(${rgb},0.1)` : "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl z-0"
          style={{
            opacity: hot ? 1 : 0,
            transition: "opacity 0.2s ease",
            background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(${rgb},0.12), transparent 70%)`,
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px z-10"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }} />

        {/* Recommended badge */}
        {popular && (
          <div className="absolute top-3.5 right-3.5 z-20">
            <span className="text-[9px] font-mono tracking-[0.18em] uppercase px-2 py-1 rounded-full"
              style={{ background: `rgba(${rgb},0.15)`, border: `1px solid rgba(${rgb},0.3)`, color: accent }}>
              {recommended}
            </span>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + tag row */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.18)` }}>
              <Icon size={18} style={{ color: accent }} />
            </div>
            <span className="text-[9px] font-mono tracking-[0.14em] uppercase px-2 py-1 rounded-full"
              style={{ color: accent, background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.16)` }}>
              {acc.name}
            </span>
          </div>

          {/* Tier */}
          <div className="text-[10px] font-mono tracking-[0.2em] uppercase mb-2" style={{ color: accent }}>
            {acc.tier}
          </div>

          {/* Deposit */}
          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="font-display font-black text-arka-white text-3xl leading-none">{acc.deposit}</span>
            <span className="text-arka-gray text-xs">{acc.depositSub}</span>
          </div>

          {/* Description */}
          <p className="text-arka-gray text-xs leading-relaxed mb-4 flex-1">{acc.description}</p>

          {/* Highlights (first 3) */}
          <div className="flex flex-col gap-2 mb-5">
            {acc.highlights.slice(0, 3).map((h) => (
              <div key={h} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `rgba(${rgb},0.12)`, border: `1px solid rgba(${rgb},0.25)` }}>
                  <Check size={9} style={{ color: accent }} />
                </div>
                <span className="text-xs text-arka-gray">{h}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto flex items-center gap-1.5 text-[11px] font-mono tracking-wide" style={{ color: accent }}>
            {acc.cta}
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function AccountComparisonSection() {
  const locale = useLocale();
  const t = translations[locale].accounts;

  return (
    <section className="relative py-24 lg:py-32 bg-arka-elevated overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(0,186,179,0.1) 50%, transparent 100%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 100%, rgba(0,186,179,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-arka-turquoise" />
            <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.28em] uppercase">{t.label}</span>
            <div className="h-px w-8 bg-arka-turquoise" />
          </div>
          <h2 className="font-display font-black text-arka-white leading-[0.95] tracking-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            {t.headline1}{" "}
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              {t.headline2}
            </span>
          </h2>
          <p className="text-arka-gray text-lg max-w-xl mx-auto leading-relaxed">{t.sub}</p>
        </motion.div>

        {/* ── Side-by-side layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left — account cards + shared */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              {t.accountsList.map((acc, i) => {
                const { rgb, accent, popular } = accountMeta[i];
                return (
                  <AccountCard
                    key={acc.id}
                    acc={acc}
                    rgb={rgb}
                    accent={accent}
                    popular={popular}
                    recommended={t.recommended}
                    index={i}
                  />
                );
              })}
            </div>

            {/* Shared features */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl p-5"
              style={{ background: "rgba(8,11,16,0.7)", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="text-[10px] font-mono text-arka-gray tracking-[0.2em] uppercase mb-4">
                {t.includedLabel}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.shared.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-arka-turquoise/15 flex items-center justify-center shrink-0">
                      <Check size={9} className="text-arka-turquoise" />
                    </div>
                    <span className="text-xs text-arka-gray">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
            className="w-full lg:w-[400px] shrink-0 flex flex-col gap-4 lg:sticky lg:top-28"
          >
            <div className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              {/* Header */}
              <div className="grid" style={{
                gridTemplateColumns: "1fr 128px 128px",
                background: "rgba(8,11,16,0.9)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div className="px-4 py-3 text-[10px] font-mono text-arka-gray tracking-[0.2em] uppercase">
                  {t.tableHeader}
                </div>
                <div className="px-4 py-3 text-center text-[10px] font-mono tracking-[0.15em] uppercase"
                  style={{ color: "#00BAB3" }}>RAW</div>
                <div className="px-4 py-3 text-center text-[10px] font-mono tracking-[0.15em] uppercase"
                  style={{ color: "#C8A96A" }}>STD</div>
              </div>

              {/* Rows */}
              {t.rows.map((row, i) => (
                <div key={row.label} className="grid"
                  style={{
                    gridTemplateColumns: "1fr 128px 128px",
                    borderTop: "1px solid rgba(255,255,255,0.03)",
                    background: i % 2 === 0 ? "rgba(8,11,16,0.5)" : "rgba(13,17,24,0.35)",
                  }}>
                  <div className="px-4 py-3 text-[11px] font-mono text-arka-gray tracking-wide">{row.label}</div>
                  <div className="px-4 py-3 text-center">
                    <span className={`text-xs font-mono font-semibold tabular-nums ${
                      "rawBest" in row && row.rawBest ? "text-arka-turquoise" : "text-arka-white"
                    }`}>
                      {row.raw}
                    </span>
                  </div>
                  <div className="px-4 py-3 text-center">
                    <span className="text-xs font-mono font-semibold tabular-nums text-arka-gray">{row.std}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View all link */}
            <Link href={t.accountsHref}
              className="text-arka-gray font-mono text-xs tracking-wider uppercase hover:text-arka-white transition-colors flex items-center gap-1.5">
              {t.viewAllLink}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
