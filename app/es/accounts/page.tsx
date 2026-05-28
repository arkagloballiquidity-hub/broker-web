import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tipos de Cuenta | ARKA Global Liquidity",
  description:
    "Compara las cuentas RAW Liquidity y STD Liquidity. Ambas con ejecución Book A, ambas en USD en cTrader.",
};

const comparison = [
  { label: "Depósito mínimo", raw: "$1,000 USD", std: "$100 USD" },
  { label: "Spread desde", raw: "0,0 pips", std: "1,6 pips" },
  { label: "Comisión (FX/Metales/Energías/Índices/ETF/NDF)", raw: "39 USD/M", std: "Zero" },
  { label: "Comisión (Crypto)", raw: "0.004%", std: "0.000225%" },
  { label: "Comisión (Acciones EE.UU.)", raw: "0.006%", std: "0.001%" },
  { label: "Comisión (Acciones EU)", raw: "0.0025%", std: "0.0025%" },
  { label: "Comisión (Acciones Asia)", raw: "0.003%", std: "0.003%" },
  { label: "Perfil de ejecución", raw: "Book A", std: "Book A" },
  { label: "Apalancamiento (Forex/Metales/Energías)", raw: "1:200", std: "1:200" },
  { label: "Apalancamiento (Índices)", raw: "1:100", std: "1:100" },
  { label: "Nivel de stop out", raw: "80% Smart", std: "80% Smart" },
  { label: "Divisa de cuenta", raw: "Solo USD", std: "Solo USD" },
  { label: "FIX API", raw: "No disponible", std: "No disponible" },
  { label: "Acceso cTrader", raw: "Completo", std: "Completo" },
  { label: "cBots / Automate", raw: "Soportado", std: "Soportado" },
  { label: "cTrader Copy", raw: "Soportado", std: "Soportado" },
  { label: "Protección saldo negativo", raw: "Deshabilitada", std: "Deshabilitada" },
  { label: "Swaps", raw: "Aplicados", std: "Aplicados" },
];

export default function EsAccountsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Tipos de Cuenta
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Cuentas RAW &amp; STD Liquidity
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Dos estructuras de cuenta. Ambas Book A. Ambas en USD. Elige según
            volumen de trading y preferencia de comisión.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
          >
            Abrir una Cuenta
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Comparison table */}
      <SectionWrapper dark>
        <div className="overflow-x-auto rounded-lg border border-arka-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-arka-elevated border-b border-arka-border">
                <th className="text-left px-6 py-4 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase w-1/2">
                  Parámetro
                </th>
                <th className="text-left px-6 py-4 w-1/4">
                  <div>
                    <span className="text-arka-champagne font-mono text-[10px] tracking-wider uppercase block mb-1">
                      Profesional
                    </span>
                    <span className="text-arka-white font-semibold text-base">
                      RAW Liquidity
                    </span>
                  </div>
                </th>
                <th className="text-left px-6 py-4 w-1/4">
                  <div>
                    <span className="text-arka-gray font-mono text-[10px] tracking-wider uppercase block mb-1">
                      Estándar
                    </span>
                    <span className="text-arka-white font-semibold text-base">
                      STD Liquidity
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-arka-border/30 hover:bg-arka-elevated/40 transition-colors ${
                    i === comparison.length - 1 ? "border-0" : ""
                  }`}
                >
                  <td className="px-6 py-3.5 text-arka-gray text-sm">
                    {row.label}
                  </td>
                  <td className="px-6 py-3.5 text-arka-white font-mono text-sm">
                    {row.raw}
                  </td>
                  <td className="px-6 py-3.5 text-arka-gray font-mono text-sm">
                    {row.std}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-arka-elevated border border-arka-champagne/30 rounded-lg p-6">
            <h3 className="text-arka-white font-semibold text-lg mb-2">
              RAW Liquidity
            </h3>
            <p className="text-arka-gray text-sm leading-relaxed mb-4">
              Ideal para traders de alto volumen que priorizan los spreads más
              ajustados y están dispuestos a pagar comisión por millón. La
              estructura de 39 USD/millón se vuelve eficiente en costos por
              encima de aproximadamente $500,000 en volumen mensual.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
            >
              Abrir Cuenta RAW <ArrowRight size={14} />
            </Link>
          </div>
          <div className="bg-arka-elevated border border-arka-border rounded-lg p-6">
            <h3 className="text-arka-white font-semibold text-lg mb-2">
              STD Liquidity
            </h3>
            <p className="text-arka-gray text-sm leading-relaxed mb-4">
              Ideal para traders de menor volumen o quienes prefieren precios
              con spread incluido y cero comisión explícita en instrumentos FX
              principales. Umbral de entrada menor con depósito mínimo de $100 USD.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-arka-border text-arka-white text-sm font-medium rounded hover:border-arka-champagne transition-colors"
            >
              Abrir Cuenta STD <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="mt-6 p-5 border border-arka-border rounded-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Check, label: "Scalping permitido", ok: true },
              { icon: Check, label: "Cobertura permitida", ok: true },
              { icon: Check, label: "cBots soportados", ok: true },
              { icon: X, label: "FIX API disponible", ok: false },
            ].map(({ icon: Icon, label, ok }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon
                  size={13}
                  className={ok ? "text-arka-turquoise" : "text-arka-error"}
                />
                <span className="text-arka-gray text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
