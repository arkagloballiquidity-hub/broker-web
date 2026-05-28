import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { XCircle, AlertTriangle, CheckCircle } from "lucide-react";

const restricted = [
  "United States of America",
  "Iran",
  "North Korea",
  "Syria",
  "Cuba",
  "Sudan",
  "Myanmar",
  "Belarus (sanctioned entities)",
  "Russia (sanctioned entities)",
];

const conditional = [
  {
    country: "Mexico",
    note: "Subject to enhanced KYC review and source of funds documentation.",
  },
  {
    country: "Canada",
    note: "Subject to jurisdiction-specific compliance review and provincial requirements.",
  },
  {
    country: "European Union",
    note: "Subject to ESMA compliance review and additional regulatory documentation.",
  },
];

export default function RestrictedJurisdictions() {
  return (
    <SectionWrapper id="jurisdictions" dark>
      <div className="mb-12">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Compliance
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Restricted Jurisdictions
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          ARKA Global Liquidity does not accept clients from certain
          jurisdictions. Some regions are subject to enhanced review.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Not accepted */}
        <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-5">
            <XCircle size={16} className="text-arka-error" />
            <h3 className="text-arka-white text-sm font-semibold">
              Not Accepted
            </h3>
          </div>
          <ul className="space-y-2">
            {restricted.map((country) => (
              <li key={country} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-arka-error shrink-0" />
                <span className="text-arka-gray text-sm">{country}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditional */}
        <div className="space-y-4">
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle size={16} className="text-arka-champagne" />
              <h3 className="text-arka-white text-sm font-semibold">
                Subject to Enhanced Review
              </h3>
            </div>
            <div className="space-y-4">
              {conditional.map(({ country, note }) => (
                <div key={country}>
                  <p className="text-arka-white text-sm font-medium mb-1">
                    {country}
                  </p>
                  <p className="text-arka-gray text-xs leading-relaxed">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-arka-elevated border border-arka-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle size={16} className="text-arka-turquoise" />
              <p className="text-arka-white text-sm font-semibold">
                Latin America &amp; Other Regions
              </p>
            </div>
            <p className="text-arka-gray text-sm leading-relaxed">
              ARKA actively serves professional clients across Latin America,
              the Middle East, Asia and other regions. Standard KYC/KYB
              onboarding applies.
            </p>
          </div>
        </div>
      </div>

      <p className="text-arka-gray text-xs font-mono">
        This list is subject to change without notice based on regulatory
        requirements. Clients are responsible for ensuring compliance with
        local laws.
      </p>
    </SectionWrapper>
  );
}
