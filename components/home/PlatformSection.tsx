"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Monitor, Smartphone, BarChart2, Zap, Shield } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

const featureIcons = [BarChart2, Zap, Shield];

export default function PlatformSection() {
  const locale = useLocale();
  const t = translations[locale].platform;

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const desktopY   = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const desktopRot = useTransform(scrollYProgress, [0, 0.5, 1], [-2, -1, -2]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 bg-arka-black overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,186,179,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,186,179,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(200,169,106,0.15) 50%, transparent 100%)",
      }} />

      {/* Champagne glow — left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none" style={{
        background: "radial-gradient(ellipse at 0% 50%, rgba(200,169,106,0.06) 0%, transparent 60%)",
      }} />
      {/* Teal glow — right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none" style={{
        background: "radial-gradient(ellipse at 100% 50%, rgba(0,186,179,0.07) 0%, transparent 60%)",
      }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* ── Left: copy ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-1 max-w-lg"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-arka-champagne" />
              <span className="text-arka-champagne font-mono text-[11px] tracking-[0.28em] uppercase">{t.label}</span>
            </div>

            {/* Heading */}
            <h2
              className="font-display font-black text-arka-white leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 58px)" }}
            >
              {t.headline1}
              <br />
              <span style={{
                background: "linear-gradient(125deg, #C8A96A 0%, #F4F7FA 65%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {t.headline2}
              </span>
            </h2>

            <p className="text-arka-gray text-lg leading-relaxed mb-8">
              {t.sub}
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4 mb-10">
              {t.features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(200,169,106,0.1)", border: "1px solid rgba(200,169,106,0.2)" }}>
                      <Icon size={16} style={{ color: "#C8A96A" }} />
                    </div>
                    <div>
                      <div className="text-arka-white font-semibold text-sm">{f.label}</div>
                      <div className="text-arka-gray text-xs mt-0.5">{f.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Platform badges */}
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center gap-2 px-3 py-2 rounded-sm"
                style={{ background: "rgba(13,17,24,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Monitor size={14} className="text-arka-gray" />
                <span className="text-arka-gray text-xs font-mono">{t.badgeDesktop}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-sm"
                style={{ background: "rgba(13,17,24,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Smartphone size={14} className="text-arka-gray" />
                <span className="text-arka-gray text-xs font-mono">{t.badgeMobile}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-sm"
                style={{ background: "rgba(13,17,24,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-arka-gray text-xs font-mono">{t.badgeWeb}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={t.cta1Href}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 border text-arka-white font-medium text-sm rounded-sm transition-all duration-300"
                style={{ borderColor: "rgba(200,169,106,0.35)" }}
              >
                {t.cta1}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" style={{ color: "#C8A96A" }} />
              </Link>
              <Link
                href={t.cta2Href}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-arka-turquoise text-arka-black font-display font-bold text-sm tracking-wider uppercase rounded-sm glow-teal hover:bg-arka-turquoise/90 transition-all duration-300"
              >
                {t.cta2}
              </Link>
            </div>
          </motion.div>

          {/* ── Right: desktop screenshot ───────────────── */}
          <div className="flex-1 relative flex items-center justify-center min-h-[360px] lg:min-h-[460px]">

            {/* Desktop screenshot */}
            <motion.div
              style={{
                y: desktopY,
                rotateX: desktopRot,
                width: "100%",
                maxWidth: "680px",
                filter: "drop-shadow(0 32px 56px rgba(0,0,0,0.65)) drop-shadow(0 0 32px rgba(0,186,179,0.07))",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(0,186,179,0.18)" }}>
                <Image
                  src="/ctrader-platform.png"
                  alt="cTrader desktop platform"
                  width={760}
                  height={448}
                  quality={90}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            {/* Floating badge — executions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute z-20"
              style={{ top: "8%", right: "-2%" }}
            >
              <div className="px-3 py-2 rounded-sm backdrop-blur-md"
                style={{
                  background: "rgba(8,11,16,0.85)",
                  border: "1px solid rgba(0,186,179,0.25)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}>
                <div className="text-[10px] font-mono text-arka-gray tracking-wider mb-0.5">{t.execBadgeLabel}</div>
                <div className="font-display font-bold text-arka-turquoise text-sm">{t.execBadgeValue}</div>
              </div>
            </motion.div>

            {/* Floating badge — spread */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute z-20"
              style={{ bottom: "8%", left: "0%" }}
            >
              <div className="px-3 py-2 rounded-sm backdrop-blur-md"
                style={{
                  background: "rgba(8,11,16,0.85)",
                  border: "1px solid rgba(200,169,106,0.25)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                }}>
                <div className="text-[10px] font-mono text-arka-gray tracking-wider mb-0.5">{t.spreadBadgeLabel}</div>
                <div className="font-display font-bold text-arka-white text-sm">
                  <span style={{ color: "#C8A96A" }}>0.0</span> pips
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
