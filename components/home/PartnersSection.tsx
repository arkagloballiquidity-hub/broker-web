import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Users, Globe2, Shield, LineChart, ArrowRight } from "lucide-react";

const features = [
  {
    Icon: Users,
    title: "IB Partnerships",
    description: "Structured introducing broker program with professional conditions for volume-generating partners.",
  },
  {
    Icon: Globe2,
    title: "LATAM Growth Focus",
    description: "Active expansion across Latin American markets. Spanish-speaking compliance and support teams.",
  },
  {
    Icon: Shield,
    title: "Compliance Review",
    description: "All IB partners subject to standard KYC/KYB review. Compliant referral infrastructure.",
  },
  {
    Icon: LineChart,
    title: "Professional Conditions",
    description: "Competitive commission structures. Institutional-grade infrastructure for serious partners.",
  },
];

export default function PartnersSection() {
  return (
    <SectionWrapper id="partners" dark>
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Partners / IB
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Institutional Partner Program
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          ARKA partners with introducing brokers, fund managers and
          professional referrers operating in institutional markets.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {features.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="bg-arka-elevated border border-arka-border rounded-lg p-6"
          >
            <Icon size={18} className="text-arka-champagne mb-4" />
            <h3 className="text-arka-white text-sm font-semibold mb-2">
              {title}
            </h3>
            <p className="text-arka-gray text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <Link
          href="/partners"
          className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
        >
          Apply as Partner
          <ArrowRight size={15} />
        </Link>
        <Link
          href="/partners"
          className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded hover:border-arka-champagne transition-colors"
        >
          Partner Program Details
        </Link>
      </div>
    </SectionWrapper>
  );
}
