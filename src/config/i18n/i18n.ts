import i18n from 'i18next';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(I18NextHttpBackend)
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json'
    }
  });
