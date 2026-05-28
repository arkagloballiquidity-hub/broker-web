"use client";

import MarketPageTemplate, { type MarketData } from "@/components/markets/MarketPageTemplate";

const data: MarketData = {
  name: "Metales",
  tag: "METALS",
  iconName: "layers",
  accentColor: "#C8A96A",
  accentRgb: "200,169,106",
  description:
    "13 instrumentos de metales al contado: oro, plata, platino, paladio y cobre. Opera metales preciosos con spreads institucionales y acceso directo al mercado.",
  conditions: [
    { label: "Spread desde",        raw: "0,0 pips",     std: "1,6 pips" },
    { label: "Comisión",            raw: "39 USD/M",      std: "Zero" },
    { label: "Apalancamiento máx.", raw: "1:200",         std: "1:200" },
    { label: "Modelo de ejecución", raw: "Book A · NDD",  std: "Book A · NDD" },
  ],
  groups: [
    {
      label: "Oro",
      instruments: [
        { symbol: "XAUUSD", name: "Gold vs US Dollar" },
        { symbol: "XAUEUR", name: "Gold vs Euro" },
        { symbol: "XAUGBP", name: "Gold vs Great Britain Pound" },
        { symbol: "XAUCHF", name: "Gold vs Swiss Franc" },
        { symbol: "XAUAUD", name: "Gold vs Australian Dollar" },
      ],
    },
    {
      label: "Plata",
      instruments: [
        { symbol: "XAGUSD", name: "Silver vs US Dollar" },
        { symbol: "XAGEUR", name: "Silver vs Euro" },
        { symbol: "XAGGBP", name: "Silver vs Great Britain Pound" },
        { symbol: "XAGCHF", name: "Silver vs Swiss Franc" },
        { symbol: "XAGAUD", name: "Silver vs Australian Dollar" },
      ],
    },
    {
      label: "Otros Metales Preciosos",
      instruments: [
        { symbol: "XPDUSD", name: "Palladium vs US Dollar" },
        { symbol: "XPTUSD", name: "Platinum vs US Dollar" },
        { symbol: "CUCUSD", name: "Copper vs US Dollar" },
      ],
    },
  ],
};

export default function EsMetalsPage() {
  return <MarketPageTemplate data={data} />;
}
