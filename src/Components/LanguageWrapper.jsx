import React, { useEffect } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const supportedLanguages = ['en', 'fr', 'es', 'nl', 'de', 'it'];

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang) && i18n.resolvedLanguage !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to={`/${i18n.resolvedLanguage || 'en'}/home`} replace />;
  }

  return <Outlet />;
};

export default LanguageWrapper;
