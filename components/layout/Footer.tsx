import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const platformLinks = [
  { href: "/markets", label: "Markets" },
  { href: "/ctrader", label: "cTrader Platform" },
  { href: "/accounts", label: "Account Types" },
  { href: "/trading-conditions", label: "Trading Conditions" },
  { href: "/funding", label: "Funding" },
  { href: "/compliance", label: "Compliance" },
  { href: "/partners", label: "Partners / IB" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal#terms", label: "Terms & Conditions" },
  { href: "/legal#privacy", label: "Privacy Policy" },
  { href: "/legal#risk", label: "Risk Warning" },
  { href: "/legal#aml", label: "AML/KYC Policy" },
  { href: "/legal#cookies", label: "Cookie Policy" },
  { href: "/legal#execution", label: "Order Execution Policy" },
  { href: "/legal#conflicts", label: "Conflicts of Interest" },
  { href: "/legal#complaints", label: "Complaints Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-arka-card border-t border-arka-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="text-arka-white font-semibold text-xl tracking-tight leading-none block">
                ARKA
              </span>
              <span className="text-arka-gray font-mono text-[10px] tracking-[0.12em] uppercase leading-none mt-0.5 block">
                Global Liquidity
              </span>
            </div>
            <p className="text-arka-gray text-sm leading-relaxed mb-5">
              Saint Lucia regulated brokerage and institutional liquidity
              infrastructure provider for qualified clients worldwide.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-arka-gray text-xs font-mono">
                <span className="text-arka-champagne">Reg.</span>
                <span>No. 2025-00568</span>
              </div>
              <div className="flex items-start gap-2 text-arka-gray text-xs leading-relaxed">
                <MapPin
                  size={12}
                  className="mt-0.5 shrink-0 text-arka-champagne"
                />
                <span>
                  Ground Floor, La Place Creole Building, Rodney Village,
                  Rodney Bay, Gros-Islet, St. Lucia
                </span>
              </div>
              <div className="flex items-center gap-2 text-arka-gray text-xs">
                <Mail size={12} className="text-arka-champagne shrink-0" />
                <a
                  href="mailto:contacto@arkaltd.io"
                  className="hover:text-arka-white transition-colors"
                >
                  contacto@arkaltd.io
                </a>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-arka-white text-xs font-mono tracking-[0.1em] uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-arka-gray hover:text-arka-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-arka-white text-xs font-mono tracking-[0.1em] uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-arka-gray hover:text-arka-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-arka-white text-xs font-mono tracking-[0.1em] uppercase mb-4">
              Support
            </h4>
            <p className="text-arka-gray text-sm mb-3 leading-relaxed">
              24-hour support available in English and Spanish.
            </p>
            <a
              href="mailto:support@arkaltd.io"
              className="inline-block text-arka-turquoise text-sm hover:text-arka-white transition-colors font-medium"
            >
              support@arkaltd.io
            </a>
            <div className="mt-6 pt-5 border-t border-arka-border">
              <p className="text-arka-gray text-xs font-mono tracking-wider uppercase mb-1">
                arkaltd.io
              </p>
              <p className="text-arka-gray text-xs">
                Available 24 hours · EN / ES
              </p>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="border-t border-arka-border pt-8 mb-8">
          <p className="text-arka-gray text-xs leading-relaxed">
            <span className="text-arka-champagne font-medium">
              Risk Warning:{" "}
            </span>
            Trading financial instruments carries a high level of risk and may
            not be suitable for all investors. The value of investments can
            decrease as well as increase, and you may lose more than your
            initial deposit. ARKA Global Liquidity LTD does not guarantee any
            returns. Negative balance protection is not enabled. Past
            performance is not indicative of future results. Leverage
            amplifies both profits and losses. ARKA Global Liquidity LTD does
            not accept clients from the United States of America. This website
            is not directed at residents of any jurisdiction where the
            products or services described herein are prohibited. Ensure you
            fully understand the risks before trading.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-arka-gray text-xs font-mono">
          <span>
            © {new Date().getFullYear()} ARKA Global Liquidity LTD. All
            rights reserved.
          </span>
          <span className="tracking-wider">
            Saint Lucia · Registered No. 2025-00568
          </span>
        </div>
      </div>
    </footer>
  );
}
