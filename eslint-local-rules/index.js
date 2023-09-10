'use strict';
const fs = require('fs');
const path = require('path');

const gettextParser = require('gettext-parser');

// relative path from current file
const localeDir = path.join(__dirname, '../locales');
const locales = fs.readdirSync(localeDir);

// generate I18N object
const I18NObject = locales.reduce((acc, currentDir) => {
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
const languages = Object.keys(I18NObject);

// missing key check
const getMissingLangs = (transKey) => {
  if (!transKey) return [];
  let missingLangs = [];

  languages.forEach((language) => {
    if (
      I18NObject[language][transKey] === '' ||
      I18NObject[language][transKey]
    ) {
      missingLangs.push(language);
    }
  });

  return missingLangs;
};

// help digest tempalte literal and get the final output
const getTemplateStringValue = (quasis, expressions) => {
  return quasis
    .map((item, i) => {
      if (i === quasis.length - 1) return item.value.raw;

      const matchingExp = expressions.find(
        (exp) => item.range[1] === exp.range[0]
      );
      return item.value.raw + (matchingExp.value ?? matchingExp.name);
    })
    .join('');
};

const getTransKey = (argument0) => {
  try {
    const type = argument0?.type;
    const parent = argument0?.parent;

    if (type === 'TemplateLiteral') {
      return getTemplateStringValue(argument0.quasis, argument0.expressions);
    }
    if (type === 'Identifier' && parent?.object?.name === 'I18N') {
      return argument0.name;
    } else {
      return argument0.value;
    }
  } catch (e) {
    // console.log(e);
    return undefined;
  }
};

// generate error message
const logErrorMessage = (error, filename = '') => {
  console.log(`🔴🔴🔴 Error occured in ${filename}`);
  if (error instanceof Error) {
    console.log(error);
    console.log(error.message);
  } else {
    console.log(error);
  }
  console.log('\n');
};

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
      const checkAndMakeWarning = (node, transKey, missingLangs) => {
        if (missingLangs.length === 0) return;

        context.report({
          node,
          message: `Translation key ${transKey} missing in ${missingLangs.join(
            ', '
          )}`,
        });
      };

      return {
        CallExpression(node) {
          try {
            if ('callee' in node && node.callee.name === 't') {
              const transKey = getTransKey(node.arguments?.[0]);
              const missingLangs = getMissingLangs(transKey);

              checkAndMakeWarning(node, transKey, missingLangs);
            } else if (
              'callee' in node &&
              'object' in node.callee &&
              'property' in node.callee &&
              node.callee.type === 'MemberExpression' &&
              node.callee.object.name === 'i18next' &&
              node.callee.property.name === 't'
            ) {
              const transKey = getTransKey(node.arguments?.[0]);

              const missingLangs = getMissingLangs(transKey);

              checkAndMakeWarning(node, transKey, missingLangs);
            }
          } catch (e) {
            logErrorMessage(e, context.filename);
            return null;
          }
        },
        MemberExpression(node) {
          try {
            if ('object' in node && node.object.name === 'I18N') {
              console.log(node.property);
              const transKey = getTransKey(node.property);
              const missingLangs = getMissingLangs(transKey);

              checkAndMakeWarning(node, transKey, missingLangs);
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
