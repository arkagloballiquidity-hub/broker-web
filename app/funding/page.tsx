import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bitcoin, DollarSign, Clock, Percent, Banknote, Users, AlertTriangle } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "Funding | ARKA Global Liquidity",
  description: "Deposit and withdrawal information. Crypto and fiat funding, processing times and fee structure.",
};

const cryptoAssets = [
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bitcoin" as const,
    tag: "BTC",
    name: "Bitcoin",
    detail: "Bitcoin Network",
    description: "Primary crypto funding method. Network confirmations required before credit. Minimum deposit $100 USD equivalent.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "DollarSign" as const,
    tag: "USDT",
    name: "Tether USD",
    detail: "ERC-20 · TRC-20",
    description: "Stablecoin deposits accepted on Ethereum (ERC-20) and TRON (TRC-20) networks. Fastest processing.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "DollarSign" as const,
    tag: "USDC",
    name: "USD Coin",
    detail: "ERC-20",
    description: "USDC accepted on the Ethereum network. Regulated stablecoin issued by Circle.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bitcoin" as const,
    tag: "ETH",
    name: "Ethereum",
    detail: "ERC-20 Network",
    description: "ETH deposits accepted on the Ethereum mainnet. Subject to network gas fees.",
    accentColor: "#818CF8",
    accentRgb: "129,140,248",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bitcoin" as const,
    tag: "TRX",
    name: "TRON",
    detail: "TRC-20 Network",
    description: "TRX deposits on the TRON network. Low-fee alternative for stablecoin transfers.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bitcoin" as const,
    tag: "BNB",
    name: "BNB Chain",
    detail: "BEP-20 Network",
    description: "BNB and BEP-20 stablecoins accepted on the BNB Smart Chain network.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
];

const params = [
  { icon: Bitcoin,      label: "Primary Method",      value: "Cryptocurrency" },
  { icon: Banknote,     label: "Fiat Transfers",       value: "On request — qualified clients" },
  { icon: DollarSign,   label: "Minimum Deposit",      value: "$100 USD" },
  { icon: DollarSign,   label: "Minimum Withdrawal",   value: "$25 USD" },
  { icon: Clock,        label: "Processing Time",      value: "Up to 72 hours" },
  { icon: Percent,      label: "Withdrawal Fee",       value: "0.5%" },
  { icon: DollarSign,   label: "Account Currency",     value: "USD only" },
  { icon: Users,        label: "Third-Party Accounts", value: "Accepted (subject to review)" },
];

export default function FundingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% -10%, rgba(200,169,106,0.06) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Funding
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            Deposits &amp;{" "}
            <span style={{
              background: "linear-gradient(125deg, #C8A96A 0%, #00BAB3 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Withdrawals.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Cryptocurrency is the primary funding method. Fiat bank transfers are available on request
            for qualified clients with verified source of funds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://my.arkaltd.io/en/auth/sign-up" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Open Account <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Parameters grid */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Funding Parameters
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {params.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-arka-card rounded-xl p-5"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <Icon size={16} className="text-arka-turquoise mb-3 opacity-70" />
                <div className="text-[10px] font-mono text-arka-gray tracking-wide uppercase mb-1.5">{label}</div>
                <div className="text-sm font-semibold text-arka-white">{value}</div>
              </div>
            ))}
          </div>

          {/* Crypto assets */}
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Accepted Cryptocurrencies
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoAssets.map((c) => <PageCard key={c.tag} {...c} />)}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-arka-card" style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="flex items-start gap-3">
              <AlertTriangle size={14} className="text-arka-champagne shrink-0 mt-0.5" />
              <p className="text-arka-gray text-xs leading-relaxed">
                <span className="text-arka-champagne font-medium">Important: </span>
                Always send funds from a wallet you own. Third-party deposits are accepted but subject to compliance review.
                ARKA does not accept deposits from anonymous or unverified sources.
                Processing times may vary based on network confirmation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
