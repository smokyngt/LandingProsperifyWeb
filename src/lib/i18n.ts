import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import frTranslation from "../locales/fr/translation.json";
import enTranslation from "../locales/en/translation.json";

export const defaultNS = "translation" as const;

export const resources = {
  fr: {
    translation: frTranslation,
  },
  en: {
    translation: enTranslation,
  },
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "fr",
    fallbackLng: "en",
    resources,
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
