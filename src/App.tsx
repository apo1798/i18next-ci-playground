import { Trans, useTranslation } from 'react-i18next';
import i18next from 'i18next';

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

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>{i18next.t('apple')}</div>
      <div>{t('apple')}</div>
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
    </>
  );
}

export default App;
