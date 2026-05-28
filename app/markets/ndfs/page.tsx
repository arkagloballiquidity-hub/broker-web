"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "NDFs",
  tag: "NDF",
  iconName: "refreshcw",
  accentColor: "#00BAB3",
  accentRgb: "0,186,179",
  description:
    "7 NDF instruments covering emerging market currencies. Cash-settled forwards available to qualified institutional clients subject to compliance review.",
  conditions: [
    { label: "Spread",       raw: "on request",    std: "on request" },
    { label: "Commission",   raw: "on request",    std: "on request" },
    { label: "Max Leverage", raw: "1:50",          std: "1:50" },
    { label: "Execution",    raw: "Book A · STP",  std: "Book A · STP" },
  ],
  groups: [
    {
      label: "Non-Deliverable Forwards",
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

export default function NDFsPage() {
  return <MarketPageTemplate data={data} />;
}
