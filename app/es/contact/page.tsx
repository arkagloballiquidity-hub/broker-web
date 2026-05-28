import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Mail, MapPin, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | ARKA Global Liquidity",
  description:
    "Contacta a ARKA Global Liquidity para apertura de cuentas, soporte de plataforma, consultas de cumplimiento y solicitudes de partners.",
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Email de Soporte",
    value: "support@arkaltd.io",
    href: "mailto:support@arkaltd.io",
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

const inquiryTypes = [
  { value: "account", label: "Apertura de Cuenta" },
  { value: "platform", label: "Soporte de Plataforma" },
  { value: "funding", label: "Depósitos y Retiros" },
  { value: "compliance", label: "Cumplimiento y KYC" },
  { value: "partner", label: "Programa de Partners / IB" },
  { value: "technical", label: "Soporte Técnico" },
  { value: "other", label: "Otro" },
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
            Soporte 24 horas en español e inglés. Contáctanos para aperturas de
            cuenta, preguntas sobre la plataforma, consultas de cumplimiento y
            solicitudes de partnership.
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
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
                Registro No. 2025-00568 · Santa Lucía
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold text-arka-white mb-8">
              Enviar un Mensaje
            </h2>
            <form
              action={`mailto:support@arkaltd.io`}
              method="GET"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Juan García"
                    className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@ejemplo.com"
                    className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                  Tipo de Consulta
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
                  País de Residencia
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="ej. Colombia, México, Argentina..."
                  className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="body"
                  required
                  rows={5}
                  placeholder="Describe tu consulta..."
                  className="w-full bg-arka-elevated border border-arka-border rounded px-4 py-3 text-arka-white text-sm placeholder:text-arka-gray/40 focus:outline-none focus:border-arka-turquoise/60 transition-colors resize-none"
                />
              </div>

              <div className="bg-arka-midnight border border-arka-border rounded p-4">
                <p className="text-arka-gray text-xs leading-relaxed">
                  Al enviar este formulario confirmas que has leído la
                  Advertencia de Riesgo y entiendes que el trading implica un
                  riesgo significativo de pérdida. ARKA no acepta clientes de
                  los Estados Unidos.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
              >
                Enviar Mensaje
              </button>

              <p className="text-arka-gray text-xs text-center">
                O escríbenos directamente a:{" "}
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
