"use client";
import { createContext, useContext } from "react";

export type Locale = "en" | "es";
const LocaleContext = createContext<Locale>("en");
export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}
