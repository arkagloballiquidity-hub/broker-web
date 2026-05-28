"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Índices",
  tag: "INDICES",
  iconName: "barchart2",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "14 índices bursátiles globales de América, Europa y Asia-Pacífico. CFDs de índices de caja y futuros con profundidad institucional.",
  conditions: [
    { label: "Spread desde",        raw: "desde mercado",  std: "desde mercado" },
    { label: "Comisión",            raw: "39 USD/M",        std: "Zero" },
    { label: "Apalancamiento máx.", raw: "1:100",           std: "1:100" },
    { label: "Modelo de ejecución", raw: "Book A · NDD",    std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Américas",
      instruments: [
        { symbol: "DJIUSD", name: "Dow Jones Industrial Average 30" },
        { symbol: "NDXUSD", name: "Nasdaq 100" },
        { symbol: "SPXUSD", name: "S&P 500 Index" },
      ],
    },
    {
      label: "Europa",
      instruments: [
        { symbol: "DAXEUR", name: "Germany 40" },
        { symbol: "F40EUR", name: "France CAC 40" },
        { symbol: "FTSGBP", name: "UK FTSE 100" },
        { symbol: "ESXEUR", name: "Euro Stoxx 50" },
        { symbol: "IBXEUR", name: "IBEX 35 Spain" },
      ],
    },
    {
      label: "Asia-Pacífico",
      instruments: [
        { symbol: "NIKJPY", name: "Nikkei 225" },
        { symbol: "HSIHKD", name: "Hong Kong 50" },
        { symbol: "CNXHKD", name: "China H Shares" },
        { symbol: "XINUSD", name: "China 50 Index" },
        { symbol: "S30SGD", name: "Singapore 30" },
        { symbol: "ASXAUD", name: "Australia 200" },
      ],
    },
  ],
};

export default function EsIndicesPage() {
  return <MarketPageTemplate data={data} />;
}
