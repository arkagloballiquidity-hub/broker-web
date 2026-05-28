"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpDown, Layers, Zap, BarChart2, Briefcase,
  Bitcoin, TrendingUp, RefreshCw, ArrowLeft,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Instrument {
  symbol: string;
  name: string;
}

export interface InstrumentGroup {
  label: string;
  instruments: Instrument[];
}

export interface TradingCondition {
  label: string;
  raw: string;
  std: string;
}

export interface MarketData {
  name: string;
  tag: string;
  iconName: string;
  accentColor: string;
  accentRgb: string;
  description: string;
  conditions: TradingCondition[];
  groups: InstrumentGroup[];
}

// ─── Icon map ─────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  arrowupdown: ArrowUpDown,
  layers: Layers,
  zap: Zap,
  barchart2: BarChart2,
  briefcase: Briefcase,
  bitcoin: Bitcoin,
  trendingup: TrendingUp,
  refreshcw: RefreshCw,
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function MarketPageTemplate({ data }: { data: MarketData }) {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");

  const Icon = iconMap[data.iconName] ?? ArrowUpDown;
  const totalCount = data.groups.reduce((sum, g) => sum + g.instruments.length, 0);
  const showSearch = totalCount > 20;
  const showGroupTabs = data.groups.length > 1;

  // ── Filtered instruments ──
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return data.groups
      .filter((g) => activeGroup === "All" || g.label === activeGroup)
      .map((g) => ({
        ...g,
        instruments: g.instruments.filter(
          (inst) =>
            !q ||
            inst.symbol.toLowerCase().includes(q) ||
            inst.name.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.instruments.length > 0);
  }, [data.groups, search, activeGroup]);

  const totalVisible = filtered.reduce((s, g) => s + g.instruments.length, 0);

  return (
    <div className="min-h-screen bg-arka-black">
      {/* ── Hero ── */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top right, rgba(${data.accentRgb},0.08) 0%, transparent 65%)`,
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          {/* Back link */}
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 text-arka-gray hover:text-arka-white text-xs font-mono tracking-wider uppercase transition-colors mb-8 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            All Markets
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* ── Left: title + description ── */}
            <div className="flex-1 min-w-0">
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `rgba(${data.accentRgb},0.10)`,
                    border: `1px solid rgba(${data.accentRgb},0.22)`,
                  }}
                >
                  <Icon size={22} style={{ color: data.accentColor }} />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight">
                      {data.name}
                    </h1>
                    <span
                      className="px-2.5 py-1 text-[10px] font-mono tracking-[0.14em] uppercase rounded-full"
                      style={{
                        color: data.accentColor,
                        background: `rgba(${data.accentRgb},0.10)`,
                        border: `1px solid rgba(${data.accentRgb},0.22)`,
                      }}
                    >
                      {data.tag}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-arka-gray text-base leading-relaxed max-w-2xl mb-6">
                {data.description}
              </p>

              {/* Total count badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-arka-card border border-white/[0.06]">
                <span className="text-arka-white font-mono text-sm font-semibold">{totalCount}</span>
                <span className="text-arka-gray text-xs">instruments available</span>
              </div>
            </div>

            {/* ── Right: trading conditions panel ── */}
            <div
              className="mt-8 lg:mt-0 lg:w-80 shrink-0 rounded-xl overflow-hidden"
              style={{
                background: "rgba(8,11,16,0.8)",
                border: `1px solid rgba(${data.accentRgb},0.14)`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ borderBottom: `1px solid rgba(${data.accentRgb},0.10)` }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: data.accentColor }}
                />
                <span className="text-[10px] font-mono tracking-[0.16em] uppercase" style={{ color: data.accentColor }}>
                  Trading Conditions
                </span>
              </div>

              {/* Header row */}
              <div className="grid grid-cols-3 px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-arka-gray text-[9px] font-mono tracking-wider uppercase col-span-1"></span>
                <span
                  className="text-[9px] font-mono tracking-[0.14em] uppercase text-center"
                  style={{ color: data.accentColor }}
                >
                  RAW
                </span>
                <span className="text-arka-gray text-[9px] font-mono tracking-wider uppercase text-center">STD</span>
              </div>

              {data.conditions.map((c, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-4 py-2.5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                >
                  <span className="text-arka-gray text-xs col-span-1">{c.label}</span>
                  <span className="text-arka-white font-mono text-xs text-center">{c.raw}</span>
                  <span className="text-arka-gray font-mono text-xs text-center">{c.std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      {(showSearch || showGroupTabs) && (
        <div
          className="sticky top-[72px] z-30 py-3"
          style={{
            background: "rgba(3,5,9,0.92)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Search */}
            {showSearch && (
              <div className="relative shrink-0 sm:w-64">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search symbol or name…"
                  className="w-full bg-arka-card border border-white/[0.07] rounded-lg pl-4 pr-4 py-2 text-xs text-arka-white placeholder:text-arka-gray/50 font-mono focus:outline-none focus:border-opacity-60"
                  style={{ ["--tw-border-opacity" as string]: "1" } as React.CSSProperties}
                />
              </div>
            )}

            {/* Group tabs */}
            {showGroupTabs && (
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveGroup("All")}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all"
                  style={
                    activeGroup === "All"
                      ? {
                          background: `rgba(${data.accentRgb},0.12)`,
                          border: `1px solid rgba(${data.accentRgb},0.30)`,
                          color: data.accentColor,
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "#8A9DB5",
                        }
                  }
                >
                  All ({totalCount})
                </button>
                {data.groups.map((g) => (
                  <button
                    key={g.label}
                    onClick={() => setActiveGroup(g.label)}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide transition-all"
                    style={
                      activeGroup === g.label
                        ? {
                            background: `rgba(${data.accentRgb},0.12)`,
                            border: `1px solid rgba(${data.accentRgb},0.30)`,
                            color: data.accentColor,
                          }
                        : {
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "#8A9DB5",
                          }
                    }
                  >
                    {g.label} ({g.instruments.length})
                  </button>
                ))}
              </div>
            )}

            {/* Result count */}
            {search && (
              <span className="text-arka-gray text-[10px] font-mono ml-auto">
                {totalVisible} result{totalVisible !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      )}

      {/* ── Instrument grid ── */}
      <section className="py-10 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-arka-gray text-sm font-mono">
              No instruments match &quot;{search}&quot;
            </div>
          ) : (
            <div className="space-y-10">
              {filtered.map((group) => (
                <div key={group.label}>
                  {/* Group header — only when All is active and multiple groups */}
                  {activeGroup === "All" && showGroupTabs && (
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-arka-white text-sm font-semibold tracking-wide">
                        {group.label}
                      </h2>
                      <span className="text-arka-gray text-[10px] font-mono">
                        {group.instruments.length} instruments
                      </span>
                      <div className="flex-1 h-px bg-white/[0.04]" />
                    </div>
                  )}

                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {group.instruments.map((inst, idx) => {
                      const delay = Math.min(idx * 0.025, 0.3);
                      return (
                        <motion.div
                          key={inst.symbol}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-20px" }}
                          transition={{ duration: 0.3, delay, ease: "easeOut" }}
                          className="bg-arka-elevated border border-white/[0.04] rounded-lg px-3.5 py-3 group hover:border-opacity-20 transition-all"
                          style={
                            {
                              ["--hover-border" as string]: `rgba(${data.accentRgb},0.20)`,
                            } as React.CSSProperties
                          }
                          whileHover={{
                            borderColor: `rgba(${data.accentRgb},0.20)`,
                            transition: { duration: 0.15 },
                          }}
                        >
                          <p className="font-mono font-bold text-xs text-arka-white leading-none mb-1">
                            {inst.symbol}
                          </p>
                          <p className="text-arka-gray text-[10px] truncate leading-snug">
                            {inst.name}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
          <div
            className="inline-block rounded-2xl px-12 py-10"
            style={{
              background: `radial-gradient(ellipse at center top, rgba(${data.accentRgb},0.07) 0%, transparent 70%), rgba(8,11,16,0.6)`,
              border: `1px solid rgba(${data.accentRgb},0.12)`,
            }}
          >
            <p className="text-arka-gray text-[10px] font-mono tracking-[0.18em] uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-arka-white tracking-tight mb-3">
              Ready to trade {data.name}?
            </h2>
            <p className="text-arka-gray text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Institutional execution. Transparent pricing. One cTrader account.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 text-sm font-semibold text-arka-black rounded-lg transition-all duration-200 tracking-wide uppercase font-display glow-teal-sm"
                style={{ background: data.accentColor }}
              >
                Request Access
              </Link>
              <Link
                href="/accounts"
                className="px-6 py-3 text-sm font-medium text-arka-white border border-white/[0.10] rounded-lg hover:border-white/[0.20] transition-all duration-200 tracking-wide"
              >
                View Accounts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pb-16">
        <p className="text-arka-gray text-[11px] leading-relaxed border border-white/[0.04] rounded-lg p-4">
          <span className="text-arka-champagne font-medium">Disclaimer: </span>
          Instrument availability is subject to jurisdiction restrictions and compliance review.
          Leverage levels apply to qualifying accounts only. Some markets may not be available in all regions.
          All trading involves significant risk of loss.
        </p>
      </div>
    </div>
  );
}
