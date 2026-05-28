import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Shield, FileText, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cumplimiento | ARKA Global Liquidity",
  description:
    "Proceso de onboarding KYC/KYB, políticas AML y requisitos de cumplimiento para solicitantes de cuenta en ARKA Global Liquidity.",
};

const steps = [
  { num: "01", title: "Solicitud de Acceso", req: "Envía a través del formulario /contact o support@arkaltd.io", time: "Inmediato" },
  { num: "02", title: "Revisión Inicial", req: "Verificación de jurisdicción y elegibilidad preliminar", time: "1–2 horas" },
  { num: "03", title: "Documentación KYC/KYB", req: "Documento de identidad oficial, comprobante de domicilio, documentos de entidad (empresas)", time: "Según cliente" },
  { num: "04", title: "Origen de Fondos", req: "Extractos bancarios, comprobante de ingresos, historial de trading u otros documentos de respaldo", time: "Según cliente" },
  { num: "05", title: "Verificación de Jurisdicción", req: "Verificación automatizada de listas de sanciones, control de PEP, revisión de medios adversos", time: "1 hora" },
  { num: "06", title: "Selección de Tipo de Cuenta", req: "Elige RAW o STD Liquidity según perfil de trading y depósito mínimo", time: "Decisión del cliente" },
  { num: "07", title: "Decisión de Aprobación", req: "Cumplimiento emite carta de aprobación formal o solicita documentación adicional", time: "1–2 horas" },
  { num: "08", title: "Activación de cTrader", req: "Se emiten credenciales de cuenta cTrader y se otorga acceso a la plataforma", time: "30 minutos" },
  { num: "09", title: "Fondeo Inicial", req: "Primer depósito realizado vía crypto o fiat (fiat bajo solicitud)", time: "Según tiempos de procesamiento" },
  { num: "10", title: "Monitoreo Continuo", req: "Monitoreo continuo de transacciones, actualización periódica de KYC, revisión anual de cumplimiento", time: "Continuo" },
];

const requiredDocs = {
  individuals: [
    "Documento de identidad oficial válido con foto (pasaporte preferido)",
    "Comprobante de domicilio (factura de servicio, extracto bancario — dentro de los últimos 3 meses)",
    "Documentación de origen de fondos (extractos bancarios, recibos de salario, declaraciones fiscales)",
    "Términos y Condiciones de ARKA firmados",
    "Formulario de Reconocimiento de Riesgo",
  ],
  companies: [
    "Acta de constitución",
    "Estatutos y Memorándum de Asociación",
    "Registro de Directores y Accionistas",
    "Comprobante de domicilio registrado",
    "Documentación KYC de todos los directores y UBOs (ver individuos)",
    "Origen de fondos de la entidad",
    "Resolución del consejo autorizando la apertura de cuenta",
  ],
};

export default function EsCompliancePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Cumplimiento
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Onboarding KYC / KYB
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-4">
            Proceso de onboarding de cumplimiento en 10 pasos para individuos y
            entidades corporativas. Tiempo estimado de finalización: aproximadamente
            4 horas para envíos completos.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
            >
              Iniciar Solicitud
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper dark>
        <h2 className="text-2xl font-semibold text-arka-white mb-8">
          Pasos del Onboarding
        </h2>
        <div className="space-y-3 mb-14">
          {steps.map(({ num, title, req, time }) => (
            <div
              key={num}
              className="flex gap-5 bg-arka-elevated border border-arka-border rounded-lg p-5"
            >
              <span className="text-arka-border font-mono text-2xl font-bold leading-none shrink-0 select-none">
                {num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-arka-white text-sm font-semibold">
                    {title}
                  </h3>
                  <span className="text-arka-gray font-mono text-[10px] tracking-wider shrink-0">
                    {time}
                  </span>
                </div>
                <p className="text-arka-gray text-sm">{req}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-5">
              <FileText size={15} className="text-arka-champagne" />
              <h3 className="text-arka-white text-sm font-semibold">
                Requisitos para Individuos
              </h3>
            </div>
            <ul className="space-y-2.5">
              {requiredDocs.individuals.map((doc) => (
                <li key={doc} className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-arka-turquoise mt-2 shrink-0" />
                  <span className="text-arka-gray text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-5">
              <Shield size={15} className="text-arka-champagne" />
              <h3 className="text-arka-white text-sm font-semibold">
                Requisitos para Empresas / Entidades
              </h3>
            </div>
            <ul className="space-y-2.5">
              {requiredDocs.companies.map((doc) => (
                <li key={doc} className="flex gap-2">
                  <span className="w-1 h-1 rounded-full bg-arka-turquoise mt-2 shrink-0" />
                  <span className="text-arka-gray text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-arka-midnight border border-arka-border rounded-lg p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle size={15} className="text-arka-champagne mt-0.5 shrink-0" />
            <p className="text-arka-gray text-sm leading-relaxed">
              ARKA Global Liquidity se reserva el derecho de solicitar
              documentación adicional en cualquier etapa del proceso de
              onboarding o durante la relación continua con el cliente. Las
              presentaciones incompletas pueden retrasar o resultar en la
              denegación de apertura de cuenta.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
