import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Users, Globe2, Shield, LineChart, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners / Programa IB | ARKA Global Liquidity",
  description:
    "Programa de introducing broker y partners de ARKA Global Liquidity. Condiciones profesionales para partners generadores de volumen en mercados institucionales.",
};

const benefits = [
  "Estructuras de comisión competitivas sobre el volumen de clientes referidos",
  "Gestor de cuenta dedicado para cuentas de partners",
  "Infraestructura completa de cTrader para seguimiento de partners",
  "Soporte 24h en español e inglés",
  "Soporte de partners enfocado en LATAM",
  "Reportes transparentes de comisiones",
  "Acceso a condiciones de trading institucionales",
  "Extracto mensual y desglose de comisiones",
];

const requirements = [
  "Completar formulario de solicitud IB",
  "Documentación completa KYC/KYB (igual que onboarding de clientes)",
  "Demostración de capacidad de distribución",
  "Acuerdo con los Términos y Condiciones IB de ARKA",
  "Cumplimiento con las normas locales de promoción financiera",
  "Monitoreo de cumplimiento continuo",
];

export default function EsPartnersPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Partners / IB
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Programa Institucional de Partners
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            ARKA colabora con introducing brokers, gestores de fondos y
            referidores profesionales que operan en mercados institucionales y
            de clientes profesionales.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
            >
              Solicitar como Partner
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded hover:border-arka-champagne transition-colors"
            >
              Consultar Condiciones
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { Icon: Users, title: "Programa IB", desc: "Programa IB estructurado con condiciones profesionales para partners generadores de volumen." },
            { Icon: Globe2, title: "Enfoque LATAM", desc: "Expansión activa en América Latina con soporte en español." },
            { Icon: Shield, title: "Infraestructura Regulada", desc: "Todos los partners sujetos a revisión KYC/KYB. Marco de referencia regulado." },
            { Icon: LineChart, title: "Condiciones Institucionales", desc: "Acceso a precios institucionales y reportes transparentes de comisiones." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-arka-elevated border border-arka-border rounded-lg p-6">
              <Icon size={18} className="text-arka-champagne mb-4" />
              <h3 className="text-arka-white text-sm font-semibold mb-2">{title}</h3>
              <p className="text-arka-gray text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <h3 className="text-arka-white text-sm font-semibold mb-4">
              Beneficios del Partner
            </h3>
            <ul className="space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <Check size={13} className="text-arka-turquoise mt-0.5 shrink-0" />
                  <span className="text-arka-gray text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <h3 className="text-arka-white text-sm font-semibold mb-4">
              Requisitos
            </h3>
            <ul className="space-y-2.5">
              {requirements.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-arka-champagne mt-2 shrink-0" />
                  <span className="text-arka-gray text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-arka-gray text-sm mb-4">
            Las estructuras de comisión se acuerdan individualmente según el
            volumen y perfil de distribución. Contáctanos para discutir los
            términos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
          >
            Iniciar Solicitud de Partner
            <ArrowRight size={15} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
