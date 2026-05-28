import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageCard from "@/components/ui/PageCard";

export const metadata: Metadata = {
  title: "Partners / IB Program | ARKA Global Liquidity",
  description: "Introducing broker and partner program. Professional conditions for volume-generating partners in institutional markets.",
};

const benefits = [
  {
    iconName: "DollarSign" as const,
    tag: "COMMISSION",
    name: "Competitive Commissions",
    detail: "Volume-based structures",
    description: "Earn competitive commissions on all referred client volume across every asset class. Transparent monthly statements.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    iconName: "Users" as const,
    tag: "SUPPORT",
    name: "Dedicated Account Manager",
    detail: "Direct line — EN / ES",
    description: "Each partner receives a dedicated account manager available in English and Spanish. Priority onboarding for all referred clients.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    iconName: "BarChart2" as const,
    tag: "TRACKING",
    name: "Real-Time Reporting",
    detail: "Full cTrader infrastructure",
    description: "Full cTrader partner infrastructure for tracking referred client volume, P&L and commission in real time.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    iconName: "Globe2" as const,
    tag: "LATAM",
    name: "LATAM-Focused Support",
    detail: "Spanish-speaking markets",
    description: "Dedicated support for LATAM-focused introducing brokers. Spanish-language materials, compliance guidance and market access.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    iconName: "Shield" as const,
    tag: "REGULATED",
    name: "Regulated Infrastructure",
    detail: "FSA Saint Lucia · 2025-00568",
    description: "Refer clients to a fully regulated FSA Saint Lucia broker. Institutional credibility and compliance-grade infrastructure for serious partners.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    iconName: "TrendingUp" as const,
    tag: "CONDITIONS",
    name: "Institutional Conditions",
    detail: "Book A · RAW spreads",
    description: "Referred clients access the same Book A execution, institutional liquidity and RAW spreads as direct ARKA clients.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
];

const requirements = [
  {
    iconName: "FileText" as const,
    tag: "APPLICATION",
    name: "IB Application",
    detail: "Completion required",
    description: "Complete the partner application form. Describe your distribution capability, target market and expected client volume.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
  {
    iconName: "Shield" as const,
    tag: "COMPLIANCE",
    name: "KYC / KYB",
    detail: "Same standard as clients",
    description: "Full KYC/KYB documentation is required for all partners — identical to the client onboarding standard.",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
  },
  {
    iconName: "Headphones" as const,
    tag: "PROMOTION",
    name: "Local Compliance",
    detail: "Financial promotion rules",
    description: "Partners must comply with local financial promotion regulations in all jurisdictions where they operate.",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-arka-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Partners / IB
          </span>
          <h1 className="font-display font-black text-arka-white tracking-tight mb-5 leading-[0.95]"
            style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
            Institutional{" "}
            <span style={{
              background: "linear-gradient(125deg, #00BAB3 0%, #C8A96A 80%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Partner Program.
            </span>
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            ARKA partners with introducing brokers, fund managers and professional referrers
            operating in institutional and professional client markets.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display">
              Apply as Partner <ArrowRight size={15} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors">
              Enquire About Conditions
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Partner Benefits
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <PageCard
                key={b.tag}
                href="/contact"
                iconName={b.iconName}
                tag={b.tag}
                name={b.name}
                detail={b.detail}
                description={b.description}
                accentColor={b.accentColor}
                accentRgb={b.accentRgb}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      </div>

      {/* Requirements */}
      <section className="pt-16 pb-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-turquoise font-mono text-[11px] tracking-[0.2em] uppercase mb-6 block">
            Requirements
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {requirements.map((r) => (
              <PageCard
                key={r.tag}
                href="/contact"
                iconName={r.iconName}
                tag={r.tag}
                name={r.name}
                detail={r.detail}
                description={r.description}
                accentColor={r.accentColor}
                accentRgb={r.accentRgb}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
