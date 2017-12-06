import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    load: "currentOnly",

    lng: "zh-CN",
    fallbackLng: "zh-CN",
    whitelist: ["zh-CN", "en-US"],

    detection: {
      // order and from where user language should be detected
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],

      // keys or params to lookup language from
      lookupQuerystring: "lang",
      lookupCookie: "i18next",

      // cache user language on
      caches: ["cookie"],
      excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
    },

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });

export default i18n;
