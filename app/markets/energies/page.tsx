"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Energies",
  tag: "ENERGY",
  iconName: "zap",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "WTI crude oil, Brent crude and natural gas. Trade energy commodities with STP execution and institutional-grade pricing directly from the order book.",
  conditions: [
    { label: "Spread from",  raw: "from market",   std: "from market" },
    { label: "Commission",   raw: "39 USD/M",       std: "Zero" },
    { label: "Max Leverage", raw: "1:50",           std: "1:50" },
    { label: "Execution",    raw: "Book A · NDD",   std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Energy",
      instruments: [
        { symbol: "WTIUSD", name: "Oil - US Crude (WTI)" },
        { symbol: "BRNUSD", name: "Oil - Brent Crude" },
        { symbol: "NGCUSD", name: "Natural Gas" },
      ],
    },
  ],
};

export default function EnergiesPage() {
  return <MarketPageTemplate data={data} />;
}
