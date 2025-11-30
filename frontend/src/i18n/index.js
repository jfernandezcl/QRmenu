import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";

// Detecta el idioma del navegador para establecer el idioma inicial
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

i18n.use(initReactI18next).init({
  // CORRECCIÓN FINAL: Pasar el objeto JSON importado directamente.
  // Como el JSON ya contiene la clave 'common' en el nivel superior,
  // i18next lo interpreta correctamente como el namespace.
  resources: {
    en: en,
    es: es,
  },

  // Establece el namespace por defecto para que t('app_name') funcione
  defaultNS: "common",

  // Establece el idioma inicial
  lng: userLanguage,

  // Idioma de reserva
  fallbackLng: "en",

  interpolation: { escapeValue: false },
});

export default i18n;
