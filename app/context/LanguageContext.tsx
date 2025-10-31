"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface ILanguageContext {
  language: string;
  toggleLanguage: () => void;
  translations: Record<string, string>;
}

export const LanguageContext = createContext<ILanguageContext | null>(null);

interface ILanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("en");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(`/locales/${language}.json`)
      .then((res) => res.json())
      .then((data) => setTranslations(data))
      .catch((err) => console.error("Failed to load translations", err));
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ka" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
