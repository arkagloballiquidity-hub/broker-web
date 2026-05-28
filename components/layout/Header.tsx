"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu, X, Globe, ChevronDown,
  Home, Globe2, Briefcase, Monitor, Shield, Users,
  ArrowUpDown, Layers, Zap, BarChart2, Bitcoin,
  TrendingUp, DollarSign, RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n/LocaleProvider";

// ─── Types ────────────────────────────────────────────────────────────────────
type DropdownItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  xlOnly?: boolean;
  dropdown?: DropdownItem[];
};

// ─── Nav items (locale-aware) ─────────────────────────────────────────────────
function buildNavItems(locale: Locale): NavItem[] {
  const isEs = locale === "es";

  return [
    {
      label: isEs ? "Inicio" : "Home",
      href: isEs ? "/es" : "/",
      icon: Home,
      gradient: "radial-gradient(circle, rgba(0,186,179,0.35) 0%, transparent 70%)",
      iconColor: "#00BAB3",
    },
    {
      label: isEs ? "Mercados" : "Markets",
      href: "/markets",
      icon: Globe2,
      gradient: "radial-gradient(circle, rgba(0,186,179,0.35) 0%, transparent 70%)",
      iconColor: "#00BAB3",
      dropdown: [
        { label: "Forex",    href: "/markets/forex",    icon: ArrowUpDown, desc: isEs ? "101 pares de divisas" : "101 currency pairs" },
        { label: "Metals",   href: "/markets/metals",   icon: Layers,      desc: "XAU · XAG · XPT" },
        { label: "Energies", href: "/markets/energies", icon: Zap,         desc: "WTI · Brent · Gas" },
        { label: "Indices",  href: "/markets/indices",  icon: BarChart2,   desc: "SPX · DAX · NKY" },
        { label: "Equities", href: "/markets/equities", icon: Briefcase,   desc: isEs ? "EE.UU. · EU · Asia" : "USA · EU · Asia" },
        { label: "Crypto",   href: "/markets/crypto",   icon: Bitcoin,     desc: isEs ? "132 pares vs USD" : "132 pairs vs USD" },
        { label: "ETFs",     href: "/markets/etfs",     icon: TrendingUp,  desc: "GLD · QQQ · SPY" },
        { label: "NDFs",     href: "/markets/ndfs",     icon: RefreshCw,   desc: "BRL · INR · KRW" },
      ],
    },
    {
      label: isEs ? "Cuentas" : "Accounts",
      href: "/accounts",
      icon: Briefcase,
      gradient: "radial-gradient(circle, rgba(200,169,106,0.35) 0%, transparent 70%)",
      iconColor: "#C8A96A",
    },
    {
      label: "cTrader",
      href: "/ctrader",
      icon: Monitor,
      gradient: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
      iconColor: "#818CF8",
    },
    {
      label: isEs ? "Condiciones" : "Trading Conditions",
      href: "/trading-conditions",
      icon: BarChart2,
      gradient: "radial-gradient(circle, rgba(0,186,179,0.35) 0%, transparent 70%)",
      iconColor: "#00BAB3",
      xlOnly: true,
    },
    {
      label: isEs ? "Financiamiento" : "Funding",
      href: "/funding",
      icon: DollarSign,
      gradient: "radial-gradient(circle, rgba(200,169,106,0.35) 0%, transparent 70%)",
      iconColor: "#C8A96A",
      xlOnly: true,
    },
    {
      label: isEs ? "Cumplimiento" : "Compliance",
      href: "/compliance",
      icon: Shield,
      gradient: "radial-gradient(circle, rgba(200,169,106,0.35) 0%, transparent 70%)",
      iconColor: "#C8A96A",
    },
    {
      label: "Partners",
      href: "/partners",
      icon: Users,
      gradient: "radial-gradient(circle, rgba(0,186,179,0.35) 0%, transparent 70%)",
      iconColor: "#00BAB3",
      xlOnly: true,
    },
  ];
}

// ─── Animation variants ───────────────────────────────────────────────────────
const frontVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover:   { rotateX: -90, opacity: 0 },
};
const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover:   { rotateX: 0, opacity: 1 },
};
const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1, scale: 2,
    transition: { opacity: { duration: 0.4 }, scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 } },
  },
};
const sharedTransition = { type: "spring" as const, stiffness: 120, damping: 22, duration: 0.45 };

// ─── Component ────────────────────────────────────────────────────────────────
export default function Header() {
  const pathname   = usePathname();
  // Detect locale directly from the URL — no context needed
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const isEs       = locale === "es";
  const navItems   = buildNavItems(locale);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openMenu, setOpenMenu]      = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smart language switcher — mirrors current page across /es/
  const langHref = isEs
    ? (pathname === "/es" ? "/" : pathname.replace(/^\/es/, "") || "/")
    : (pathname === "/" ? "/es" : `/es${pathname}`);
  const langLabel = isEs ? "ES" : "EN";

  // Locale-aware portal URLs
  const loginHref = isEs
    ? "https://my.arkaltd.io/es/auth/sign-in"
    : "https://my.arkaltd.io/en/auth/sign-in";
  const applyHref = isEs
    ? "https://my.arkaltd.io/es/auth/sign-up"
    : "https://my.arkaltd.io/en/auth/sign-up";
  const loginLabel = "Login";
  const applyLabel = isEs ? "Aplicar" : "Apply";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMenuEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-arka-black/92 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_1px_0_rgba(0,186,179,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div
          className="flex items-center justify-between"
          style={{ height: scrolled ? "76px" : "92px", transition: "height 0.4s ease" }}
        >

          {/* Logo */}
          <Link href={isEs ? "/es" : "/"} className="flex items-center shrink-0 group">
            <Image
              src="/logotipo-white.png"
              alt="ARKA Global Liquidity"
              height={52}
              width={340}
              className="object-contain object-left group-hover:drop-shadow-[0_0_16px_rgba(0,186,179,0.55)] transition-all duration-300"
              style={{ height: "52px", width: "auto", maxWidth: "none" }}
              priority
            />
          </Link>

          {/* ── Desktop nav pill ── */}
          <nav className="hidden lg:flex items-center">
            <div
              className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-xl relative"
              style={{
                background: "rgba(13,17,24,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              {navItems.map((item) => {
                const Icon      = item.icon;
                const isActive  = pathname === item.href;
                const hasMenu   = !!item.dropdown;

                return (
                  <div
                    key={item.label}
                    className={`relative ${item.xlOnly ? "hidden xl:block" : ""}`}
                    onMouseEnter={() => hasMenu ? handleMenuEnter(item.label) : undefined}
                    onMouseLeave={() => hasMenu ? handleMenuLeave() : undefined}
                  >
                    {/* 3D flip wrapper */}
                    <motion.div
                      className="block rounded-lg overflow-visible relative"
                      style={{ perspective: "600px" }}
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Glow behind active item */}
                      <motion.div
                        className="absolute inset-0 z-0 pointer-events-none rounded-lg"
                        variants={glowVariants}
                        animate={isActive ? "hover" : "initial"}
                        style={{ background: item.gradient }}
                      />

                      {/* Front face */}
                      <motion.div
                        variants={frontVariants}
                        transition={sharedTransition}
                        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                        className="flex items-center gap-1.5 px-3 py-1.5 relative z-10 rounded-lg"
                      >
                        <Icon
                          size={13}
                          style={{ color: isActive ? item.iconColor : "rgba(138,157,181,0.8)" }}
                          className="shrink-0 transition-colors duration-200"
                        />
                        <span
                          className="text-[12px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
                          style={{ color: isActive ? "#F4F7FA" : "rgba(138,157,181,0.9)" }}
                        >
                          {item.label}
                        </span>
                        {hasMenu && (
                          <motion.span
                            animate={{ rotate: openMenu === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="opacity-40"
                          >
                            <ChevronDown size={10} />
                          </motion.span>
                        )}
                      </motion.div>

                      {/* Back face — same content, colored */}
                      <motion.div
                        variants={backVariants}
                        transition={sharedTransition}
                        style={{
                          transformStyle: "preserve-3d",
                          transformOrigin: "center top",
                          rotateX: 90,
                          position: "absolute",
                          inset: 0,
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 z-10 rounded-lg"
                      >
                        <Icon size={13} style={{ color: item.iconColor }} className="shrink-0" />
                        <span
                          className="text-[12px] font-semibold tracking-wide whitespace-nowrap"
                          style={{ color: item.iconColor }}
                        >
                          {item.label}
                        </span>
                        {hasMenu && <ChevronDown size={10} style={{ color: item.iconColor, opacity: 0.6 }} />}
                      </motion.div>
                    </motion.div>

                    {/* Navigation target */}
                    {!hasMenu && (
                      <Link href={item.href} className="absolute inset-0 z-20" aria-label={item.label} />
                    )}
                    {hasMenu && (
                      <button
                        className="absolute inset-0 z-20"
                        aria-label={`${isEs ? "Abrir menú de" : "Open"} ${item.label}`}
                        onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      />
                    )}

                    {/* Dropdown panel */}
                    {hasMenu && item.dropdown && (
                      <AnimatePresence>
                        {openMenu === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden z-50"
                            style={{
                              background: "rgba(6,9,14,0.97)",
                              border: "1px solid rgba(0,186,179,0.14)",
                              backdropFilter: "blur(24px)",
                              boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
                              minWidth: "460px",
                            }}
                            onMouseEnter={() => handleMenuEnter(item.label)}
                            onMouseLeave={handleMenuLeave}
                          >
                            <div className="p-2 grid grid-cols-2 gap-0.5">
                              {item.dropdown.map((child) => {
                                const CIcon = child.icon;
                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setOpenMenu(null)}
                                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-arka-turquoise/[0.06] transition-colors group/item"
                                  >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                      style={{ background: "rgba(0,186,179,0.07)", border: "1px solid rgba(0,186,179,0.12)" }}>
                                      <CIcon size={13} className="text-arka-turquoise" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-arka-white text-xs font-medium group-hover/item:text-arka-turquoise transition-colors">
                                        {child.label}
                                      </div>
                                      <div className="text-arka-gray text-[10px] mt-0.5 truncate">{child.desc}</div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="px-3 py-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                              <Link href={item.href} onClick={() => setOpenMenu(null)}
                                className="text-arka-turquoise text-[10px] font-mono tracking-[0.18em] uppercase hover:text-arka-white transition-colors">
                                {isEs ? "Ver todos los mercados →" : "View all markets →"}
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href={langHref}
              className="flex items-center gap-1.5 text-arka-gray hover:text-arka-white text-xs font-mono tracking-[0.12em] transition-colors px-1.5 py-1.5">
              <Globe size={12} />
              <span>{langLabel}</span>
              <ChevronDown size={10} />
            </Link>
            <Link href={loginHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-1.5 text-[12px] font-medium text-arka-white border border-white/[0.1] rounded-lg hover:border-arka-champagne/50 hover:text-arka-white transition-all duration-200 tracking-wide whitespace-nowrap">
              {loginLabel}
            </Link>
            <Link href={applyHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-1.5 text-[12px] font-semibold bg-arka-turquoise text-arka-black rounded-lg hover:bg-arka-turquoise/90 transition-all duration-200 tracking-wider uppercase glow-teal-sm font-display whitespace-nowrap">
              {applyLabel}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-arka-white p-2 rounded-lg border border-white/[0.06]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(3,5,9,0.97)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <nav className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 py-3.5 text-sm font-medium border-b border-white/[0.04] transition-colors tracking-wide"
                      style={{ color: pathname === item.href ? item.iconColor : "rgba(138,157,181,0.9)" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={15} style={{ color: item.iconColor, opacity: 0.7 }} />
                      {item.label}
                      {item.dropdown && <ChevronDown size={12} className="ml-auto opacity-40" />}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-8 flex flex-col">
                        {item.dropdown.slice(0, 6).map((child) => {
                          const CIcon = child.icon;
                          return (
                            <Link key={child.label} href={child.href}
                              className="flex items-center gap-2 py-2 text-arka-gray hover:text-arka-turquoise text-xs transition-colors border-b border-white/[0.02] last:border-0"
                              onClick={() => setMobileOpen(false)}>
                              <CIcon size={11} className="text-arka-turquoise/60 shrink-0" />
                              {child.label}
                            </Link>
                          );
                        })}
                        <Link href={item.href}
                          className="py-2 text-arka-turquoise text-[10px] font-mono tracking-wider"
                          onClick={() => setMobileOpen(false)}>
                          + {isEs ? "más →" : "more →"}
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
              <div className="flex gap-3 pt-5">
                <Link href={loginHref} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-3 text-sm font-medium text-arka-white border border-arka-border rounded-lg hover:border-arka-champagne/50 transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  Login
                </Link>
                <Link href={applyHref} target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-3 text-sm font-semibold bg-arka-turquoise text-arka-black rounded-lg tracking-wide font-display"
                  onClick={() => setMobileOpen(false)}>
                  {applyLabel}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
