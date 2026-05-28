import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "Trading Conditions | ARKA Global Liquidity",
  description: "Spreads, commissions, leverage and margin for all ARKA asset classes. No hidden fees.",
};

const assetClasses = [
  {
    href: "/markets/forex",
    iconName: "ArrowUpDown" as const,
    tag: "FX",
    name: "Forex",
    detail: "RAW 0.0 pips · STD 1.6 pips",
    description: "101 currency pairs. Leverage up to 1:200. Commission: 39 USD/M (RAW) · Zero (STD).",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    href: "/markets/metals",
    iconName: "Layers" as const,
    tag: "METALS",
    name: "Spot Metals",
    detail: "RAW 0.0 pips · STD 1.6 pips",
    description: "XAU, XAG, XPT, XPD, XCU. Leverage up to 1:200. Commission: 39 USD/M (RAW) · Zero (STD).",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    href: "/markets/energies",
    iconName: "Zap" as const,
    tag: "ENERGY",
    name: "Energies",
    detail: "RAW 0.0 pips · STD 1.6 pips",
    description: "WTI crude, Brent crude, natural gas. Leverage up to 1:200. Commission: 39 USD/M (RAW) · Zero (STD).",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    href: "/markets/indices",
    iconName: "BarChart2" as const,
    tag: "INDICES",
    name: "Indices (Cash)",
    detail: "Market spread · 1:100 leverage",
    description: "14 global indices. Commission: 39 USD/M (RAW) · Zero (STD). Americas, Europe and Asia-Pacific.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    href: "/markets/equities",
    iconName: "Briefcase" as const,
    tag: "EQUITIES",
    name: "Share CFDs",
    detail: "Market spread · Variable leverage",
    description: "111 shares. US: 0.006% RAW / 0.001% STD. EU: 0.0025% both. Asia: 0.003% both.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    href: "/markets/crypto",
    iconName: "Bitcoin" as const,
    tag: "CRYPTO",
    name: "Crypto CFDs",
    detail: "Market spread · Variable leverage",
    description: "132 pairs vs USD. Commission: 0.004% (RAW) · 0.000225% (STD). No expiry.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    href: "/markets/etfs",
    iconName: "TrendingUp" as const,
    tag: "ETF",
    name: "ETF CFDs",
    detail: "Market spread · Variable leverage",
    description: "8 ETF CFDs. Commission: 39 USD/M (RAW) · Zero (STD). GLD, QQQ, SPY and more.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    href: "/markets/ndfs",
    iconName: "RefreshCw" as const,
    tag: "NDF",
    name: "NDFs",
    detail: "On request · 1:50 leverage",
    description: "7 non-deliverable forwards on emerging market currencies. Cash-settled. Institutional clients only.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
];

const keyParams = [
  { label: "Account Currency",             value: "USD only" },
  { label: "Stop Out Level",               value: "80% Smart" },
  { label: "Margin Call Level",            value: "100%" },
  { label: "Negative Balance Protection",  value: "Disabled" },
  { label: "Hedging",                      value: "Permitted" },
  { label: "Scalping",                     value: "Permitted" },
  { label: "cBots / Algo",                 value: "Permitted" },
  { label: "FIX API",                      value: "Not available" },
  { label: "Execution Type",               value: "Book A · STP · NDD · ECN" },
  { label: "Min. Deposit (RAW)",           value: "$1,000 USD" },
  { label: "Min. Deposit (STD)",           value: "$100 USD" },
  { label: "Swaps",                        value: "Applied — no swap-free" },
];

export default function TradingConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Trading Conditions
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            Spreads &amp;{" "}
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Commissions.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            All trading conditions are fixed and published. No hidden fees, no asymmetric slippage, no last-look.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://my.arkaltd.io/en/auth/sign-up" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Open Account <ArrowRight size={15} />
            </Link>
            <Link href="/accounts"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors">
              Compare Accounts
            </Link>
          </div>
        </div>
      </section>

      {/* Asset class cards */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            By Asset Class
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {assetClasses.map((a) => <PageCard key={a.tag} {...a} />)}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* Key parameters */}
      <section className="pt-16 pb-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Key Parameters
          </span>
          <div className="rounded-xl overflow-hidden max-w-2xl" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            {keyParams.map((row, i) => (
              <div key={row.label} className="flex items-center justify-between px-5 py-3.5"
                style={{
                  borderTop: i > 0 ? "1px solid rgba(255,255,255,0.03)" : "none",
                  background: i % 2 === 0 ? "rgba(8,11,16,0.5)" : "rgba(13,17,24,0.35)",
                }}>
                <span className="text-xs font-mono text-arka-gray">{row.label}</span>
                <span className="text-xs font-mono font-semibold text-arka-white">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-arka-card max-w-2xl" style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-arka-gray text-xs leading-relaxed">
              <span className="text-arka-champagne font-medium">Disclaimer: </span>
              Leverage applies to qualifying accounts only. ARKA does not accept US clients.
              All trading involves significant risk of loss.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
