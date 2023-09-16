/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const path = require('path');

const {
  getI18NObject,
  getTransKeys,
  getMissingLangs,
  logErrorMessage,
} = require('./utils');

// relative path from current file
const localeDir = path.join(__dirname, '../locales');
const I18NObject = getI18NObject(localeDir, 'test.po');
const languages = Object.keys(I18NObject);

// eslint rule definition
module.exports = {
  'trans-key-check': {
    defaultOptions: [],
    meta: {
      type: 'problem',
      schema: [],
    },
    create: (context) => {
      // utils: error reporter
      const checkAndWarn = (node, missingLangs) => {
        if (Object.keys(missingLangs).length === 0) return;

        const message = `Missing translation value \n${Object.entries(
          missingLangs
        )
          .map(
            ([key, languages]) =>
              `Value of key '${key}' missing in ${languages.join(', ')}\n`
          )
          .join('')}`;

        context.report({
          node,
          message,
        });
      };

      return {
        CallExpression(node) {
          try {
            if ('callee' in node && node.callee.name === 't') {
              const transKey = getTransKeys(node.arguments?.[0]);
              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, missingLangs);
            } else if (
              'callee' in node &&
              'object' in node.callee &&
              'property' in node.callee &&
              node.callee.type === 'MemberExpression' &&
              node.callee.object.name === 'i18next' &&
              node.callee.property.name === 't'
            ) {
              const transKey = getTransKeys(node.arguments?.[0]);

              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, missingLangs);
            }
          } catch (e) {
            logErrorMessage(e, context.filename);
            return null;
          }
        },
        MemberExpression(node) {
          try {
            if ('object' in node && node.object.name === 'I18N') {
              const transKey = getTransKeys(node.property);
              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, missingLangs);
            }
          } catch (e) {
            logErrorMessage(e, context.filename);
            return null;
          }
        },
      };
    },
  },
};

// if (context.filename.includes('New2.tsx')) {
//   console.log('--');
//   console.log(context.getDeclaredVariables(node));

//   console.log(context.getTokenByRangeStart(node));
// }
