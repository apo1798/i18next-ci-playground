import path from 'path';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import gettextParser from 'gettext-parser';

import { localesDirPath } from './settings.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// relative path to '/src/utils'
const localeDir = path.join(__dirname, localesDirPath);
const locales = fs.readdirSync(localeDir);

export const I18N = locales.reduce((acc, currentDir) => {
  const poFile = fs.readFileSync(path.join(localeDir, currentDir, 'test.po'), {
    encoding: 'utf-8',
  });

  const result = Object.entries(
    gettextParser.po.parse(poFile).translations['']
  ).reduce((acc, [key, value]) => {
    acc[key] = value.msgstr[0];
    return acc;
  }, {});

  acc[currentDir] = result;
  return acc;
}, {});
