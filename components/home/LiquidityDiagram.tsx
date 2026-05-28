import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

const steps = [
  { label: "Client", sub: "cTrader Account" },
  { label: "ARKA Platform", sub: "Routing Engine" },
  { label: "Book A Profile", sub: "Zero Conflict" },
  { label: "Institutional Liquidity", sub: "Deep Pools" },
  { label: "Market Execution", sub: "STP / NDD / ECN" },
  { label: "Reporting", sub: "Real-time + Monthly" },
];

export default function LiquidityDiagram() {
  return (
    <SectionWrapper id="execution">
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Execution Architecture
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Liquidity &amp; Execution Flow
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Every order follows a deterministic path from client to market. No
          dealing desk, no internal crossing, no conflict of interest.
        </p>
      </div>

      {/* Flow diagram */}
      <div className="relative">
        {/* Desktop horizontal flow */}
        <div className="hidden lg:flex items-start justify-between gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center text-center flex-1">
                <div className="w-14 h-14 rounded-lg bg-arka-card border border-arka-border flex items-center justify-center mb-3 relative">
                  <span className="text-arka-champagne font-mono text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i === 0 && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-arka-turquoise animate-pulse" />
                  )}
                </div>
                <p className="text-arka-white text-xs font-semibold mb-1 leading-tight">
                  {step.label}
                </p>
                <p className="text-arka-gray font-mono text-[10px] tracking-wide">
                  {step.sub}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-start pt-7 px-1">
                  <ArrowRight
                    size={14}
                    className="text-arka-border shrink-0"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-arka-card border border-arka-border flex items-center justify-center shrink-0">
                  <span className="text-arka-champagne font-mono text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-arka-border mt-1" />
                )}
              </div>
              <div className="pt-2 pb-6">
                <p className="text-arka-white text-sm font-semibold">
                  {step.label}
                </p>
                <p className="text-arka-gray font-mono text-xs">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
        {[
          { value: "Book A", label: "Execution Profile" },
          { value: "STP/NDD/ECN", label: "Routing Type" },
          { value: "0", label: "Dealing Desk Intervention" },
          { value: "24h", label: "Reporting & Monitoring" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="bg-arka-card border border-arka-border rounded-lg p-5 text-center"
          >
            <p className="text-arka-white font-mono text-lg font-semibold mb-1">
              {value}
            </p>
            <p className="text-arka-gray text-xs">{label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
