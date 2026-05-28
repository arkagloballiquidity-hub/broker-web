import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "cTrader Platform | ARKA Global Liquidity",
  description: "Trade on cTrader Web, Desktop and Mobile through ARKA. Book A execution, advanced charting and full market depth.",
};

const platforms = [
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Globe" as const,
    tag: "WEB",
    name: "cTrader Web",
    detail: "No installation required",
    description: "Full-featured browser trading interface. Access your account from any device. Real-time charts, one-click trading, full order book and account management.",
    ctaLabel: "Open Account",
    accentColor: "#818CF8",
    accentRgb: "129,140,248",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Monitor" as const,
    tag: "DESKTOP",
    name: "cTrader Desktop",
    detail: "Windows · macOS",
    description: "Native desktop application with the complete cTrader feature set. Optimized for multi-monitor setups with detachable charts, cBot manager and advanced execution tools.",
    ctaLabel: "Open Account",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Smartphone" as const,
    tag: "MOBILE",
    name: "cTrader Mobile",
    detail: "iOS · Android",
    description: "Full order management, real-time P&L, chart analysis and account monitoring on mobile. Biometric authentication and push notifications supported.",
    ctaLabel: "Open Account",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
];

const capabilities = [
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "BarChart2" as const,
    tag: "CHARTS",
    name: "Advanced Charting",
    detail: "70+ indicators · Custom timeframes",
    description: "Multi-timeframe analysis, 70+ built-in technical indicators, custom chart types and unlimited drawing tools.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "BookOpen" as const,
    tag: "DOM",
    name: "Market Depth",
    detail: "Level II order book",
    description: "Full bid/ask depth visualization with tick volume bars, cumulative volume and real-time liquidity display.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bot" as const,
    tag: "CBOTS",
    name: "Algorithmic Trading",
    detail: "cBots · C# / Python",
    description: "Build, backtest and run automated strategies via cBots. Full API access, historical data and strategy optimization tools.",
    accentColor: "#818CF8",
    accentRgb: "129,140,248",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Users" as const,
    tag: "COPY",
    name: "cTrader Copy",
    detail: "Strategy replication",
    description: "Follow and copy professional traders automatically. Full transparency on strategy performance, drawdown and risk metrics.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Bell" as const,
    tag: "ALERTS",
    name: "Price Alerts",
    detail: "Push · Email · SMS",
    description: "Set price, indicator and economic event alerts. Receive notifications across desktop, mobile and email simultaneously.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Settings" as const,
    tag: "ACCOUNT",
    name: "Account Management",
    detail: "Full portfolio control",
    description: "Manage multiple accounts, view P&L history, generate statements and control risk parameters directly from the platform.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
];

export default function CTraderPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 60% -10%, rgba(129,140,248,0.07) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Execution Platform
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            Professional Tools.{" "}
            <span style={{
              background: "linear-gradient(125deg, #818CF8 0%, #00BAB3 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Any Device.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            cTrader delivers institutional-grade execution across web, desktop and mobile.
            Full order book depth, advanced charting and one-click execution — built for serious traders.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://my.arkaltd.io/en/auth/sign-up" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Open Account <ArrowRight size={15} />
            </Link>
            <Link href="/accounts"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors">
              View Accounts
            </Link>
          </div>
        </div>
      </section>

      {/* Platform cards */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Available Platforms
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => <PageCard key={p.tag} {...p} />)}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* Capabilities */}
      <section className="pt-16 pb-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Platform Capabilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c) => <PageCard key={c.tag} {...c} />)}
          </div>
        </div>
      </section>
    </>
  );
}
