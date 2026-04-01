import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationNL from './locales/nl/translation.json';
import translationDE from './locales/de/translation.json';
import translationIT from './locales/it/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  es: { translation: translationES },
  nl: { translation: translationNL },
  de: { translation: translationDE },
  it: { translation: translationIT },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'es', 'nl', 'de', 'it'],
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'navigator', 'subdomain'],
      caches: ['cookie'],
    }
  });

export default i18n;
