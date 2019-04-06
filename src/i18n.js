import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: "en",
    lng: "en",

    // // have a common namespace used around the full app
    ns: ["common", "about"],
    defaultNS: "common",
    Backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });

  export default i18n;