"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Energías",
  tag: "ENERGY",
  iconName: "zap",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "Petróleo WTI, Brent y gas natural. Opera materias primas energéticas con ejecución STP y precios institucionales directamente del libro de órdenes.",
  conditions: [
    { label: "Spread desde",        raw: "desde mercado",  std: "desde mercado" },
    { label: "Comisión",            raw: "39 USD/M",        std: "Zero" },
    { label: "Apalancamiento máx.", raw: "1:50",            std: "1:50" },
    { label: "Modelo de ejecución", raw: "Book A · NDD",    std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Energía",
      instruments: [
        { symbol: "WTIUSD", name: "Oil - US Crude (WTI)" },
        { symbol: "BRNUSD", name: "Oil - Brent Crude" },
        { symbol: "NGCUSD", name: "Natural Gas" },
      ],
    },
  ],
};

export default function EsEnergiesPage() {
  return <MarketPageTemplate data={data} />;
}
