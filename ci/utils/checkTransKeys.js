import { I18N } from './getI18NObject.js';
import { translationKeys } from './getTranslationKeys.js';

console.log('Added and edited translation key as follow:\n', translationKeys);

// Check whether key exists on all translation entry
console.log('\n');

// log out missing keys in each locales
Object.entries(I18N).forEach(([lang, langObject]) => {
  let isFirst = false;
  translationKeys.forEach((key) => {
    if (key in langObject) return;

    if (!isFirst) console.log(`🌐 ${lang} found missing keys`);
    console.log(`  |  key | ${key} |`);
    isFirst = true;
  });
  console.log(`----- end of ${lang} ------\n`);
});
