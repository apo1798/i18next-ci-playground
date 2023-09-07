import fs from 'fs';

import { excludeTypes, regExpPattern } from './settings.js';
import { extractInnerInRegex } from './settings.js';

// Get the file diff in this commit under /src
// and collect used I18N keys
const diffJson = fs.readFileSync('diff.json', { encoding: 'utf8' }); // diff.json file generated from 'git-diff-action'
const diffObject = JSON.parse(diffJson);

const diffContent = diffObject.files
  .filter((file) => !excludeTypes.includes(file.type))
  .flatMap(
    (file) =>
      file.chunks.flatMap((chunk) =>
        chunk.changes
          .filter((change) => !excludeTypes.includes(change.type))
          .map((change) => change.content)
      ),
    2
  )
  .join(' ');

const regExp = regExpPattern;
console.log('DIFF CONTENT 👊🏼');
console.log(diffContent);

const matches = Array.from(new Set(diffContent.match(regExp)));
regExp.lastIndex = 0; // g flag needs to reset lastIndex after every look up

export const translationKeys = (() => {
  if (matches == null) return [];
  const matchArray = matches.map(
    (result) => extractInnerInRegex(result, regExp)
    // {
    //   const regExpExecArray = regExp.exec(result)?.filter(Boolean);
    //   regExp.lastIndex = 0;
    //   return regExpExecArray ? regExpExecArray[2] : '';
    // }
  );
  return Array.from(new Set(matchArray));
})();
