"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "ETFs",
  tag: "ETF",
  iconName: "trendingup",
  accentColor: "#C8A96A",
  accentRgb: "200,169,106",
  description:
    "8 exchange-traded fund CFDs covering equities, commodities and leveraged strategies. Zero commission on STD accounts.",
  conditions: [
    { label: "Commission",   raw: "39 USD/M",      std: "Zero" },
    { label: "Max Leverage", raw: "1:20",          std: "1:20" },
    { label: "Execution",    raw: "Book A · NDD",  std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "ETF CFDs",
      instruments: [
        { symbol: "GLD",  name: "SPDR Gold Trust" },
        { symbol: "VOO",  name: "Vanguard S&P 500" },
        { symbol: "IWM",  name: "iShares Russell 2000" },
        { symbol: "QQQ",  name: "Invesco QQQ (Nasdaq 100)" },
        { symbol: "VEA",  name: "Vanguard FTSE Developed Markets" },
        { symbol: "SCHD", name: "Schwab US Dividend Equity" },
        { symbol: "USO",  name: "United States Oil Fund" },
        { symbol: "TQQQ", name: "ProShares UltraPro QQQ" },
      ],
    },
  ],
};

export default function ETFsPage() {
  return <MarketPageTemplate data={data} />;
}
