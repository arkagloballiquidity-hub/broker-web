"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Indices",
  tag: "INDICES",
  iconName: "barchart2",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "14 global equity indices covering the Americas, Europe and Asia-Pacific. Cash and futures-based index CFDs with institutional depth.",
  conditions: [
    { label: "Spread from",  raw: "from market",   std: "from market" },
    { label: "Commission",   raw: "39 USD/M",       std: "Zero" },
    { label: "Max Leverage", raw: "1:100",          std: "1:100" },
    { label: "Execution",    raw: "Book A · NDD",   std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Americas",
      instruments: [
        { symbol: "DJIUSD", name: "Dow Jones Industrial Average 30" },
        { symbol: "NDXUSD", name: "Nasdaq 100" },
        { symbol: "SPXUSD", name: "S&P 500 Index" },
      ],
    },
    {
      label: "Europe",
      instruments: [
        { symbol: "DAXEUR", name: "Germany 40" },
        { symbol: "F40EUR", name: "France CAC 40" },
        { symbol: "FTSGBP", name: "UK FTSE 100" },
        { symbol: "ESXEUR", name: "Euro Stoxx 50" },
        { symbol: "IBXEUR", name: "IBEX 35 Spain" },
      ],
    },
    {
      label: "Asia-Pacific",
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

export default function IndicesPage() {
  return <MarketPageTemplate data={data} />;
}
