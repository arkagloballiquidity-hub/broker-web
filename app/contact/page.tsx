import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | ARKA Global Liquidity",
  description:
    "Contact ARKA Global Liquidity for account opening, platform support, compliance inquiries and partner applications.",
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Support Email",
    value: "support@arkaltd.io",
    href: "mailto:support@arkaltd.io",
  },
  {
    Icon: Clock,
    label: "Availability",
    value: "24 hours · English & Spanish",
    href: null,
  },
  {
    Icon: Globe,
    label: "Website",
    value: "arkaltd.io",
    href: "https://arkaltd.io",
  },
  {
    Icon: MapPin,
    label: "Registered Address",
    value: "Ground Floor, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, St. Lucia",
    href: null,
  },
];

const inquiryTypes = [
  { value: "account", label: "Account Opening" },
  { value: "platform", label: "Platform Support" },
  { value: "funding", label: "Funding & Withdrawals" },
  { value: "compliance", label: "Compliance & KYC" },
  { value: "partner", label: "Partnership / IB Program" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Contact
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed">
            24-hour support in English and Spanish. Contact us for account
            openings, platform questions, compliance inquiries and partnership
            applications.
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-semibold text-arka-white mb-8">
              Contact Information
            </h2>
            <div className="space-y-5 mb-10">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-arka-elevated border border-arka-border flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-arka-champagne" />
                  </div>
                  <div>
                    <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-arka-white text-sm font-medium hover:text-arka-turquoise transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-arka-white text-sm font-medium">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-arka-elevated border border-arka-border rounded-lg p-5">
              <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                Registration
              </p>
              <p className="text-arka-white text-sm font-medium mb-1">
                ARKA Global Liquidity LTD
              </p>
              <p className="text-arka-gray text-xs font-mono">
                Registered No. 2025-00568 · Saint Lucia
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-arka-white mb-8">
              Send a Message
            </h2>
            <form
              action={`mailto:support@arkaltd.io`}
              method="GET"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                  Inquiry Type
                </label>
                <select
                  name="type"
                  className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm focus:outline-none focus:border-arka-turquoise/60 transition-colors appearance-none"
                >
                  {inquiryTypes.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                  Country of Residence
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="e.g. Colombia, Brazil, UAE..."
                  className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                  Message *
                </label>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="Describe your inquiry..."
                  className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors resize-none"
                />
              </div>

              <div className="bg-arka-midnight border border-arka-border rounded p-4">
                <p className="text-arka-gray text-xs leading-relaxed">
                  By submitting this form you confirm that you have read the
                  Risk Warning and understand that trading involves significant
                  risk of loss. ARKA does not accept clients from the United
                  States.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
              >
                Send Message
              </button>

              <p className="text-arka-gray text-xs text-center">
                Or email directly:{" "}
                <a
                  href="mailto:support@arkaltd.io"
                  className="text-arka-turquoise hover:text-arka-white transition-colors"
                >
                  support@arkaltd.io
                </a>
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
