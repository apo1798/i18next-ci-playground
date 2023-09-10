import { Trans, useTranslation } from 'react-i18next';
import i18next from 'i18next';
import New2 from '@/components/New2';

i18next.t(`testKey`);

const languages: Readonly<Array<{ language: string; nativeName: string }>> = [
  {
    language: 'en',
    nativeName: 'English',
  },
  {
    language: 'zh-TW',
    nativeName: '繁體中文',
  },
  {
    language: 'de',
    nativeName: 'DE',
  },
] as const;

const I18N = { '^_^': 123 };

function App() {
  const { t, i18n } = useTranslation();

  console.log(I18N['^_^']);
  console.log(i18next.t('^_^'));

  return (
    <>
      <div>{i18next.t('learn', { subject: i18next.t('subject') })}</div>
      <div>{t('learn', { subject: 'Vue' })}</div>
      <div>
        {languages.map((option) => (
          <button
            type='button'
            key={option.language}
            onClick={() => {
              i18n.changeLanguage(option.language);
            }}
            disabled={i18n.resolvedLanguage === option.language}
          >
            {option.nativeName}
          </button>
        ))}
      </div>
      <Trans i18nKey='description'>
        Edit <code>App.tsx</code> to <code>123</code> see changes <i>123</i>
      </Trans>
      <p>{t('lol')}</p>
      <p>{t('TEST')}</p>
      <p>{t('TEST2')}</p>
      <New2 />
    </>
  );
}

export default App;
