import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

export const metadata: Metadata = {
  title: "ARKA Global Liquidity | Liquidez Institucional",
  description:
    "Acceso institucional a Forex, metales, índices, acciones y criptomonedas. Ejecución Book A. Spreads RAW desde 0,0 pips.",
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  // LocaleProvider injects "es" for all page-content components (Hero, Markets, etc.)
  // Header/Footer come from the root layout — Header self-detects locale via usePathname()
  return <LocaleProvider locale="es">{children}</LocaleProvider>;
}
