import gettextParser from 'gettext-parser';
import fs from 'fs';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputFile = fs.readFileSync(
  path.join(__dirname, '../../locales/zh-TW/test.po'),
  {
    encoding: 'utf8',
  }
);

const po = gettextParser.po.parse(inputFile);

const result = Object.entries(po.translations['']).reduce(
  (acc, [key, value]) => {
    acc[key] = value.msgstr[0];
    return acc;
  },
  {} as Record<string, string>
);

fs.writeFileSync('test.json', JSON.stringify(result));

// import path from 'path';
// import { readFileSync, writeFileSync } from 'fs';
// import {
//   i18nextToPo,
//   i18nextToPot,
//   i18nextToMo,
//   gettextToI18next,
// } from 'i18next-conv';

// const source = path.join(__dirname, '../../locales/zh-TW/test.po');
// const options = {
//   /* you options here */
// };

// function save(target: string) {
//   return (result: string) => {
//     writeFileSync(target, result);
//   };
// }

// i18nextToPo('ua-UK', readFileSync(source), options).then(
//   save('../locales/ua-UK/translation.po')
// );
// i18nextToPot('ua-UK', readFileSync(source), options).then(
//   save('../locales/ua-UK/translation.pot')
// );
// i18nextToMo('ua-UK', readFileSync(source), options).then(
//   save('../locales/ua-UK/translation.mo')
// );

// gettextToI18next(
//   'ua-UK',
//   readFileSync('../locales/ua-UK/translation.po'),
//   options
// ).then(save('../locales/ua-UK/translation.json'));
