import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const steps = [
  { num: "01", title: "Access Request", desc: "Submit initial access request via contact form." },
  { num: "02", title: "Initial Review", desc: "Compliance team reviews jurisdiction and preliminary eligibility." },
  { num: "03", title: "KYC/KYB Documentation", desc: "Submit government-issued ID, proof of address and entity documents (if applicable)." },
  { num: "04", title: "Source of Funds", desc: "Provide documentation establishing the legitimate source of trading funds." },
  { num: "05", title: "Jurisdiction Screening", desc: "Automated and manual screening against restricted jurisdiction and sanctions lists." },
  { num: "06", title: "Account Type Selection", desc: "Select RAW Liquidity or STD Liquidity based on trading profile and minimum deposit." },
  { num: "07", title: "Approval Decision", desc: "Compliance issues formal approval or requests additional documentation." },
  { num: "08", title: "cTrader Activation", desc: "cTrader account credentials issued. Platform access granted." },
  { num: "09", title: "Initial Funding", desc: "First deposit processed and credited to trading account." },
  { num: "10", title: "Ongoing Monitoring", desc: "Continuous transaction monitoring, periodic KYC refresh and compliance reporting." },
];

export default function KYCOnboarding() {
  return (
    <SectionWrapper id="compliance">
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Onboarding
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          KYC / KYB Onboarding Process
        </h2>
        <div className="flex flex-wrap gap-4">
          <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
            A structured 10-step compliance onboarding. Estimated completion
            time: approximately 4 hours for complete submissions.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-arka-card border border-arka-border rounded self-start">
            <span className="text-arka-turquoise font-mono text-xs tracking-wider">
              ~4 hours
            </span>
            <span className="text-arka-gray font-mono text-xs">
              avg. processing time
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            className="bg-arka-card border border-arka-border rounded-lg p-5 relative"
          >
            <span className="text-arka-border font-mono text-2xl font-bold leading-none mb-3 block select-none">
              {num}
            </span>
            <h3 className="text-arka-white text-xs font-semibold mb-2">
              {title}
            </h3>
            <p className="text-arka-gray text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <Link
        href="/compliance"
        className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
      >
        Full compliance documentation requirements
        <ChevronRight size={15} />
      </Link>
    </SectionWrapper>
  );
}
