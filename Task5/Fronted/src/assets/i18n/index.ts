import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json";

const resources = { en: { translation: translationEN } };

export const initI18 = async (): Promise<void> => {
  await i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};
