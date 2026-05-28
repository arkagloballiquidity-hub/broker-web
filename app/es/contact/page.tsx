import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | ARKA Global Liquidity",
  description:
    "Contacta a ARKA Global Liquidity para apertura de cuentas, soporte de plataforma, consultas de cumplimiento y solicitudes de partners.",
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Email de Contacto",
    value: "contacto@arkaltd.io",
    href: "mailto:contacto@arkaltd.io",
  },
  {
    Icon: Clock,
    label: "Disponibilidad",
    value: "24 horas · Español e inglés",
    href: null,
  },
  {
    Icon: Globe,
    label: "Sitio Web",
    value: "arkaltd.io",
    href: "https://arkaltd.io",
  },
  {
    Icon: MapPin,
    label: "Dirección Registrada",
    value: "Ground Floor, La Place Creole Building, Rodney Village, Rodney Bay, Gros-Islet, St. Lucia",
    href: null,
  },
];

export default function EsContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Contacto
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Contáctanos
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed">
            Soporte 24 horas en español e inglés. Contáctanos para apertura de
            cuentas, preguntas sobre la plataforma, consultas de cumplimiento y
            solicitudes de partnership.
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold text-arka-white mb-8">
              Información de Contacto
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
                Registro
              </p>
              <p className="text-arka-white text-sm font-medium mb-1">
                ARKA Global Liquidity LTD
              </p>
              <p className="text-arka-gray text-xs font-mono">
                Reg. No. 2025-00568 · Saint Lucia
              </p>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm lang="es" />
        </div>
      </SectionWrapper>
    </>
  );
}
