import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpDown, Layers, Zap, BarChart2, Briefcase, Bitcoin, TrendingUp, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Markets | ARKA Global Liquidity",
  description:
    "Trade Forex, metals, energies, indices, equity CFDs, ETFs, crypto CFDs and NDFs through ARKA Global Liquidity's cTrader infrastructure.",
};

const markets = [
  {
    href: "/markets/forex",
    icon: ArrowUpDown,
    name: "Forex",
    tag: "FX",
    count: "101 instruments",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Major, minor and exotic currency pairs with institutional ECN/STP execution and RAW spreads from 0.0 pips.",
  },
  {
    href: "/markets/metals",
    icon: Layers,
    name: "Metals",
    tag: "METALS",
    count: "13 instruments",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "Spot gold, silver, platinum, palladium and copper with direct market access and institutional spreads.",
  },
  {
    href: "/markets/energies",
    icon: Zap,
    name: "Energies",
    tag: "ENERGY",
    count: "3 instruments",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "WTI crude oil, Brent crude and natural gas via STP execution with institutional-grade order book pricing.",
  },
  {
    href: "/markets/indices",
    icon: BarChart2,
    name: "Indices",
    tag: "INDICES",
    count: "14 instruments",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Global equity indices across the Americas, Europe and Asia-Pacific. Cash and futures-based CFDs.",
  },
  {
    href: "/markets/equities",
    icon: Briefcase,
    name: "Equities",
    tag: "EQUITIES",
    count: "111 instruments",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "Share CFDs from the USA, Europe and Asia — from Apple and Tesla to Toyota and Tencent.",
  },
  {
    href: "/markets/crypto",
    icon: Bitcoin,
    name: "Crypto",
    tag: "CRYPTO",
    count: "132 instruments",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Major coins, altcoins and cross-crypto pairs. Commission-based pricing on RAW and STD accounts.",
  },
  {
    href: "/markets/etfs",
    icon: TrendingUp,
    name: "ETFs",
    tag: "ETF",
    count: "8 instruments",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "ETF CFDs covering equities, commodities and leveraged strategies. Zero commission on STD accounts.",
  },
  {
    href: "/markets/ndfs",
    icon: RefreshCw,
    name: "NDFs",
    tag: "NDF",
    count: "7 instruments",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Non-deliverable forwards on emerging market currencies for qualified institutional clients.",
  },
];

export default function MarketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-arka-black relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Markets
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Global Market Access
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            8 asset classes. Institutional execution. One cTrader account. Trade Forex,
            metals, energies, indices, equities, ETFs, crypto and NDFs through Book A
            infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display"
            >
              Request Access
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/trading-conditions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors"
            >
              Trading Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Markets grid */}
      <section className="py-16 lg:py-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {markets.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.href}
                  href={m.href}
                  className="group flex flex-col bg-arka-card border border-white/[0.05] rounded-xl p-5 hover:border-opacity-25 transition-all duration-200"
                  style={
                    {
                      ["--tw-shadow" as string]: `0 0 0 0 rgba(${m.accentRgb},0)`,
                    } as React.CSSProperties
                  }
                >
                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `rgba(${m.accentRgb},0.08)`,
                        border: `1px solid rgba(${m.accentRgb},0.18)`,
                      }}
                    >
                      <Icon size={18} style={{ color: m.accentColor }} />
                    </div>
                    <span
                      className="text-[9px] font-mono tracking-[0.14em] uppercase px-2 py-1 rounded-full"
                      style={{
                        color: m.accentColor,
                        background: `rgba(${m.accentRgb},0.08)`,
                        border: `1px solid rgba(${m.accentRgb},0.16)`,
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Name + count */}
                  <h2 className="text-arka-white text-base font-semibold mb-1 group-hover:text-white transition-colors">
                    {m.name}
                  </h2>
                  <p
                    className="text-[10px] font-mono mb-3"
                    style={{ color: m.accentColor }}
                  >
                    {m.count}
                  </p>

                  {/* Description */}
                  <p className="text-arka-gray text-xs leading-relaxed flex-1">
                    {m.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="mt-4 flex items-center gap-1.5 text-[11px] font-mono tracking-wide transition-colors"
                    style={{ color: m.accentColor }}
                  >
                    View instruments
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-5 border border-arka-border/50 rounded-lg bg-arka-card">
            <p className="text-arka-gray text-xs leading-relaxed">
              <span className="text-arka-champagne font-medium">Disclaimer: </span>
              Instrument availability is subject to jurisdiction restrictions and compliance review.
              Leverage levels apply to qualifying accounts only. Some markets may not be available in
              all regions. All trading involves significant risk of loss.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
