import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpDown, Layers, Zap, BarChart2, Briefcase, Bitcoin, TrendingUp, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Mercados | ARKA Global Liquidity",
  description:
    "Opera Forex, metales, energías, índices, CFDs de acciones, ETFs, crypto y NDFs a través de la infraestructura cTrader de ARKA Global Liquidity.",
};

const markets: {
  href: string;
  icon: LucideIcon;
  name: string;
  tag: string;
  count: string;
  accentColor: string;
  accentRgb: string;
  description: string;
}[] = [
  {
    href: "/es/markets/forex",
    icon: ArrowUpDown,
    name: "Forex",
    tag: "FX",
    count: "101 instrumentos",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "101 pares de divisas. Mayores, menores y exóticos con ejecución ECN/STP institucional y spreads RAW desde 0,0 pips.",
  },
  {
    href: "/es/markets/metals",
    icon: Layers,
    name: "Metales",
    tag: "METALS",
    count: "13 instrumentos",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "Oro, plata, platino, paladio y cobre al contado con acceso directo al mercado.",
  },
  {
    href: "/es/markets/energies",
    icon: Zap,
    name: "Energías",
    tag: "ENERGY",
    count: "3 instrumentos",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Petróleo WTI, Brent y gas natural mediante ejecución STP con precios institucionales.",
  },
  {
    href: "/es/markets/indices",
    icon: BarChart2,
    name: "Índices",
    tag: "INDICES",
    count: "14 instrumentos",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Índices bursátiles globales de América, Europa y Asia-Pacífico. CFDs de caja y futuros.",
  },
  {
    href: "/es/markets/equities",
    icon: Briefcase,
    name: "Acciones",
    tag: "EQUITIES",
    count: "111 instrumentos",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "CFDs de acciones de EE.UU., Europa y Asia — de Apple y Tesla a Toyota y Tencent.",
  },
  {
    href: "/es/markets/crypto",
    icon: Bitcoin,
    name: "Crypto",
    tag: "CRYPTO",
    count: "132 instrumentos",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Principales monedas, altcoins y pares cruzados de criptomonedas. Precios basados en comisión.",
  },
  {
    href: "/es/markets/etfs",
    icon: TrendingUp,
    name: "ETFs",
    tag: "ETF",
    count: "8 instrumentos",
    accentColor: "#C8A96A",
    accentRgb: "200,169,106",
    description: "CFDs de ETFs que cubren estrategias de acciones, materias primas y apalancadas.",
  },
  {
    href: "/es/markets/ndfs",
    icon: RefreshCw,
    name: "NDFs",
    tag: "NDF",
    count: "7 instrumentos",
    accentColor: "#00BAB3",
    accentRgb: "0,186,179",
    description: "Contratos a plazo sin entrega en divisas de mercados emergentes para clientes institucionales calificados.",
  },
];

export default function EsMarketsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-arka-black relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% -10%, rgba(0,186,179,0.07) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Mercados
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Acceso a Mercados Globales
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-8">
            8 clases de activos. Ejecución institucional. Una cuenta cTrader. Opera Forex,
            metales, energías, índices, acciones, ETFs, crypto y NDFs con infraestructura Book A.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded-lg hover:bg-arka-turquoise/90 transition-colors glow-teal-sm font-display"
            >
              Solicitar Acceso
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/es/trading-conditions"
              className="inline-flex items-center gap-2 px-6 py-3 border border-arka-border text-arka-white text-sm font-medium rounded-lg hover:border-arka-champagne/50 transition-colors"
            >
              Condiciones de Trading
            </Link>
          </div>
        </div>
      </section>

      {/* Markets grid */}
      <section className="py-16 lg:py-24 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {markets.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.href}
                  href={m.href}
                  className="group flex flex-col bg-arka-card border border-white/[0.05] rounded-xl p-5 hover:border-opacity-25 transition-all duration-200"
                  style={
                    {
                      ["--tw-shadow" as string]: `0 0 0 0 rgba(${m.accentRgb},0)`,
                    } as React.CSSProperties
                  }
                >
                  {/* Icon row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `rgba(${m.accentRgb},0.08)`,
                        border: `1px solid rgba(${m.accentRgb},0.18)`,
                      }}
                    >
                      <Icon size={18} style={{ color: m.accentColor }} />
                    </div>
                    <span
                      className="text-[9px] font-mono tracking-[0.14em] uppercase px-2 py-1 rounded-full"
                      style={{
                        color: m.accentColor,
                        background: `rgba(${m.accentRgb},0.08)`,
                        border: `1px solid rgba(${m.accentRgb},0.16)`,
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  {/* Name + count */}
                  <h2 className="text-arka-white text-base font-semibold mb-1 group-hover:text-white transition-colors">
                    {m.name}
                  </h2>
                  <p
                    className="text-[10px] font-mono mb-3"
                    style={{ color: m.accentColor }}
                  >
                    {m.count}
                  </p>

                  {/* Description */}
                  <p className="text-arka-gray text-xs leading-relaxed flex-1">
                    {m.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="mt-4 flex items-center gap-1.5 text-[11px] font-mono tracking-wide transition-colors"
                    style={{ color: m.accentColor }}
                  >
                    Ver instrumentos
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-5 border border-arka-border/50 rounded-lg bg-arka-card">
            <p className="text-arka-gray text-xs leading-relaxed">
              <span className="text-arka-champagne font-medium">Aviso Legal: </span>
              La disponibilidad de instrumentos está sujeta a restricciones de jurisdicción y revisión de cumplimiento.
              Los niveles de apalancamiento aplican solo a cuentas calificadas. Algunos mercados pueden no estar disponibles
              en todas las regiones. Todo el trading implica un riesgo significativo de pérdida.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
