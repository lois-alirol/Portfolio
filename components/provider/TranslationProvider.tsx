"use client";

import React, {useCallback, type ReactNode} from "react";
import { TranslationContext } from "@/components/context/TranslationContext";
import { getNestedValue, renderWithPlaceholders } from "@/lib/translations";
import {usePathname} from "next/navigation";
import {useTransition} from "@/hooks/useTransition";

type TranslationData = Record<string, unknown>;

interface TranslationProviderProps {
  children: ReactNode;
  language: string;
  translations: TranslationData;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
  language,
  translations,
}) => {
  const { navigateWithTransition } = useTransition();
  const pathname = usePathname();

  const t = useCallback(
    (key: string, fallback?: string): string =>
      getNestedValue(translations, key, fallback ?? key),
    [translations]
  );

  const tRich = useCallback(
    (
      key: string,
      values: Record<string, ReactNode>,
      fallback?: string
    ): ReactNode => {
      const text = getNestedValue(translations, key, fallback || key);
      return renderWithPlaceholders(text, values);
    },
    [translations]
  );

  const changeLanguage = useCallback(
      (newLang: string) => {
        const newPath = pathname.replace(/^\/[^/]+/, `/${newLang}`);
        navigateWithTransition(newPath);
      },
      [pathname, navigateWithTransition]
  );

  return (
    <TranslationContext.Provider value={{ t, tRich, currentLanguage: language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};