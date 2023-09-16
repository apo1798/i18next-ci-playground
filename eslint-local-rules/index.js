/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const path = require('path');
const utils = require('eslint-utils');

const {
  getI18NObject,
  getTransKey,
  getMissingLangs,
  logErrorMessage,
} = require('./utils');

// relative path from current file
const localeDir = path.join(__dirname, '../locales');
const I18NObject = getI18NObject(localeDir);
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
      const checkAndWarn = (node, transKey, missingLangs) => {
        if (missingLangs.length === 0) return;

        context.report({
          node,
          message: `Value of key '${transKey}' missing in ${missingLangs.join(
            ', '
          )}`,
        });
      };

      return {
        CallExpression(node) {
          try {
            if (context.filename.includes('New2.tsx')) {
              console.log('--');
              console.log(context.getDeclaredVariables(node));

              console.log(context.getTokenByRangeStart(node));

              // console.log(utils.getStaticValue(node));
              // const sourceCode = context.getSourceCode();

              // console.log(sourceCode);
            }

            if ('callee' in node && node.callee.name === 't') {
              const transKey = getTransKey(node.arguments?.[0]);
              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, transKey, missingLangs);
            } else if (
              'callee' in node &&
              'object' in node.callee &&
              'property' in node.callee &&
              node.callee.type === 'MemberExpression' &&
              node.callee.object.name === 'i18next' &&
              node.callee.property.name === 't'
            ) {
              const transKey = getTransKey(node.arguments?.[0]);

              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, transKey, missingLangs);
            }
          } catch (e) {
            logErrorMessage(e, context.filename);
            return null;
          }
        },
        MemberExpression(node) {
          try {
            if ('object' in node && node.object.name === 'I18N') {
              const transKey = getTransKey(node.property);
              const missingLangs = getMissingLangs(
                transKey,
                languages,
                I18NObject
              );

              checkAndWarn(node, transKey, missingLangs);
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
