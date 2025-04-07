"use client"

import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});

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
