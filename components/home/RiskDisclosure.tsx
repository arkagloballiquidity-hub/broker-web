import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AlertTriangle } from "lucide-react";

const risks = [
  {
    title: "No Guaranteed Returns",
    description:
      "ARKA Global Liquidity makes no representation, warranty or guarantee regarding the profitability of any trading strategy or account.",
  },
  {
    title: "No Guaranteed Stop Loss",
    description:
      "Stop loss orders do not guarantee execution at the specified price during fast market conditions or gaps.",
  },
  {
    title: "Negative Balance Protection Disabled",
    description:
      "Account balances can go below zero. Clients are responsible for monitoring margin levels and maintaining sufficient equity.",
  },
  {
    title: "Segregated Funds",
    description:
      "Client funds are held in segregated accounts separate from operational funds. This does not constitute a guarantee of funds.",
  },
  {
    title: "No External Insurance",
    description:
      "Client accounts are not covered by any investor compensation scheme or external insurance arrangement.",
  },
  {
    title: "Margin &amp; Leverage Risk",
    description:
      "Leverage amplifies both profits and losses. A small adverse market movement can result in rapid and substantial losses.",
  },
];

export default function RiskDisclosure() {
  return (
    <SectionWrapper id="risk" dark>
      <div className="mb-12">
        <span className="text-arka-error font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Risk Disclosure
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Material Risk Disclosures
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Trading financial instruments involves significant risk. Review these
          disclosures before opening an account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {risks.map(({ title, description }) => (
          <div
            key={title}
            className="bg-arka-elevated border border-arka-border rounded-lg p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle
                size={14}
                className="text-arka-champagne mt-0.5 shrink-0"
              />
              <h3
                className="text-arka-white text-sm font-semibold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            <p className="text-arka-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="border border-arka-border rounded-lg p-6 bg-arka-midnight">
        <p className="text-arka-gray text-sm leading-relaxed">
          <span className="text-arka-champagne font-medium">
            Important Notice:{" "}
          </span>
          CFD trading may not be appropriate for all investors. The high degree
          of leverage can work against you as well as for you. Before deciding
          to trade CFDs you should carefully consider your investment
          objectives, level of experience and risk appetite. Only trade with
          capital you can afford to lose entirely.
        </p>
      </div>
    </SectionWrapper>
  );
}
