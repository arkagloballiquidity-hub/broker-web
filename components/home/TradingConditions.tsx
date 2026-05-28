import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const rows = [
  {
    instrument: "Forex",
    rawSpread: "0.0 pips",
    stdSpread: "1.6 pips",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "1:200",
  },
  {
    instrument: "Spot Metals",
    rawSpread: "0.0 pips",
    stdSpread: "1.6 pips",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "1:200",
  },
  {
    instrument: "Spot Energies",
    rawSpread: "0.0 pips",
    stdSpread: "1.6 pips",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "1:200",
  },
  {
    instrument: "Indices",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "1:100",
  },
  {
    instrument: "Crypto CFDs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "0.004%",
    stdComm: "0.000225%",
    leverage: "Variable",
  },
  {
    instrument: "US Share CFDs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "0.006%",
    stdComm: "0.001%",
    leverage: "Variable",
  },
  {
    instrument: "EU Share CFDs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "0.0025%",
    stdComm: "0.0025%",
    leverage: "Variable",
  },
  {
    instrument: "Asia Share CFDs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "0.003%",
    stdComm: "0.003%",
    leverage: "Variable",
  },
  {
    instrument: "ETF CFDs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "Variable",
  },
  {
    instrument: "NDFs",
    rawSpread: "Market",
    stdSpread: "Market",
    rawComm: "39 USD/M",
    stdComm: "Zero",
    leverage: "Variable",
  },
];

export default function TradingConditions() {
  return (
    <SectionWrapper id="trading-conditions" dark>
      <div className="mb-12">
        <span className="text-arka-champagne font-mono text-xs tracking-[0.15em] uppercase mb-3 block">
          Conditions
        </span>
        <h2 className="text-3xl lg:text-4xl font-semibold text-arka-white tracking-tight mb-4">
          Trading Conditions
        </h2>
        <p className="text-arka-gray text-lg max-w-2xl leading-relaxed">
          All fees are fixed and published. RAW accounts pay raw spread plus
          commission. STD accounts absorb commission into the spread.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-arka-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-arka-elevated border-b border-arka-border">
              <th className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase">
                Instrument
              </th>
              <th className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase">
                RAW Spread
              </th>
              <th className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase">
                STD Spread
              </th>
              <th className="text-left px-5 py-3.5 text-arka-champagne font-mono text-[10px] tracking-[0.12em] uppercase">
                RAW Comm.
              </th>
              <th className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase">
                STD Comm.
              </th>
              <th className="text-left px-5 py-3.5 text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase">
                Leverage
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.instrument}
                className={`border-b border-arka-border/40 hover:bg-arka-elevated/50 transition-colors ${
                  i === rows.length - 1 ? "border-0" : ""
                }`}
              >
                <td className="px-5 py-3.5 text-arka-white font-medium">
                  {row.instrument}
                </td>
                <td className="px-5 py-3.5 text-arka-white font-mono">
                  {row.rawSpread}
                </td>
                <td className="px-5 py-3.5 text-arka-gray font-mono">
                  {row.stdSpread}
                </td>
                <td className="px-5 py-3.5 text-arka-champagne font-mono">
                  {row.rawComm}
                </td>
                <td className="px-5 py-3.5 text-arka-gray font-mono">
                  {row.stdComm}
                </td>
                <td className="px-5 py-3.5 text-arka-white font-mono">
                  {row.leverage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
        <Link
          href="/trading-conditions"
          className="inline-flex items-center gap-2 text-arka-turquoise text-sm font-medium hover:text-arka-white transition-colors"
        >
          Full trading conditions, swaps &amp; margin requirements
          <ChevronRight size={15} />
        </Link>
        <p className="text-arka-gray text-xs font-mono">
          Stop Out: 80% Smart · Base currency: USD only · No negative balance protection
        </p>
      </div>
    </SectionWrapper>
  );
}
