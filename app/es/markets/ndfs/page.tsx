"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "NDFs",
  tag: "NDF",
  iconName: "refreshcw",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "7 instrumentos NDF en divisas de mercados emergentes. Contratos a plazo liquidados en efectivo disponibles para clientes institucionales calificados, sujetos a revisión de cumplimiento.",
  conditions: [
    { label: "Spread",              raw: "bajo solicitud",  std: "bajo solicitud" },
    { label: "Comisión",            raw: "bajo solicitud",  std: "bajo solicitud" },
    { label: "Apalancamiento máx.", raw: "1:50",            std: "1:50" },
    { label: "Modelo de ejecución", raw: "Book A · STP",    std: "Book A · STP" },
  ],
  groups: [
    {
      label: "Contratos a Plazo Sin Entrega",
      instruments: [
        { symbol: "USDBRL", name: "US Dollar vs Brazilian Real" },
        { symbol: "USDCLP", name: "US Dollar vs Chilean Peso" },
        { symbol: "USDCOP", name: "US Dollar vs Colombian Peso" },
        { symbol: "USDIDR", name: "US Dollar vs Indonesian Rupiah" },
        { symbol: "USDINR", name: "US Dollar vs Indian Rupee" },
        { symbol: "USDKRW", name: "US Dollar vs South Korean Won" },
        { symbol: "USDTWD", name: "US Dollar vs Taiwan Dollar" },
      ],
    },
  ],
};

export default function EsNDFsPage() {
  return <MarketPageTemplate data={data} />;
}
