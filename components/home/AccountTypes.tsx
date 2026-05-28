import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const accounts = [
  {
    id: "raw",
    name: "RAW Liquidity",
    tagline: "Institutional-grade spreads with direct cost",
    minDeposit: "$1,000",
    spreadFrom: "0 pips",
    commission: "39 USD/M (FX, metals, energies, indices, ETF, NDF)",
    commissionCrypto: "0.004%",
    commissionShares: "0.006% (US) · 0.0025% (EU) · 0.003% (Asia)",
    execution: "Book A",
    leverageFX: "1:200",
    leverageIndices: "1:100",
    stopOut: "80% Smart",
    fix: false,
    primary: true,
    features: [
      "Spreads from 0.0 pips",
      "Deep institutional liquidity",
      "Book A execution profile",
      "No re-quotes",
      "STP / ECN / NDD",
      "Advanced order types",
    ],
  },
  {
    id: "std",
    name: "STD Liquidity",
    tagline: "Spread-based pricing with zero FX commission",
    minDeposit: "$100",
    spreadFrom: "1.6 pips",
    commission: "Zero on FX, metals, energies, indices, ETF, NDF",
    commissionCrypto: "0.000225%",
    commissionShares: "0.001% (US) · 0.0025% (EU) · 0.003% (Asia)",
    execution: "Book A",
    leverageFX: "1:200",
    leverageIndices: "1:100",
    stopOut: "80% Smart",
    fix: false,
    primary: false,
    features: [
      "No commission on FX/metals",
      "Spreads from 1.6 pips",
      "Book A execution profile",
      "Lower entry threshold",
      "STP / ECN / NDD",
      "Full cTrader access",
    ],
  },
];

export default function AccountTypes() {
  return (
    <SectionWrapper id="accounts">
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Account Structures
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          RAW &amp; STD Liquidity Accounts
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Two account structures. Both Book A. Both USD-denominated with 80%
          Smart Stop Out. Choose based on volume and commission preference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className={`relative bg-arka-card border rounded-lg p-8 ${
              acc.primary
                ? "border-arka-champagne/40"
                : "border-arka-border"
            }`}
          >
            {acc.primary && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-arka-champagne to-transparent rounded-t-lg" />
            )}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-arka-white font-semibold text-xl">
                  {acc.name}
                </h3>
                {acc.primary && (
                  <span className="text-arka-champagne font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 border border-arka-champagne/40 rounded">
                    Professional
                  </span>
                )}
              </div>
              <p className="text-arka-gray text-sm">{acc.tagline}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: "Min. Deposit", value: acc.minDeposit },
                { label: "Spread From", value: acc.spreadFrom },
                { label: "Execution", value: acc.execution },
                { label: "Leverage FX", value: acc.leverageFX },
                { label: "Leverage Indices", value: acc.leverageIndices },
                { label: "Stop Out", value: acc.stopOut },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1">
                    {label}
                  </p>
                  <p className="text-arka-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-arka-border pt-5 mb-6">
              <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                Commission
              </p>
              <p className="text-arka-white text-sm mb-1">{acc.commission}</p>
              <p className="text-arka-gray text-xs font-mono">
                Crypto: {acc.commissionCrypto} · Shares: {acc.commissionShares}
              </p>
            </div>

            <ul className="space-y-2 mb-8">
              {acc.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check
                    size={13}
                    className="text-arka-turquoise shrink-0"
                  />
                  <span className="text-arka-gray text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 w-full justify-center py-3 text-sm font-semibold rounded transition-colors ${
                acc.primary
                  ? "bg-arka-turquoise text-arka-black hover:bg-arka-turquoise/90"
                  : "border border-arka-border text-arka-white hover:border-arka-champagne"
              }`}
            >
              Open {acc.name} Account
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/accounts"
          className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
        >
          Full account comparison &amp; specifications
          <ArrowRight size={14} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
