import i18n from 'i18next';
import translation from '@/locales/en/translation.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation,
    },
  },
});

export default i18n;
