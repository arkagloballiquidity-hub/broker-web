import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Check, AlertTriangle } from "lucide-react";

const allowed = [
  { label: "Scalping", note: "No restrictions on scalping or high-frequency order placement." },
  { label: "Hedging", note: "Full hedging permitted. Long and short positions can be held simultaneously." },
  { label: "cBots / Algorithmic Trading", note: "cTrader Automate (C# cBots) fully supported. No strategy restrictions." },
  { label: "News Trading", note: "Trading during news events is permitted without restrictions." },
];

const conditional = [
  {
    label: "Latency Arbitrage",
    note: "Subject to fair use policy. Systematic latency exploitation may trigger review.",
  },
  {
    label: "High-Frequency Trading (HFT)",
    note: "HFT strategies subject to infrastructure review and approval. Contact compliance.",
  },
];

export default function TradingPolicies() {
  return (
    <SectionWrapper id="policies">
      <div className="mb-12">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Trading Rules
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Trading Policies
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          ARKA operates a permissive trading environment. Most professional
          strategies are permitted. HFT and arbitrage strategies require
          prior notification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Permitted */}
        <div className="bg-arka-card border border-arka-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-5">
            <Check size={15} className="text-arka-turquoise" />
            <h3 className="text-arka-white text-sm font-semibold">
              Permitted Strategies
            </h3>
          </div>
          <div className="space-y-4">
            {allowed.map(({ label, note }) => (
              <div key={label} className="flex gap-3">
                <Check
                  size={14}
                  className="text-arka-turquoise mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-arka-white text-sm font-medium mb-0.5">
                    {label}
                  </p>
                  <p className="text-arka-gray text-xs leading-relaxed">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditional */}
        <div className="space-y-4">
          <div className="bg-arka-card border border-arka-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle size={15} className="text-arka-champagne" />
              <h3 className="text-arka-white text-sm font-semibold">
                Subject to Policy Review
              </h3>
            </div>
            <div className="space-y-4">
              {conditional.map(({ label, note }) => (
                <div key={label} className="flex gap-3">
                  <AlertTriangle
                    size={14}
                    className="text-arka-champagne mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-arka-white text-sm font-medium mb-0.5">
                      {label}
                    </p>
                    <p className="text-arka-gray text-xs leading-relaxed">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Base Currency", value: "USD only" },
              { label: "FIX API", value: "Not available" },
              { label: "Stop Out Level", value: "80% Smart" },
              { label: "Negative Balance", value: "Not protected" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-arka-card border border-arka-border rounded-lg p-4"
              >
                <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1">
                  {label}
                </p>
                <p className="text-arka-white text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
