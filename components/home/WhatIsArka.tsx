import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import {
  Shield,
  Terminal,
  Rocket,
  Layers,
  Network,
  LineChart,
} from "lucide-react";

const features = [
  {
    Icon: Shield,
    title: "Regulated Brokerage",
    description:
      "Incorporated and regulated in Saint Lucia, operating under applicable financial regulations with formal KYC/KYB onboarding, registered No. 2025-00568.",
  },
  {
    Icon: Terminal,
    title: "cTrader-Based Platform",
    description:
      "Full cTrader ecosystem access — Web, Desktop, Android and iOS. No proprietary interfaces. Professional-grade execution environment trusted by institutional traders.",
  },
  {
    Icon: Rocket,
    title: "Book A Execution",
    description:
      "All client orders are routed via Book A execution profile with zero conflict of interest. Straight-through processing with no re-quotes and no dealing desk intervention.",
  },
  {
    Icon: Layers,
    title: "Institutional Liquidity",
    description:
      "Access to deep institutional liquidity pools across Forex, metals, energies, indices, equities and crypto CFDs through RAW and STD liquidity account structures.",
  },
  {
    Icon: Network,
    title: "Direct Market Access",
    description:
      "STP/NDD/ECN infrastructure designed for professional market participants. Transparent order execution with market depth visibility and advanced order types.",
  },
  {
    Icon: LineChart,
    title: "Transparent Conditions",
    description:
      "All trading conditions — spreads, commissions, leverage and margin — are published and contractually fixed. No hidden fees, no last-look, no asymmetric slippage.",
  },
];

export default function WhatIsArka() {
  return (
    <SectionWrapper id="about" dark>
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Infrastructure
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          A Regulated Brokerage &amp; Liquidity Infrastructure Provider
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          ARKA Global Liquidity is built for qualified clients who require
          institutional-grade infrastructure, not a retail product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="bg-arka-elevated border border-arka-border rounded-lg p-6 group hover:border-arka-champagne/40 transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-md bg-arka-midnight border border-arka-border flex items-center justify-center mb-4 group-hover:border-arka-champagne/40 transition-colors">
              <Icon size={18} className="text-arka-champagne" />
            </div>
            <h3 className="text-arka-white font-semibold text-base mb-2">
              {title}
            </h3>
            <p className="text-arka-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
