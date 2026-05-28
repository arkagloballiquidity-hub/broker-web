import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Terminal, CreditCard, Shield, Wrench, Mail, Clock } from "lucide-react";

const channels = [
  {
    Icon: Terminal,
    title: "Platform Support",
    description: "cTrader login issues, order management, platform configuration and technical trading questions.",
  },
  {
    Icon: CreditCard,
    title: "Funding Support",
    description: "Deposit confirmations, withdrawal processing, transaction tracking and account funding inquiries.",
  },
  {
    Icon: Shield,
    title: "Compliance Support",
    description: "KYC/KYB documentation, account verification status, regulatory inquiries and onboarding guidance.",
  },
  {
    Icon: Wrench,
    title: "Technical Support",
    description: "cBot connectivity, API questions (non-FIX), data feeds and integration assistance.",
  },
];

export default function SupportSection() {
  return (
    <SectionWrapper id="support">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
            Support
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
            24-Hour Client Support
          </h2>
          <p className="text-arka-gray text-lg leading-relaxed mb-8">
            Dedicated support in English and Spanish. Available 24 hours for
            all account, platform and compliance inquiries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-arka-card border border-arka-border flex items-center justify-center shrink-0">
                <Mail size={16} className="text-arka-champagne" />
              </div>
              <div>
                <p className="text-arka-gray text-xs font-mono uppercase tracking-wider mb-0.5">
                  Email
                </p>
                <a
                  href="mailto:support@arkaltd.io"
                  className="text-arka-white text-sm font-medium hover:text-arka-turquoise transition-colors"
                >
                  support@arkaltd.io
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-arka-card border border-arka-border flex items-center justify-center shrink-0">
                <Clock size={16} className="text-arka-champagne" />
              </div>
              <div>
                <p className="text-arka-gray text-xs font-mono uppercase tracking-wider mb-0.5">
                  Availability
                </p>
                <p className="text-arka-white text-sm font-medium">
                  24 hours · English &amp; Spanish
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-arka-card border border-arka-border rounded-lg p-5 hover:border-arka-champagne/30 transition-colors"
            >
              <Icon size={16} className="text-arka-champagne mb-3" />
              <h3 className="text-arka-white text-sm font-semibold mb-2">
                {title}
              </h3>
              <p className="text-arka-gray text-xs leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
