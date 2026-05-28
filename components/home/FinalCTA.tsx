"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { translations } from "@/lib/i18n/translations";

export default function FinalCTA() {
  const locale = useLocale();
  const t = translations[locale].finalCta;

  return (
    <section className="relative py-28 lg:py-36 bg-arka-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,186,179,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,186,179,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full" style={{
          background: "radial-gradient(ellipse at center, rgba(0,186,179,0.1) 0%, rgba(0,186,179,0.03) 40%, transparent 70%)",
          filter: "blur(20px)",
        }} />
        {/* Champagne accent */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]" style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(200,169,106,0.06) 0%, transparent 60%)",
        }} />
      </div>

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent 0%, rgba(0,186,179,0.2) 50%, transparent 100%)",
      }} />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">

          {/* Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-glow-breathe" style={{
                background: "radial-gradient(ellipse at center, rgba(0,186,179,0.3) 0%, transparent 70%)",
                filter: "blur(20px)", transform: "scale(2)",
              }} />
              <Image
                src="/symbol-gradient.png"
                alt="ARKA"
                width={80}
                height={80}
                className="relative z-10 object-contain"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,186,179,0.4))" }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display font-black text-arka-white leading-[0.95] tracking-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
              {t.headline1}
              <br />
              <span style={{
                background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 70%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {t.headline2}
              </span>
            </h2>
            <p className="text-arka-gray text-lg leading-relaxed max-w-xl mx-auto mb-10">
              {t.sub}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href={t.cta1Href}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-arka-turquoise text-arka-black font-display font-bold text-sm tracking-wider uppercase rounded-sm glow-teal hover:bg-arka-turquoise/90 transition-all duration-300"
            >
              {t.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={t.cta2Href}
              className="inline-flex items-center gap-2 px-8 py-4 border border-arka-border text-arka-white font-medium text-sm rounded-sm hover:border-arka-turquoise/30 transition-all duration-300"
            >
              {t.cta2}
            </Link>
          </motion.div>

          {/* Info strip */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <a href="mailto:contacto@arkaltd.io"
              className="flex items-center gap-2 text-arka-gray hover:text-arka-white transition-colors text-sm">
              <Mail size={14} className="text-arka-turquoise" />
              contacto@arkaltd.io
            </a>
            <span className="hidden sm:block w-px h-4 bg-arka-border" />
            <div className="flex items-center gap-2 text-arka-gray text-sm">
              <MapPin size={14} className="text-arka-turquoise" />
              {t.address}
            </div>
            <span className="hidden sm:block w-px h-4 bg-arka-border" />
            <div className="flex items-center gap-2 text-arka-gray text-xs font-mono">
              <span className="text-arka-border">{t.regLabel}</span>
              {t.regNo}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
