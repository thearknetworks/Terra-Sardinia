import React, { useEffect } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const supportedLanguages = ["en", "fr", "es", "nl", "de", "it"];

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  // Get browser language, fallback to English if not supported
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split("-")[0]; // Extract language code (e.g., 'en' from 'en-US')
    return supportedLanguages.includes(browserLang) ? browserLang : "en";
  };

  useEffect(() => {
    if (
      lang &&
      supportedLanguages.includes(lang) &&
      i18n.resolvedLanguage !== lang
    ) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!supportedLanguages.includes(lang)) {
    const fallbackLang = getBrowserLanguage();
    return <Navigate to={`/${fallbackLang}/home`} replace />;
  }

  return <Outlet />;
};

export default LanguageWrapper;
