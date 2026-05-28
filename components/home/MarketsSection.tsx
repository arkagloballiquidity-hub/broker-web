import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const markets = [
  {
    label: "Forex",
    leverage: "1:200",
    description: "Major, minor and exotic currency pairs with institutional spreads from 0 pips on RAW accounts.",
    tag: "FX",
  },
  {
    label: "Spot Metals",
    leverage: "1:200",
    description: "XAU/USD, XAG/USD and other spot metals with direct market access and deep liquidity.",
    tag: "METALS",
  },
  {
    label: "Spot Energies",
    leverage: "1:200",
    description: "Crude oil, natural gas and energy commodities via STP execution.",
    tag: "ENERGY",
  },
  {
    label: "Indices",
    leverage: "1:100",
    description: "US, European and Asian major indices. Cash and futures-based CFDs with institutional depth.",
    tag: "INDICES",
  },
  {
    label: "Crypto CFDs",
    leverage: "Variable",
    description: "BTC, ETH and selected major cryptocurrencies as CFD instruments. Commission-based.",
    tag: "CRYPTO",
  },
  {
    label: "US Share CFDs",
    leverage: "Variable",
    description: "NYSE and NASDAQ listed equities as CFDs. 0.001% commission on STD, 0.006% on RAW.",
    tag: "US EQ",
  },
  {
    label: "EU Share CFDs",
    leverage: "Variable",
    description: "European equity CFDs across major exchanges. 0.0025% commission on STD.",
    tag: "EU EQ",
  },
  {
    label: "Asia Share CFDs",
    leverage: "Variable",
    description: "Asian equity CFDs including Japanese, Hong Kong and other regional markets.",
    tag: "ASIA EQ",
  },
  {
    label: "ETF CFDs",
    leverage: "Variable",
    description: "Exchange-traded fund CFDs. Zero commission on STD accounts for selected instruments.",
    tag: "ETF",
  },
  {
    label: "NDFs & Selected Instruments",
    leverage: "Variable",
    description: "Non-deliverable forwards and institutional instruments. Available on qualified accounts.",
    tag: "NDF",
  },
];

export default function MarketsSection() {
  return (
    <SectionWrapper id="markets">
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Market Access
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          10 Asset Classes. One Infrastructure.
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Trade Forex, metals, energies, indices, equities and crypto CFDs
          through a single cTrader account with institutional execution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {markets.map(({ label, leverage, description, tag }) => (
          <div
            key={label}
            className="bg-arka-card border border-arka-border rounded-lg p-5 hover:border-arka-border/80 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-arka-champagne font-mono text-[10px] tracking-[0.15em] uppercase">
                {tag}
              </span>
              <span className="text-arka-gray font-mono text-[10px]">
                {leverage}
              </span>
            </div>
            <h3 className="text-arka-white text-sm font-semibold mb-2">
              {label}
            </h3>
            <p className="text-arka-gray text-xs leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="/markets"
          className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
        >
          View full market specifications
          <ChevronRight size={15} />
        </Link>
        <p className="text-arka-gray text-xs font-mono">
          Availability subject to jurisdiction review. Leverage applies to qualifying accounts only.
        </p>
      </div>
    </SectionWrapper>
  );
}
