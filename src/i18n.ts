import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  // .use(Backend)
  .init({
    debug: true,
    fallbackLng: 'en',
    saveMissing: true,
    resources: {
      en: {
        translation: {
          learn: 'Learn {{subject}}',
          subject: 'React',
          lol: 'laughing',
        },
      },
      'zh-TW': {
        translation: {
          learn: '學習 {{subject}}',
        },
      },
    },
  });

export default i18next;
