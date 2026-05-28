import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import {
  Globe,
  Monitor,
  Smartphone,
  BarChart2,
  BookOpen,
  GitBranch,
  Bot,
  Users,
  FileText,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    Icon: Globe,
    title: "cTrader Web",
    description: "Full-featured browser-based trading. No installation required. Access from any device.",
  },
  {
    Icon: Monitor,
    title: "cTrader Desktop",
    description: "Windows and Mac native application with complete charting, DOM and algorithmic trading capabilities.",
  },
  {
    Icon: Smartphone,
    title: "Android & iOS",
    description: "Native mobile apps with full order management, real-time charts and account monitoring.",
  },
  {
    Icon: BarChart2,
    title: "Advanced Charting",
    description: "Institutional-grade charting with 70+ indicators, multiple timeframes and drawing tools.",
  },
  {
    Icon: BookOpen,
    title: "Market Depth",
    description: "Level II order book with real-time bid/ask depth, tick volumes and liquidity visualization.",
  },
  {
    Icon: GitBranch,
    title: "Advanced Orders",
    description: "Stop, limit, market, stop-limit, trailing stop and time-based orders with full conditional logic.",
  },
  {
    Icon: Bot,
    title: "cTrader Automate",
    description: "C# based algorithmic trading with cBots. Backtesting engine with tick-level historical data.",
  },
  {
    Icon: Users,
    title: "cTrader Copy",
    description: "Strategy provider infrastructure for signal providers and money managers. Segregated copy execution.",
  },
  {
    Icon: FileText,
    title: "Monthly Statements",
    description: "Automated monthly account statements with full trade history, P&L and commission breakdown.",
  },
];

export default function CTraderPlatform() {
  return (
    <SectionWrapper id="ctrader" dark>
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Platform
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          cTrader Ecosystem
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          The complete cTrader suite — Web, Desktop, Android and iOS — with
          advanced execution infrastructure for professional traders.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-arka-elevated border border-arka-border rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-arka-error" />
          <span className="text-arka-gray font-mono text-xs tracking-wider">
            FIX API trading not available
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {features.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="bg-arka-elevated border border-arka-border rounded-lg p-6 group hover:border-arka-champagne/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <Icon size={16} className="text-arka-champagne shrink-0" />
              <h3 className="text-arka-white text-sm font-semibold">{title}</h3>
            </div>
            <p className="text-arka-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/ctrader"
        className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
      >
        Full cTrader platform overview
        <ChevronRight size={15} />
      </Link>
    </SectionWrapper>
  );
}
