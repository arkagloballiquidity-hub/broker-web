import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Bitcoin, Banknote, Clock, Percent, DollarSign, Users, ChevronRight } from "lucide-react";

const details = [
  { Icon: Bitcoin, label: "Deposit Methods", value: "Crypto + Fiat on request" },
  { Icon: DollarSign, label: "Min. Deposit", value: "$100 USD" },
  { Icon: DollarSign, label: "Min. Withdrawal", value: "$25 USD" },
  { Icon: Clock, label: "Processing Time", value: "Up to 72 hours" },
  { Icon: Percent, label: "Withdrawal Fee", value: "0.5%" },
  { Icon: Users, label: "Third-Party Accounts", value: "Accepted (subject to review)" },
  { Icon: Banknote, label: "Account Currency", value: "USD only" },
  { Icon: Clock, label: "Deposit Processing", value: "Crypto: typically same day" },
];

export default function FundingSection() {
  return (
    <SectionWrapper id="funding" dark>
      <div className="mb-14">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Deposits &amp; Withdrawals
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Funding Your Account
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          Cryptocurrency deposits are the primary funding method. Fiat transfers
          are available on request for qualified clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {details.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="bg-arka-elevated border border-arka-border rounded-lg p-5"
          >
            <Icon size={16} className="text-arka-champagne mb-3" />
            <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1.5">
              {label}
            </p>
            <p className="text-arka-white text-sm font-medium">{value}</p>
          </div>
        ))}
      </div>

      <div className="bg-arka-elevated border border-arka-border rounded-lg p-6 mb-6">
        <h3 className="text-arka-white text-sm font-semibold mb-3">
          Third-Party Accounts Policy
        </h3>
        <p className="text-arka-gray text-sm leading-relaxed">
          Deposits from third-party accounts are accepted subject to
          compliance review and source of funds documentation. All deposits
          must pass AML/KYC verification. ARKA reserves the right to request
          additional documentation at any time.
        </p>
      </div>

      <Link
        href="/funding"
        className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
      >
        Full funding guide &amp; accepted methods
        <ChevronRight size={15} />
      </Link>
    </SectionWrapper>
  );
}
