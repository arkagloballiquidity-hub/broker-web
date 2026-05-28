"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is ARKA Global Liquidity a regulated broker?",
    a: "Yes. ARKA Global Liquidity LTD is incorporated and regulated in Saint Lucia under Registered No. 2025-00568. All client accounts are subject to formal KYC/KYB compliance onboarding.",
  },
  {
    q: "What is Book A execution?",
    a: "Book A execution means all client orders are routed directly to the institutional liquidity pool without internal matching or dealing desk intervention. There is zero conflict of interest — ARKA does not take the opposite side of client trades.",
  },
  {
    q: "What trading platform is available?",
    a: "ARKA operates exclusively on the cTrader platform ecosystem — Web, Desktop (Windows/Mac), Android and iOS. No proprietary platforms. FIX API trading is not available.",
  },
  {
    q: "What markets can I trade?",
    a: "You can trade Forex, spot metals, spot energies, indices, crypto CFDs, US/EU/Asia share CFDs, ETF CFDs and NDFs. Availability is subject to account type and jurisdiction review.",
  },
  {
    q: "What is the minimum deposit?",
    a: "STD Liquidity accounts require a minimum deposit of $100 USD. RAW Liquidity accounts require a minimum of $1,000 USD. All accounts are denominated in USD only.",
  },
  {
    q: "What is the difference between RAW and STD accounts?",
    a: "RAW accounts offer spreads from 0 pips with a commission of 39 USD per million on FX and most instruments. STD accounts offer zero commission on FX/metals/energies/indices/ETF/NDF with spreads from 1.6 pips. Both accounts use Book A execution.",
  },
  {
    q: "Do you accept US clients?",
    a: "No. ARKA Global Liquidity does not accept clients from the United States of America under any circumstances.",
  },
  {
    q: "How do I fund my account?",
    a: "The primary funding method is cryptocurrency. Fiat bank transfers are available on request for qualified clients. Minimum deposit is $100 USD. Processing time is up to 72 hours. A 0.5% withdrawal fee applies.",
  },
  {
    q: "How long does the onboarding process take?",
    a: "For complete documentation submissions, the estimated onboarding time is approximately 4 hours. This includes KYC/KYB review, source of funds verification, jurisdiction screening and cTrader account activation.",
  },
  {
    q: "What leverage is available?",
    a: "Forex and most instruments are available at up to 1:200 leverage. Indices are available at up to 1:100. Crypto and equity CFDs have variable leverage depending on the instrument.",
  },
  {
    q: "Is scalping and automated trading allowed?",
    a: "Yes. Scalping, hedging, news trading and cBot/algorithmic strategies are permitted without restriction. High-frequency trading and latency arbitrage strategies are subject to policy review.",
  },
  {
    q: "What is the Stop Out policy?",
    a: "The Stop Out level is 80% Smart. This means positions are closed automatically when account equity falls to 80% of the required margin. There is no negative balance protection — accounts can go below zero.",
  },
  {
    q: "Are swap/overnight fees applied?",
    a: "Yes. Swap rates apply to positions held overnight. Swap-free accounts are not currently offered. Specific swap rates are available in the cTrader platform for each instrument.",
  },
  {
    q: "Can I open multiple accounts?",
    a: "Multiple accounts may be available upon request and subject to compliance review. Contact support at support@arkaltd.io for details.",
  },
  {
    q: "How do I become an Introducing Broker (IB)?",
    a: "IB applications are reviewed by the compliance team. All prospective partners must complete standard KYC/KYB verification. Visit the Partners/IB page or contact support to begin the application process.",
  },
  {
    q: "What currency are accounts denominated in?",
    a: "All accounts are denominated in USD only. No multi-currency account base is available.",
  },
  {
    q: "Is there an investor compensation scheme?",
    a: "No. Client accounts at ARKA Global Liquidity are not covered by any investor compensation scheme or external insurance arrangement. Client funds are held in segregated accounts, but this does not constitute a guarantee.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" dark>
      <div className="mb-12">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          FAQ
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Common questions about accounts, execution, compliance and trading
          conditions.
        </p>
      </div>

      <div className="max-w-3xl space-y-2">
        {faqs.map(({ q, a }, i) => (
          <div
            key={i}
            className={`border rounded-lg transition-colors ${
              open === i
                ? "border-arka-champagne/30 bg-arka-elevated"
                : "border-arka-border bg-arka-elevated/40 hover:border-arka-border/80"
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-arka-white text-sm font-medium">{q}</span>
              {open === i ? (
                <Minus size={14} className="text-arka-champagne shrink-0" />
              ) : (
                <Plus size={14} className="text-arka-gray shrink-0" />
              )}
            </button>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="text-arka-gray text-sm leading-relaxed">{a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
