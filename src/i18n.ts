import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.ts';
import en from './locales/en.ts';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      en: { translation: en }
    },
    lng: 'ru', // default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
