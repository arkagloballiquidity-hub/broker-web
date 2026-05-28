"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  { proName: "FX:EURUSD",          title: "EUR/USD"  },
  { proName: "FX:GBPUSD",          title: "GBP/USD"  },
  { proName: "FX:USDJPY",          title: "USD/JPY"  },
  { proName: "FX:USDCAD",          title: "USD/CAD"  },
  { proName: "FX:AUDUSD",          title: "AUD/USD"  },
  { proName: "TVC:GOLD",           title: "XAU/USD"  },
  { proName: "TVC:SILVER",         title: "XAG/USD"  },
  { proName: "TVC:USOIL",          title: "WTI Oil"  },
  { proName: "TVC:UKOIL",          title: "Brent"    },
  { proName: "FOREXCOM:SPXUSD",    title: "S&P 500"  },
  { proName: "FOREXCOM:NSXUSD",    title: "NASDAQ"   },
  { proName: "FOREXCOM:DEU40",     title: "DAX 40"   },
  { proName: "BITSTAMP:BTCUSD",    title: "BTC/USD"  },
  { proName: "BITSTAMP:ETHUSD",    title: "ETH/USD"  },
];

export default function TickerBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous widget
    container.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    container.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: false,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      style={{
        background: "rgba(8,11,16,0.95)",
        borderBottom: "1px solid rgba(0,186,179,0.15)",
      }}
    >
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: "46px", overflow: "hidden" }}
      />
    </div>
  );
}
