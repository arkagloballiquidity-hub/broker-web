import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "Account Types | ARKA Global Liquidity",
  description: "RAW and STD Liquidity accounts. Both Book A execution on cTrader. Start from $100 USD.",
};

const accounts = [
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "BarChart2" as const,
    tag: "STD",
    name: "Standard Liquidity",
    detail: "From 1.6 pips · Zero commission",
    description:
      "Commission-free trading with competitive all-in spreads. Full cTrader access from just $100 USD. Ideal for traders who prefer a simple, flat-cost structure.",
    ctaLabel: "Open Account",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Zap" as const,
    tag: "RAW",
    name: "Professional Liquidity",
    detail: "From 0.0 pips · ECN/STP",
    description:
      "Institutional interbank spreads with a transparent 39 USD/M commission. Designed for high-volume traders, funds and professional participants from $1,000 USD.",
    ctaLabel: "Open Account",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
];

const comparison = [
  { label: "Minimum Deposit",                                  raw: "$1,000 USD",    std: "$100 USD",    hi: false },
  { label: "Spread From",                                      raw: "0.0 pips",      std: "1.6 pips",    hi: true  },
  { label: "Commission (FX / Metals / Energies / Indices / ETF / NDF)", raw: "39 USD/M", std: "Zero",   hi: false },
  { label: "Commission (Crypto)",                              raw: "0.004%",        std: "0.000225%",   hi: false },
  { label: "Commission (US Shares)",                           raw: "0.006%",        std: "0.001%",      hi: false },
  { label: "Commission (EU Shares)",                           raw: "0.0025%",       std: "0.0025%",     hi: false },
  { label: "Commission (Asia Shares)",                         raw: "0.003%",        std: "0.003%",      hi: false },
  { label: "Execution Profile",                                raw: "Book A",        std: "Book A",      hi: false },
  { label: "Leverage (Forex / Metals / Energies)",             raw: "1:200",         std: "1:200",       hi: false },
  { label: "Leverage (Indices)",                               raw: "1:100",         std: "1:100",       hi: false },
  { label: "Stop Out Level",                                   raw: "80% Smart",     std: "80% Smart",   hi: false },
  { label: "Account Currency",                                 raw: "USD only",      std: "USD only",    hi: false },
  { label: "Platform",                                         raw: "cTrader",       std: "cTrader",     hi: false },
  { label: "cBots / Automate",                                 raw: "Supported",     std: "Supported",   hi: false },
  { label: "cTrader Copy",                                     raw: "Supported",     std: "Supported",   hi: false },
  { label: "Negative Balance Protection",                      raw: "Disabled",      std: "Disabled",    hi: false },
  { label: "Swaps",                                            raw: "Applied",       std: "Applied",     hi: false },
  { label: "FIX API",                                          raw: "Not available", std: "Not available", hi: false },
];

export default function AccountsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Account Types
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            Two Accounts.{" "}
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Both Book A.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Choose based on volume and cost preference. Identical execution quality on both.
            Both USD-denominated, both on cTrader.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://my.arkaltd.io/en/auth/sign-up" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Open Account <ArrowRight size={15} />
            </Link>
            <Link href="/trading-conditions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors">
              Trading Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Account cards */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {accounts.map((a) => (
              <PageCard key={a.tag} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="pt-4 pb-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <h2 className="text-arka-white font-display font-bold text-xl mb-6 tracking-tight">
            Full Specification
          </h2>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="grid" style={{
              gridTemplateColumns: "1fr 160px 160px",
              background: "rgba(8,11,16,0.9)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <div className="px-5 py-3.5 text-[10px] font-mono text-arka-gray tracking-[0.2em] uppercase">Specification</div>
              <div className="px-5 py-3.5 text-center text-[10px] font-mono tracking-[0.15em] uppercase" style={{ color: "#00BAB3" }}>RAW</div>
              <div className="px-5 py-3.5 text-center text-[10px] font-mono tracking-[0.15em] uppercase" style={{ color: "#C8A96A" }}>STD</div>
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className="grid"
                style={{
                  gridTemplateColumns: "1fr 160px 160px",
                  borderTop: "1px solid rgba(255,255,255,0.03)",
                  background: i % 2 === 0 ? "rgba(8,11,16,0.5)" : "rgba(13,17,24,0.35)",
                }}>
                <div className="px-5 py-3.5 text-xs font-mono text-arka-gray">{row.label}</div>
                <div className="px-5 py-3.5 text-center">
                  <span className={`text-sm font-mono font-semibold tabular-nums ${row.hi ? "text-arka-turquoise" : "text-arka-white"}`}>
                    {row.raw}
                  </span>
                </div>
                <div className="px-5 py-3.5 text-center">
                  <span className="text-sm font-mono font-semibold tabular-nums text-arka-gray">{row.std}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-arka-card" style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-arka-gray text-xs leading-relaxed">
              <span className="text-arka-champagne font-medium">Disclaimer: </span>
              Leverage applies to qualifying accounts only. ARKA does not accept US clients.
              Negative balance protection is not available. All trading involves significant risk of loss.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
