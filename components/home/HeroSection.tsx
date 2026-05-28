"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

const easing = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

const rotatingWordsEn = [
  "Infrastructure",
  "Liquidity",
  "Execution",
  "Access",
];

const rotatingWordsEs = [
  "Infraestructura",
  "Liquidez",
  "Ejecución",
  "Acceso",
];

export default function HeroSection() {
  const locale = useLocale();
  const t = translations[locale].hero;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const symbolY = useTransform(scrollY, [0, 600], [0, -120]);
  const symbolOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  const rotatingWords = locale === "es" ? rotatingWordsEs : rotatingWordsEn;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setWordIndex(0);
  }, [locale]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-arka-black">

      {/* Background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,186,179,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,186,179,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute" style={{ top: "10%", right: "-5%", width: "70vw", height: "80vh",
          background: "radial-gradient(ellipse at 60% 40%, rgba(0,186,179,0.13) 0%, rgba(0,186,179,0.04) 45%, transparent 70%)",
        }} />
        <div className="absolute bottom-0 left-0" style={{ width: "40vw", height: "50vh",
          background: "radial-gradient(ellipse at 0% 100%, rgba(200,169,106,0.06) 0%, transparent 60%)",
        }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,186,179,0.25) 50%, transparent 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(3,5,9,0.5) 100%)" }} />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_480px] gap-8 xl:gap-16 items-center min-h-screen py-28 lg:py-0">

          {/* Left */}
          <div className="flex flex-col gap-7 lg:gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easing }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-10 bg-gradient-to-r from-arka-turquoise to-transparent" />
              <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.3em] uppercase">
                {t.badgeLabel}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            >
              <h1 className="font-display font-black leading-[0.9] tracking-[-0.02em]">
                <span className="block text-arka-white" style={{ fontSize: "clamp(50px, 7vw, 86px)" }}>
                  {t.headline1}
                </span>
                <span className="block text-arka-white" style={{ fontSize: "clamp(50px, 7vw, 86px)" }}>
                  {t.headline2}
                </span>

                {/* Rotating gradient word */}
                <span
                  className="block overflow-hidden"
                  style={{ fontSize: "clamp(50px, 7vw, 86px)", height: "clamp(55px, 7.5vw, 92px)" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="block"
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      style={{
                        background: "linear-gradient(125deg, #00BAB3 0%, #00d4cc 35%, #C8A96A 80%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "block",
                      }}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className="font-display font-light text-arka-gray mt-3"
                style={{ fontSize: "clamp(18px, 2vw, 26px)" }}>
                {t.tagline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: easing }}
              className="text-arka-gray text-base lg:text-[17px] leading-[1.75] max-w-lg"
            >
              {(() => {
                const parts = t.description.split(t.descriptionHighlight);
                return (
                  <>
                    {parts[0]}
                    <span className="text-arka-white font-medium">{t.descriptionHighlight}</span>
                    {parts[1]}
                  </>
                );
              })()}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: easing }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href={t.cta1Href}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-arka-turquoise text-arka-black text-sm font-bold rounded-sm tracking-wider uppercase font-display transition-all duration-300 hover:bg-arka-turquoise/90 glow-teal"
              >
                {t.cta1}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href={t.cta2Href}
                className="group inline-flex items-center gap-2 px-6 py-3.5 border border-arka-border text-arka-white text-sm font-medium rounded-sm tracking-wide hover:border-arka-turquoise/40 hover:bg-arka-turquoise/[0.04] transition-all duration-300"
              >
                {t.cta2}
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Trust tags */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42, ease: easing }}
              className="flex flex-wrap gap-2"
            >
              {t.trustTags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-[11px] font-mono tracking-[0.12em] text-arka-gray border border-arka-border/60 rounded-sm bg-arka-card/40 uppercase">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D Symbol */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            style={{ y: symbolY, opacity: symbolOpacity }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-glow-breathe">
              <div style={{
                width: "380px", height: "380px", borderRadius: "50%",
                background: "radial-gradient(ellipse at center, rgba(0,186,179,0.22) 0%, rgba(0,186,179,0.06) 50%, transparent 70%)",
                filter: "blur(30px)",
              }} />
            </div>

            {/* Champagne accent glow */}
            <div className="absolute pointer-events-none" style={{
              bottom: "15%", right: "10%", width: "200px", height: "200px", borderRadius: "50%",
              background: "radial-gradient(ellipse at center, rgba(200,169,106,0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
            }} />

            {/* Symbol with 3D rotation */}
            <motion.div
              animate={{ rotateY: [0, 8, 0, -8, 0], rotateX: [0, -4, 0, 4, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d", perspective: "1200px", position: "relative", zIndex: 10 }}
            >
              <Image
                src="/symbol-gradient.png"
                alt="ARKA Global Liquidity"
                width={460}
                height={460}
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 40px rgba(0,186,179,0.35)) drop-shadow(0 0 80px rgba(0,186,179,0.12))" }}
                priority
              />
            </motion.div>

            {/* Floating card — top right */}
            <motion.div
              className="absolute top-6 right-0 glass border-glow rounded-sm p-4 min-w-[160px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-[10px] font-mono text-arka-gray tracking-widest uppercase mb-2">EUR/USD</div>
              <div className="text-xl font-bold text-arka-white font-mono tabular-nums">1.08412</div>
              <div className="text-[10px] font-mono text-arka-turquoise mt-1">RAW 0.0 pips</div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              className="absolute bottom-10 left-2 glass border-glow rounded-sm p-4 min-w-[160px]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="text-[10px] font-mono text-arka-gray tracking-widest uppercase mb-2">XAU/USD</div>
              <div className="text-xl font-bold text-arka-white font-mono tabular-nums">2,348.20</div>
              <div className="text-[10px] font-mono text-arka-champagne mt-1">39 USD/M · RAW</div>
            </motion.div>

            {/* Live badge */}
            <motion.div
              className="absolute top-1/2 -left-4 flex items-center gap-2 glass border-glow rounded-full px-4 py-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-arka-turquoise animate-pulse" />
              <span className="text-[10px] font-mono text-arka-turquoise tracking-wider uppercase">{t.liveBadge}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: easing }}
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div style={{ background: "linear-gradient(180deg, rgba(8,11,16,0.8) 0%, rgba(3,5,9,0.95) 100%)", backdropFilter: "blur(20px)" }}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0">
              {t.stats.map((s, i) => (
                <div key={s.label}
                  className={`flex flex-col gap-1.5 ${i < t.stats.length - 1 ? "lg:border-r border-white/[0.05] lg:pr-8" : ""} ${i > 0 ? "lg:pl-8" : ""}`}
                >
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-black text-arka-white tabular-nums" style={{ fontSize: "26px" }}>
                      {s.value}
                    </span>
                    <span className="font-display font-bold text-arka-turquoise" style={{ fontSize: "16px" }}>
                      {s.suffix}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-arka-gray tracking-[0.18em] uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
