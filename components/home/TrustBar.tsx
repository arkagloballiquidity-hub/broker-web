import React from "react";
import {
  Shield,
  Zap,
  Globe2,
  Monitor,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";

const items = [
  { Icon: Shield, label: "Saint Lucia Regulated" },
  { Icon: Zap, label: "Book A Execution" },
  { Icon: Globe2, label: "Direct Market Access" },
  { Icon: Monitor, label: "cTrader Web/Desktop/Mobile" },
  { Icon: Users, label: "RAW & STD Accounts" },
  { Icon: Clock, label: "24h Support" },
  { Icon: DollarSign, label: "USD Accounts" },
];

export default function TrustBar() {
  return (
    <div className="bg-arka-card border-y border-arka-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-8">
          {items.map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              <div className="flex items-center gap-2">
                <Icon size={13} className="text-arka-champagne shrink-0" />
                <span className="text-arka-gray font-mono text-[11px] tracking-wider whitespace-nowrap">
                  {label}
                </span>
              </div>
              {i < items.length - 1 && (
                <span className="hidden lg:block w-px h-3 bg-arka-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
