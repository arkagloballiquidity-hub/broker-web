"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, Zap, Globe, Monitor, Smartphone, BookOpen, Bot, Users, Bell, Settings, Bitcoin, DollarSign, Banknote, Clock, Percent, AlertTriangle, CreditCard, User, Building2, FileCheck, Shield, Search, CheckCircle, Wallet, RefreshCw, Eye, FileText, Headphones, TrendingUp, Globe2, ArrowUpDown, Layers, BarChart, Briefcase } from "lucide-react";

const iconMap = {
  BarChart2, Zap, Globe, Monitor, Smartphone, BookOpen, Bot, Users, Bell, Settings,
  Bitcoin, DollarSign, Banknote, Clock, Percent, AlertTriangle, CreditCard,
  User, Building2, FileCheck, Shield, Search, CheckCircle, Wallet, RefreshCw, Eye,
  FileText, Headphones, TrendingUp, Globe2, ArrowUpDown, Layers, BarChart, Briefcase,
} as const;

export type IconName = keyof typeof iconMap;

export interface PageCardProps {
  href: string;
  iconName: IconName;
  tag: string;
  name: string;
  detail: string;
  description: string;
  ctaLabel?: string;
  accentColor?: string;
  accentRgb?: string;
  external?: boolean;
}

export default function PageCard({
  href,
  iconName,
  tag,
  name,
  detail,
  description,
  ctaLabel,
  accentColor = "#00BAB3",
  accentRgb = "0,186,179",
  external,
}: PageCardProps) {
  const Icon = iconMap[iconName] ?? BarChart2;
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hot, setHot] = useState(false);

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      <div
        ref={ref}
        onMouseMove={move}
        onMouseEnter={() => setHot(true)}
        onMouseLeave={() => setHot(false)}
        className="group flex flex-col bg-arka-card rounded-xl p-5 h-full relative overflow-hidden"
        style={{
          border: `1px solid rgba(${accentRgb},${hot ? "0.22" : "0.07"})`,
          transition: "border-color 0.2s ease",
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl z-0"
          style={{
            opacity: hot ? 1 : 0,
            transition: "opacity 0.2s ease",
            background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(${accentRgb},0.1), transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.18)` }}
            >
              <Icon size={18} style={{ color: accentColor }} />
            </div>
            <span
              className="text-[9px] font-mono tracking-[0.14em] uppercase px-2 py-1 rounded-full"
              style={{ color: accentColor, background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.16)` }}
            >
              {tag}
            </span>
          </div>

          <h3 className="text-arka-white text-base font-semibold mb-1">{name}</h3>
          <p className="text-[10px] font-mono mb-3" style={{ color: accentColor }}>{detail}</p>
          <p className="text-arka-gray text-xs leading-relaxed flex-1">{description}</p>

          {ctaLabel && (
            <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono tracking-wide" style={{ color: accentColor }}>
              {ctaLabel}
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
