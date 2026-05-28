import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Condiciones de Trading | ARKA Global Liquidity",
  description:
    "Condiciones completas de trading de ARKA Global Liquidity — spreads, comisiones, apalancamiento, margen, stop out y políticas de swap.",
};

const conditions = [
  { instrument: "Forex", rawSpread: "0,0 pips", stdSpread: "1,6 pips", rawComm: "39 USD/M", stdComm: "Zero", leverage: "1:200", margin: "0.5%" },
  { instrument: "Metales al Contado (XAU/XAG)", rawSpread: "0,0 pips", stdSpread: "1,6 pips", rawComm: "39 USD/M", stdComm: "Zero", leverage: "1:200", margin: "0.5%" },
  { instrument: "Energías al Contado", rawSpread: "0,0 pips", stdSpread: "1,6 pips", rawComm: "39 USD/M", stdComm: "Zero", leverage: "1:200", margin: "0.5%" },
  { instrument: "Índices (Caja)", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "39 USD/M", stdComm: "Zero", leverage: "1:100", margin: "1.0%" },
  { instrument: "CFDs de Crypto", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "0.004%", stdComm: "0.000225%", leverage: "Variable", margin: "Variable" },
  { instrument: "CFDs Acciones EE.UU.", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "0.006%", stdComm: "0.001%", leverage: "Variable", margin: "Variable" },
  { instrument: "CFDs Acciones EU", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "0.0025%", stdComm: "0.0025%", leverage: "Variable", margin: "Variable" },
  { instrument: "CFDs Acciones Asia", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "0.003%", stdComm: "0.003%", leverage: "Variable", margin: "Variable" },
  { instrument: "CFDs de ETF", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "39 USD/M", stdComm: "Zero", leverage: "Variable", margin: "Variable" },
  { instrument: "NDFs", rawSpread: "Mercado", stdSpread: "Mercado", rawComm: "39 USD/M", stdComm: "Zero", leverage: "Variable", margin: "Variable" },
];

const keyParams = [
  { label: "Divisa de cuenta", value: "Solo USD" },
  { label: "Nivel de stop out", value: "80% Smart" },
  { label: "Nivel de margin call", value: "100%" },
  { label: "Protección saldo negativo", value: "Deshabilitada" },
  { label: "Cobertura (Hedging)", value: "Permitida" },
  { label: "Scalping", value: "Permitido" },
  { label: "cBots", value: "Permitidos" },
  { label: "FIX API", value: "No disponible" },
  { label: "Tipo de ejecución", value: "Book A / STP / NDD / ECN" },
  { label: "Depósito mín. (RAW)", value: "$1,000 USD" },
  { label: "Depósito mín. (STD)", value: "$100 USD" },
  { label: "Swaps", value: "Aplicados (sin cuenta swap-free)" },
];

export default function EsTradingConditionsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Condiciones de Trading
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Spreads, Comisiones &amp; Apalancamiento
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            Todas las condiciones de trading son fijas y publicadas. Sin
            comisiones ocultas. Sin slippage asimétrico. Sin last-look.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
          >
            Abrir Cuenta
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <SectionWrapper dark>
        <h2 className="text-2xl font-semibold text-arka-white mb-6">
          Condiciones por Instrumento
        </h2>
        <div className="overflow-x-auto rounded-lg border border-arka-border mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-arka-elevated border-b border-arka-border">
                {["Instrumento", "Spread RAW", "Spread STD", "Comis. RAW", "Comis. STD", "Apalancamiento", "Margen mín."].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {conditions.map((row, i) => (
                <tr
                  key={row.instrument}
                  className={`border-b border-arka-border/30 hover:bg-arka-elevated/50 transition-colors ${
                    i === conditions.length - 1 ? "border-0" : ""
                  }`}
                >
                  <td className="px-5 py-3.5 text-arka-white font-medium whitespace-nowrap">
                    {row.instrument}
                  </td>
                  <td className="px-5 py-3.5 text-arka-white font-mono">
                    {row.rawSpread}
                  </td>
                  <td className="px-5 py-3.5 text-arka-gray font-mono">
                    {row.stdSpread}
                  </td>
                  <td className="px-5 py-3.5 text-arka-champagne font-mono">
                    {row.rawComm}
                  </td>
                  <td className="px-5 py-3.5 text-arka-gray font-mono">
                    {row.stdComm}
                  </td>
                  <td className="px-5 py-3.5 text-arka-white font-mono">
                    {row.leverage}
                  </td>
                  <td className="px-5 py-3.5 text-arka-gray font-mono">
                    {row.margin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-arka-white mb-6">
          Parámetros Clave de Cuenta
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {keyParams.map(({ label, value }) => (
            <div
              key={label}
              className="bg-arka-elevated border border-arka-border rounded-lg p-4"
            >
              <p className="text-arka-gray font-mono text-[10px] tracking-wider uppercase mb-1.5">
                {label}
              </p>
              <p className="text-arka-white text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
