"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  noPad?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  dark = false,
  noPad = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
      className={`relative ${noPad ? "" : "py-24 lg:py-32"} ${dark ? "bg-arka-elevated" : "bg-arka-black"} ${className}`}
    >
      {/* Subtle top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: dark
            ? "linear-gradient(90deg, transparent 0%, rgba(0,186,179,0.06) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
        }}
      />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">{children}</div>
    </motion.section>
  );
}
