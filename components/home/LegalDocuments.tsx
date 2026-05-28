import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FileText, ExternalLink } from "lucide-react";

const docs = [
  {
    title: "Terms & Conditions",
    description: "Full terms of service governing all accounts and trading activity.",
    available: true,
    href: "/legal/terms-of-service.pdf",
  },
  {
    title: "Privacy Policy",
    description: "How ARKA collects, processes and protects personal data.",
    available: true,
    href: "/legal/privacy-policy.pdf",
  },
  {
    title: "Risk Warning",
    description: "Material risk disclosures for CFD and leveraged trading.",
    available: true,
    href: "/legal/risk-warning.pdf",
  },
  {
    title: "AML / KYC Policy",
    description: "Anti-money laundering and know-your-customer procedures.",
    available: true,
    href: "/legal/aml-kyc-policy.pdf",
  },
  {
    title: "Cookie Policy",
    description: "Use of cookies and tracking technologies on arkaltd.io.",
    available: true,
    href: "/legal/cookie-policy.pdf",
  },
  {
    title: "Order Execution Policy",
    description: "Best execution obligations and order routing procedures.",
    available: true,
    href: "/legal/order-execution-policy.pdf",
  },
  {
    title: "Conflicts of Interest Policy",
    description: "Identification and management of conflicts of interest.",
    available: true,
    href: "/legal/conflicts-of-interest-policy.pdf",
  },
  {
    title: "Deposits & Withdrawals Policy",
    description: "Rules governing fund deposits, withdrawals and processing.",
    available: true,
    href: "/legal/deposits-and-withdrawals-policy.pdf",
  },
  {
    title: "Complaints Policy",
    description: "Procedure for submitting and resolving formal complaints.",
    available: true,
    href: "/legal/complaints-policy.pdf",
  },
  {
    title: "Leverage & Margin Policy",
    description: "Leverage limits, margin requirements and stop-out procedures.",
    available: true,
    href: "/legal/leverage-and-margin-policy.pdf",
  },
];

export default function LegalDocuments() {
  return (
    <SectionWrapper id="legal">
      <div className="mb-12">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Legal
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Legal Documents
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          All regulatory and operational documentation governing ARKA Global
          Liquidity&apos;s services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {docs.map(({ title, description, available, href }) => (
          <div
            key={title}
            className={`bg-arka-card border rounded-lg p-5 flex flex-col ${
              available
                ? "border-arka-border hover:border-arka-champagne/40 transition-colors group"
                : "border-arka-border/40 opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <FileText
                size={14}
                className={available ? "text-arka-champagne" : "text-arka-gray"}
              />
              {!available && (
                <span className="text-arka-gray font-mono text-[9px] tracking-wider uppercase">
                  Coming soon
                </span>
              )}
            </div>
            <h3 className="text-arka-white text-xs font-semibold mb-2">
              {title}
            </h3>
            <p className="text-arka-gray text-xs leading-relaxed flex-1 mb-4">
              {description}
            </p>
            {available ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-arka-turquoise text-xs font-medium hover:text-arka-white transition-colors mt-auto"
              >
                View Document
                <ExternalLink size={11} />
              </a>
            ) : (
              <span className="text-arka-gray text-xs mt-auto">
                Not yet available
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
