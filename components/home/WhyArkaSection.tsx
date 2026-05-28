"use client";

import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, HeadphonesIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

const pillarIcons = [BarChart3, Zap, Shield, HeadphonesIcon];
const pillarAccents = ["#00BAB3", "#00BAB3", "#C8A96A", "#C8A96A"];

export default function WhyArkaSection() {
  const locale = useLocale();
  const t = translations[locale].why;

  return (
    <section className="relative py-24 lg:py-32 bg-arka-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,186,179,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,186,179,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
      }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-arka-champagne" />
            <span className="text-arka-champagne font-mono text-[11px] tracking-[0.28em] uppercase">{t.label}</span>
          </div>
          <h2 className="font-display font-black text-arka-white leading-[0.95] tracking-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}>
            {t.headline1}<br />
            <span style={{
              background: "linear-gradient(125deg, #C8A96A 0%, #F4F7FA 70%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>{t.headline2}</span>
          </h2>
          <p className="text-arka-gray text-lg leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            const accent = pillarAccents[i];
            return (
              <motion.div
                key={pillar.tag}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                className="card-3d group relative rounded-sm overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(13,17,24,0.95) 0%, rgba(8,11,16,0.98) 100%)",
                  border: `1px solid rgba(255,255,255,0.04)`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                  background: `linear-gradient(90deg, transparent 0%, ${accent}40 50%, transparent 100%)`,
                }} />

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${accent}08 0%, transparent 60%)`,
                }} />

                <div className="p-8 lg:p-10">
                  {/* Tag + Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                        style={{
                          background: `${accent}12`,
                          border: `1px solid ${accent}25`,
                        }}>
                        <Icon size={20} style={{ color: accent }} />
                      </div>
                      <div>
                        <div className="text-arka-white font-display font-bold text-lg leading-tight">{pillar.title}</div>
                        <div className="text-arka-gray text-sm mt-0.5">{pillar.subtitle}</div>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] tracking-widest shrink-0 mt-1" style={{ color: `${accent}80` }}>
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-arka-gray text-sm leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  {/* Metrics strip */}
                  <div className="grid grid-cols-3 gap-4 pt-6"
                    style={{ borderTop: `1px solid rgba(255,255,255,0.04)` }}>
                    {pillar.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-1">
                        <div className="font-display font-bold text-arka-white text-sm tabular-nums"
                          style={{ color: m.value.includes("pips") || m.value.includes("USD") ? accent : undefined }}>
                          {m.value}
                        </div>
                        <div className="text-[10px] font-mono text-arka-gray tracking-wider uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
