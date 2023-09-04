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
