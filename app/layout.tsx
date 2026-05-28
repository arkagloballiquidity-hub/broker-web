import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TickerBanner from "@/components/layout/TickerBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARKA Global Liquidity | cTrader Broker & Institutional Liquidity",
  description:
    "ARKA Global Liquidity provides Saint Lucia regulated cTrader brokerage, Book A execution, institutional liquidity and direct market access for qualified clients, companies, funds and professional traders.",
  metadataBase: new URL("https://arkaltd.io"),
  openGraph: {
    title: "ARKA Global Liquidity | cTrader Broker & Institutional Liquidity",
    description:
      "ARKA Global Liquidity provides Saint Lucia regulated cTrader brokerage, Book A execution, institutional liquidity and direct market access.",
    url: "https://arkaltd.io",
    siteName: "ARKA Global Liquidity",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARKA Global Liquidity | cTrader Broker & Institutional Liquidity",
    description:
      "Saint Lucia regulated cTrader brokerage, Book A execution, institutional liquidity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-arka-black text-arka-white font-sans antialiased">
        <Header />
        <TickerBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
