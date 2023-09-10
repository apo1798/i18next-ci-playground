import { Trans, useTranslation } from 'react-i18next';
import i18next from 'i18next';
const apple = '^_^';
const wtfIsThis = `learn2`;
const learn = '123';

console.log(`ABC${123}DEF`);

const I18N = { '^_^': 123, subject: '132', iasdasdasdasd: '123' };

function New2() {
  const { t } = useTranslation();

  console.log(t(wtfIsThis));
  console.log(t(`learn`));
  console.log(t(`ABC${apple}DEF${123}`));
  console.log(t(learn));
  console.log(t('subject'));
  console.log(I18N.iasdasdasdasd);
  console.log(I18N['subject']);
  console.log(I18N[apple]);

  return (
    <>
      {/* <div style={{ backgroundColor: 'gold' }}>{i18next.t('lol')}</div> */}
      {/* <div style={{ backgroundColor: 'gold' }}>{i18next.t(`learn`)}</div> */}
    </>
  );
}

export default New2;
