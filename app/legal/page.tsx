import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Documents | ARKA Global Liquidity",
  description:
    "Legal documentation for ARKA Global Liquidity — Terms & Conditions, Privacy Policy, Risk Warning, AML/KYC Policy and more.",
};

const docs = [
  {
    id: "terms",
    title: "Terms & Conditions",
    description:
      "Comprehensive terms of service governing all account activity, trading operations, and the legal relationship between ARKA Global Liquidity LTD and its clients.",
    available: true,
    href: "/legal/terms-of-service.pdf",
    effective: "2025",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    description:
      "Details how ARKA Global Liquidity collects, processes, stores and protects personal data in accordance with applicable data protection regulations.",
    available: true,
    href: "/legal/privacy-policy.pdf",
    effective: "2025",
  },
  {
    id: "risk",
    title: "Risk Warning",
    description:
      "Material risk disclosures for trading CFDs, leveraged instruments, and other financial products. Must be read and acknowledged before account opening.",
    available: true,
    href: "/legal/risk-warning.pdf",
    effective: "2025",
  },
  {
    id: "aml",
    title: "AML / KYC Policy",
    description:
      "Anti-money laundering and know-your-customer procedures, including client identification, transaction monitoring, suspicious activity reporting and record-keeping obligations.",
    available: true,
    href: "/legal/aml-kyc-policy.pdf",
    effective: "2025",
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    description:
      "Information about cookies and similar tracking technologies used on arkaltd.io, including categories of cookies, purposes and opt-out options.",
    available: true,
    href: "/legal/cookie-policy.pdf",
    effective: "2025",
  },
  {
    id: "execution",
    title: "Order Execution Policy",
    description:
      "Best execution obligations, order routing procedures, execution venues and factors considered when executing client orders.",
    available: true,
    href: "/legal/order-execution-policy.pdf",
    effective: "2025",
  },
  {
    id: "conflicts",
    title: "Conflicts of Interest Policy",
    description:
      "Identification, prevention and management of conflicts of interest between ARKA Global Liquidity and its clients.",
    available: true,
    href: "/legal/conflicts-of-interest-policy.pdf",
    effective: "2025",
  },
  {
    id: "dw",
    title: "Deposits & Withdrawals Policy",
    description:
      "Rules and procedures governing client fund deposits, withdrawals, processing times, fees and third-party account policies.",
    available: true,
    href: "/legal/deposits-and-withdrawals-policy.pdf",
    effective: "2025",
  },
  {
    id: "complaints",
    title: "Complaints Policy",
    description:
      "Procedure for lodging formal complaints, response timelines, escalation procedures and regulatory reporting obligations.",
    available: true,
    href: "/legal/complaints-policy.pdf",
    effective: "2025",
  },
  {
    id: "leverage",
    title: "Leverage & Margin Policy",
    description:
      "Leverage limits per instrument, margin calculation methodology, margin call procedures, stop-out rules and negative balance policy.",
    available: true,
    href: "/legal/leverage-and-margin-policy.pdf",
    effective: "2025",
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Legal Documents
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed">
            All regulatory and operational documentation governing ARKA Global
            Liquidity&apos;s services and the client relationship.
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {docs.map(({ id, title, description, available, href, effective }) => (
            <div
              key={id}
              id={id}
              className={`bg-arka-elevated border rounded-lg p-6 ${
                available
                  ? "border-arka-border hover:border-arka-champagne/30 transition-colors"
                  : "border-arka-border/40 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText
                    size={14}
                    className={available ? "text-arka-champagne" : "text-arka-gray"}
                  />
                  <h2 className="text-arka-white text-sm font-semibold">
                    {title}
                  </h2>
                </div>
                <span className="text-arka-gray font-mono text-[10px] tracking-wider shrink-0 ml-4">
                  {effective}
                </span>
              </div>
              <p className="text-arka-gray text-sm leading-relaxed mb-4">
                {description}
              </p>
              {available ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-arka-turquoise text-xs font-medium hover:text-arka-white transition-colors"
                >
                  Download PDF
                  <ExternalLink size={11} />
                </a>
              ) : (
                <span className="text-arka-gray text-xs">
                  Document not yet available
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-arka-border pt-8">
          <p className="text-arka-gray text-xs leading-relaxed max-w-3xl">
            ARKA Global Liquidity LTD reserves the right to amend any legal
            document at any time. Clients will be notified of material changes.
            Continued use of our services constitutes acceptance of the current
            versions of all applicable policies. For questions about legal
            documents, contact{" "}
            <a
              href="mailto:contacto@arkaltd.io"
              className="text-arka-turquoise hover:text-arka-white transition-colors"
            >
              contacto@arkaltd.io
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
