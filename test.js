import gettextParser from 'gettext-parser';
import fs from 'fs';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import core from '@actions/core';
import github from '@actions/github';

console.log('🍍🍍🍍🍍');

// const result = fs.readFileSync('diff.json', { encoding: 'utf8' });
// console.log('🍍🍍🍍🍍');
// console.log(result);

const __dirname = dirname(fileURLToPath(import.meta.url));

const localeDir = path.join(__dirname, './locales');
const locales = fs.readdirSync(localeDir);

const I18N = locales.reduce((acc, currentDir) => {
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

fs.writeFileSync('test.json', JSON.stringify(I18N));


