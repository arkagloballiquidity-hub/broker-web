"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Metals",
  tag: "METALS",
  iconName: "layers",
  accentColor: "#C8A96A",
  accentRgb: "200,169,106",
  description:
    "13 spot metal instruments including gold, silver, platinum, palladium and copper. Trade precious metals with institutional spreads and direct market access.",
  conditions: [
    { label: "Spread from",  raw: "0.0 pips",     std: "1.6 pips" },
    { label: "Commission",   raw: "39 USD/M",      std: "Zero" },
    { label: "Max Leverage", raw: "1:200",         std: "1:200" },
    { label: "Execution",    raw: "Book A · NDD",  std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Gold",
      instruments: [
        { symbol: "XAUUSD", name: "Gold vs US Dollar" },
        { symbol: "XAUEUR", name: "Gold vs Euro" },
        { symbol: "XAUGBP", name: "Gold vs Great Britain Pound" },
        { symbol: "XAUCHF", name: "Gold vs Swiss Franc" },
        { symbol: "XAUAUD", name: "Gold vs Australian Dollar" },
      ],
    },
    {
      label: "Silver",
      instruments: [
        { symbol: "XAGUSD", name: "Silver vs US Dollar" },
        { symbol: "XAGEUR", name: "Silver vs Euro" },
        { symbol: "XAGGBP", name: "Silver vs Great Britain Pound" },
        { symbol: "XAGCHF", name: "Silver vs Swiss Franc" },
        { symbol: "XAGAUD", name: "Silver vs Australian Dollar" },
      ],
    },
    {
      label: "Other Precious Metals",
      instruments: [
        { symbol: "XPDUSD", name: "Palladium vs US Dollar" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar" },
        { symbol: "CUCUSD", name: "Copper vs US Dollar" },
      ],
    },
  ],
};

export default function MetalsPage() {
  return <MarketPageTemplate data={data} />;
}
