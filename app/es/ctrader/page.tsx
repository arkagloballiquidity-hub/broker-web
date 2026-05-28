import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import {
  Globe,
  Monitor,
  Smartphone,
  BarChart2,
  BookOpen,
  GitBranch,
  Bot,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plataforma cTrader | ARKA Global Liquidity",
  description:
    "Opera en cTrader Web, Desktop, Android e iOS a través de ARKA Global Liquidity. Ejecución Book A, gráficos avanzados, profundidad de mercado y trading algorítmico.",
};

const platforms = [
  {
    Icon: Globe,
    title: "cTrader Web",
    tag: "Navegador Web",
    description:
      "Interfaz de trading completa basada en navegador. Accede a tu cuenta desde cualquier dispositivo sin instalación. Incluye gráficos en tiempo real, trading con un clic, gestión de cuenta y visibilidad completa del libro de órdenes.",
    features: ["Sin instalación requerida", "Compatibilidad con todos los navegadores", "Suite completa de gráficos", "Gestión de cuenta en tiempo real"],
  },
  {
    Icon: Monitor,
    title: "cTrader Desktop",
    tag: "Windows / macOS",
    description:
      "Aplicación de escritorio nativa con el conjunto completo de funciones cTrader. Optimizada para configuraciones multipantalla profesionales con ventanas de gráficos separables, gestor de cBots y herramientas avanzadas de ejecución.",
    features: ["Soporte multipantalla", "Ventanas de gráficos separables", "Gestor de cBots", "DOM completo y profundidad de mercado"],
  },
  {
    Icon: Smartphone,
    title: "cTrader Móvil",
    tag: "Android e iOS",
    description:
      "Aplicaciones móviles nativas para Android e iOS. Gestión completa de órdenes, P&L en tiempo real, análisis de gráficos y monitoreo de cuenta en móvil. Autenticación biométrica soportada.",
    features: ["Gestión completa de órdenes", "P&L en tiempo real", "Autenticación biométrica", "Notificaciones push"],
  },
];

const capabilities = [
  {
    Icon: BarChart2,
    title: "Gráficos Avanzados",
    description: "70+ indicadores técnicos integrados, múltiples tipos de gráfico (velas, barras, línea, Heiken Ashi), marcos temporales personalizados desde 1 tick hasta mensual, y herramientas de dibujo ilimitadas.",
  },
  {
    Icon: BookOpen,
    title: "Profundidad de Mercado (DOM)",
    description: "Libro de órdenes nivel II con visualización completa de profundidad bid/ask. Barras de volumen tick, volumen acumulado y visualización de liquidez en tiempo real para análisis de mercado de grado institucional.",
  },
  {
    Icon: GitBranch,
    title: "Tipos de Órdenes Avanzados",
    description: "Mercado, límite, stop, stop-límite, trailing stop, time-in-force (GTC, GTD, IOC, FOK) y órdenes condicionales. Soporte completo de órdenes bracket con TP/SL en todos los tipos de orden.",
  },
  {
    Icon: Bot,
    title: "cTrader Automate",
    description: "Trading algorítmico basado en C# con cBots. Motor completo de backtesting con datos históricos a nivel tick, herramientas de optimización y métricas de rendimiento en tiempo real. Sin restricciones de estrategia.",
  },
  {
    Icon: Users,
    title: "cTrader Copy",
    description: "Infraestructura de proveedor de estrategia para proveedores de señales, gestores de dinero y acuerdos de copy trading. Ejecución de copia segregada con parámetros de riesgo configurables.",
  },
  {
    Icon: FileText,
    title: "Reportes y Estados de Cuenta",
    description: "Estados de cuenta mensuales automatizados con historial completo de operaciones, desglose de P&L, detalle de comisiones y cargos de swap. Exportable en múltiples formatos.",
  },
];

export default function EsCTraderPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-arka-black">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-4 block">
            Plataforma
          </span>
          <h1 className="text-4xl lg:text-5xl font-semibold text-arka-white tracking-tight mb-6">
            Ecosistema cTrader
          </h1>
          <p className="text-arka-gray text-xl max-w-2xl leading-relaxed mb-4">
            Infraestructura de ejecución profesional en la plataforma cTrader.
            Web, Desktop, Android e iOS — todo en la misma cuenta Book A.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-arka-card border border-arka-border rounded mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-arka-error" />
            <span className="text-arka-gray font-mono text-xs tracking-wider">
              Trading por FIX API no disponible
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-arka-turquoise text-arka-black text-sm font-semibold rounded hover:bg-arka-turquoise/90 transition-colors"
            >
              Solicitar Acceso
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Platform variants */}
      <SectionWrapper dark>
        <h2 className="text-2xl font-semibold text-arka-white mb-8">
          Variantes de Plataforma Disponibles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-0">
          {platforms.map(({ Icon, title, tag, description, features }) => (
            <div
              key={title}
              className="bg-arka-elevated border border-arka-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon size={20} className="text-arka-champagne" />
                <span className="text-arka-gray font-mono text-[10px] tracking-wider">
                  {tag}
                </span>
              </div>
              <h3 className="text-arka-white font-semibold text-lg mb-3">
                {title}
              </h3>
              <p className="text-arka-gray text-sm leading-relaxed mb-4">
                {description}
              </p>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-arka-gray text-xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-arka-turquoise shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Capabilities */}
      <SectionWrapper>
        <h2 className="text-2xl font-semibold text-arka-white mb-8">
          Capacidades de la Plataforma
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="bg-arka-card border border-arka-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon size={16} className="text-arka-champagne shrink-0" />
                <h3 className="text-arka-white text-sm font-semibold">
                  {title}
                </h3>
              </div>
              <p className="text-arka-gray text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
