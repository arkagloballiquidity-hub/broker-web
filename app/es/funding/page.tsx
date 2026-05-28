import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Bitcoin, Banknote, Clock, Percent, DollarSign, Users, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Financiamiento | ARKA Global Liquidity",
  description:
    "Información de depósitos y retiros en ARKA Global Liquidity. Fondeo con crypto y fiat, montos mínimos, tiempos de procesamiento y estructura de comisiones.",
};

const fundingParams = [
  { Icon: Bitcoin, label: "Método Principal", value: "Criptomonedas" },
  { Icon: Banknote, label: "Transferencias Fiat", value: "Bajo solicitud (clientes calificados)" },
  { Icon: DollarSign, label: "Depósito Mínimo", value: "$100 USD" },
  { Icon: DollarSign, label: "Retiro Mínimo", value: "$25 USD" },
  { Icon: Clock, label: "Tiempo de Procesamiento", value: "Hasta 72 horas" },
  { Icon: Percent, label: "Comisión de Retiro", value: "0.5%" },
  { Icon: DollarSign, label: "Divisa de Cuenta", value: "Solo USD" },
  { Icon: Users, label: "Cuentas de Terceros", value: "Aceptadas (sujeto a revisión)" },
];

const cryptoAssets = [
  { symbol: "BTC", name: "Bitcoin", network: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum", network: "ERC-20" },
  { symbol: "USDT", name: "Tether USD", network: "ERC-20 / TRC-20" },
  { symbol: "USDC", name: "USD Coin", network: "ERC-20" },
  { symbol: "TRX", name: "TRON", network: "TRC-20" },
  { symbol: "BNB", name: "BNB Chain", network: "BEP-20" },
];

export default function EsFundingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Financiamiento
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Depósitos &amp; Retiros
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Las criptomonedas son el método principal de fondeo. Las
            transferencias bancarias fiat están disponibles bajo solicitud para
            clientes calificados con origen de fondos verificado.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
          >
            Contactar Soporte de Fondeo
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {fundingParams.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="bg-arka-elevated border border-arka-border rounded-lg p-5"
            >
              <Icon size={15} className="text-arka-champagne mb-3" />
              <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1.5">
                {label}
              </p>
              <p className="text-arka-white text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-arka-white mb-6">
          Criptomonedas Aceptadas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {cryptoAssets.map(({ symbol, name, network }) => (
            <div
              key={symbol}
              className="bg-arka-elevated border border-arka-border rounded-lg p-4 text-center"
            >
              <p className="text-arka-white font-mono text-lg font-semibold mb-1">
                {symbol}
              </p>
              <p className="text-arka-white text-xs mb-1">{name}</p>
              <p className="text-arka-gray font-mono text-[10px]">{network}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <h3 className="text-arka-white text-sm font-semibold mb-3">
              Proceso de Depósito
            </h3>
            <ol className="space-y-3">
              {[
                "Inicia sesión en tu cuenta cTrader después de la activación.",
                "Navega a la sección de depósitos y selecciona tu criptomoneda preferida.",
                "Envía el monto exacto a la dirección de billetera proporcionada.",
                "Proporciona el hash de transacción a support@arkaltd.io para confirmación más rápida.",
                "Los fondos se acreditan tras las confirmaciones suficientes en blockchain (generalmente el mismo día para crypto).",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-arka-champagne font-mono text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-arka-gray text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <h3 className="text-arka-white text-sm font-semibold mb-3">
              Proceso de Retiro
            </h3>
            <ol className="space-y-3">
              {[
                "Envía una solicitud de retiro a través de la plataforma cTrader o enviando un email a support@arkaltd.io.",
                "Especifica la criptomoneda y la dirección de billetera para el retiro.",
                "Tiempo de procesamiento: hasta 72 horas hábiles.",
                "Se deduce una comisión de retiro del 0.5% del monto.",
                "Monto mínimo de retiro: equivalente a $25 USD.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-arka-champagne font-mono text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-arka-gray text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-arka-midnight border border-arka-border rounded-lg p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={15}
              className="text-arka-champagne mt-0.5 shrink-0"
            />
            <p className="text-arka-gray text-sm leading-relaxed">
              <span className="text-arka-champagne font-medium">
                Política de Cuentas de Terceros:{" "}
              </span>
              Los depósitos de cuentas de terceros se aceptan sujetos a revisión
              de cumplimiento y documentación de origen de fondos. ARKA se
              reserva el derecho de solicitar documentación adicional y puede
              devolver fondos si la documentación es insuficiente.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
