import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | ARKA Global Liquidity",
  description:
    "Contact ARKA Global Liquidity for account opening, platform support, compliance inquiries and partner applications.",
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Contact Email",
    value: "contacto@arkaltd.io",
    href: "mailto:contacto@arkaltd.io",
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
          <ContactForm lang="en" />
        </div>
      </SectionWrapper>
    </>
  );
}
