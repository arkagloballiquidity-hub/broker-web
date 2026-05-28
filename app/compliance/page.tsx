import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "Compliance | ARKA Global Liquidity",
  description: "KYC/KYB onboarding, AML policies and compliance requirements for ARKA account applicants.",
};

const steps = [
  { iconName: "FileCheck" as const,   tag: "01", name: "Access Request",        detail: "Submit via portal or email",                    description: "Submit your application through the client portal or email support@arkaltd.io. Initial access request takes 5 minutes.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
  { iconName: "Search" as const,      tag: "02", name: "Initial Review",         detail: "Jurisdiction screening — 1–2h",                 description: "Preliminary eligibility check. Jurisdiction restrictions and initial compliance screening are applied automatically.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
  { iconName: "User" as const,        tag: "03", name: "KYC / KYB Documentation", detail: "ID · Address · Entity docs",                  description: "Government-issued ID, proof of address. Corporate applicants submit entity documents for all directors and UBOs.", accentColor: "#C8A96A", accentRgb: "200,169,106" },
  { iconName: "Wallet" as const,      tag: "04", name: "Source of Funds",        detail: "Bank statements · Proof of income",             description: "Documentation demonstrating the lawful origin of trading capital. Bank statements, income proof or business revenue evidence.", accentColor: "#C8A96A", accentRgb: "200,169,106" },
  { iconName: "Shield" as const,      tag: "05", name: "Jurisdiction Screening",  detail: "Sanctions · PEP · Adverse media",              description: "Automated sanctions list screening, PEP check and adverse media review. Typically completed within 1 hour.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
  { iconName: "Settings" as const,    tag: "06", name: "Account Type Selection",  detail: "RAW or STD · Client decision",                 description: "Choose RAW or STD Liquidity based on trading profile and minimum deposit requirement.", accentColor: "#C8A96A", accentRgb: "200,169,106" },
  { iconName: "CheckCircle" as const, tag: "07", name: "Approval Decision",       detail: "Formal letter — 1–2h",                         description: "Compliance issues a formal approval letter or requests additional documentation. Clear and documented decision in all cases.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
  { iconName: "Settings" as const,    tag: "08", name: "cTrader Activation",      detail: "Credentials issued — 30 min",                  description: "cTrader account credentials are issued. Platform access is granted immediately upon activation.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
  { iconName: "Wallet" as const,      tag: "09", name: "Initial Funding",         detail: "Crypto or fiat (on request)",                  description: "First deposit made via cryptocurrency. Fiat bank transfer available on request for qualified clients.", accentColor: "#C8A96A", accentRgb: "200,169,106" },
  { iconName: "Eye" as const,         tag: "10", name: "Ongoing Monitoring",      detail: "Continuous · Annual refresh",                  description: "Continuous transaction monitoring, periodic KYC refresh and annual compliance review for all active accounts.", accentColor: "#00BAB3", accentRgb: "0,186,179" },
];

const docSets = [
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "User" as const,
    tag: "INDIVIDUAL",
    name: "Individual Clients",
    detail: "KYC — persons",
    description: "Valid government-issued photo ID (passport preferred) · Proof of address (within 3 months) · Source of funds documentation · Signed ARKA Terms & Conditions · Risk Acknowledgment form.",
    ctaLabel: "Apply Now",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    external: true,
  },
  {
    href: "https://my.arkaltd.io/en/auth/sign-up",
    iconName: "Building2" as const,
    tag: "CORPORATE",
    name: "Corporate Entities",
    detail: "KYB — companies & funds",
    description: "Certificate of incorporation · Articles of Association · Register of Directors and Shareholders · Proof of registered address · KYC for all directors and UBOs · Board resolution authorizing account opening.",
    ctaLabel: "Apply Now",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    external: true,
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Compliance
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            KYC / KYB{" "}
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Onboarding.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Structured 10-step compliance onboarding for individuals and corporate entities.
            Estimated completion: approximately 4 hours for complete submissions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://my.arkaltd.io/en/auth/sign-up" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Start Application <ArrowRight size={15} />
            </Link>
            <Link href="/accounts"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors">
              View Accounts
            </Link>
          </div>
        </div>
      </section>

      {/* Onboarding steps */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Onboarding Steps
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {steps.map((s) => (
              <PageCard
                key={s.tag}
                href="https://my.arkaltd.io/en/auth/sign-up"
                iconName={s.iconName}
                tag={s.tag}
                name={s.name}
                detail={s.detail}
                description={s.description}
                accentColor={s.accentColor}
                accentRgb={s.accentRgb}
                external
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* Required documents */}
      <section className="pt-16 pb-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Required Documentation
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {docSets.map((d) => <PageCard key={d.tag} {...d} />)}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-arka-card max-w-3xl" style={{ border: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-arka-gray text-xs leading-relaxed">
              <span className="text-arka-champagne font-medium">Regulatory note: </span>
              ARKA Global Liquidity LTD is regulated by the Financial Services Authority of Saint Lucia,
              Reg. No. 2025-00568. ARKA does not accept clients from the United States or any jurisdiction
              where the provision of such services would be contrary to local law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
