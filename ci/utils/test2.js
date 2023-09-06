const obj = {
  type: 'GitDiff',
  files: [
    {
      type: 'ChangedFile',
      chunks: [
        {
          type: 'Chunk',
          toFileRange: { start: 1, lines: 8 },
          fromFileRange: { start: 1, lines: 6 },
          changes: [
            {
              type: 'UnchangedLine',
              lineBefore: 1,
              lineAfter: 1,
              content: "import { Trans, useTranslation } from 'react-i18next';",
            },
            {
              type: 'UnchangedLine',
              lineBefore: 2,
              lineAfter: 2,
              content: "import i18next from 'i18next';",
            },
            { type: 'UnchangedLine', lineBefore: 3, lineAfter: 3, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 4,
              content: 'i18next.t(`testKey`);',
            },
            { type: 'AddedLine', lineAfter: 5, content: '' },
            {
              type: 'UnchangedLine',
              lineBefore: 4,
              lineAfter: 6,
              content:
                'const languages: Readonly<Array<{ language: string; nativeName: string }>> = [',
            },
            {
              type: 'UnchangedLine',
              lineBefore: 5,
              lineAfter: 7,
              content: '  {',
            },
            {
              type: 'UnchangedLine',
              lineBefore: 6,
              lineAfter: 8,
              content: "    language: 'en',",
            },
          ],
        },
      ],
      path: 'src/App.tsx',
    },
    {
      type: 'AddedFile',
      chunks: [
        {
          type: 'Chunk',
          toFileRange: { start: 1, lines: 221 },
          fromFileRange: { start: 0, lines: 0 },
          changes: [
            { type: 'AddedLine', lineAfter: 1, content: 'const obj = {' },
            { type: 'AddedLine', lineAfter: 2, content: "  type: 'GitDiff'," },
            { type: 'AddedLine', lineAfter: 3, content: '  files: [' },
            { type: 'AddedLine', lineAfter: 4, content: '    {' },
            {
              type: 'AddedLine',
              lineAfter: 5,
              content: "      type: 'DeletedFile',",
            },
            { type: 'AddedLine', lineAfter: 6, content: '      chunks: [' },
            { type: 'AddedLine', lineAfter: 7, content: '        {' },
            {
              type: 'AddedLine',
              lineAfter: 8,
              content: "          type: 'Chunk',",
            },
            {
              type: 'AddedLine',
              lineAfter: 9,
              content: '          toFileRange: { start: 41, lines: 8 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 10,
              content: '          fromFileRange: { start: 41, lines: 6 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 11,
              content: '          changes: [',
            },
            { type: 'AddedLine', lineAfter: 12, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 13,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 14,
              content: '              lineBefore: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 15,
              content: '              lineAfter: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 16,
              content: "              content: '      </Trans>',",
            },
            { type: 'AddedLine', lineAfter: 17, content: '            },' },
            { type: 'AddedLine', lineAfter: 18, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 19,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 20,
              content: '              lineBefore: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 21,
              content: '              lineAfter: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 22,
              content: '              content: \'      <p>{t("lol")}</p>\',',
            },
            { type: 'AddedLine', lineAfter: 23, content: '            },' },
            { type: 'AddedLine', lineAfter: 24, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 25,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 26,
              content: '              lineBefore: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 27,
              content: '              lineAfter: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 28,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 29, content: '            },' },
            { type: 'AddedLine', lineAfter: 30, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 31,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 32,
              content: '              lineAfter: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 33,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 34, content: '            },' },
            { type: 'AddedLine', lineAfter: 35, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 36,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 37,
              content: '              lineAfter: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 38,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 39, content: '            },' },
            { type: 'AddedLine', lineAfter: 40, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 41,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 42,
              content: '              lineBefore: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 43,
              content: '              lineAfter: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 44,
              content: "              content: '    </>',",
            },
            { type: 'AddedLine', lineAfter: 45, content: '            },' },
            { type: 'AddedLine', lineAfter: 46, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 47,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 48,
              content: '              lineBefore: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 49,
              content: '              lineAfter: 47,',
            },
            {
              type: 'AddedLine',
              lineAfter: 50,
              content: "              content: '  );',",
            },
            { type: 'AddedLine', lineAfter: 51, content: '            },' },
            { type: 'AddedLine', lineAfter: 52, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 53,
              content: "              type: 'DeletedFile',",
            },
            {
              type: 'AddedLine',
              lineAfter: 54,
              content: '              lineBefore: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 55,
              content: '              lineAfter: 48,',
            },
            {
              type: 'AddedLine',
              lineAfter: 56,
              content: "              content: '}',",
            },
            { type: 'AddedLine', lineAfter: 57, content: '            },' },
            { type: 'AddedLine', lineAfter: 58, content: '          ],' },
            { type: 'AddedLine', lineAfter: 59, content: '        },' },
            { type: 'AddedLine', lineAfter: 60, content: '      ],' },
            {
              type: 'AddedLine',
              lineAfter: 61,
              content: "      path: 'src/App.tsx',",
            },
            { type: 'AddedLine', lineAfter: 62, content: '    },' },
            { type: 'AddedLine', lineAfter: 63, content: '    {' },
            {
              type: 'AddedLine',
              lineAfter: 64,
              content: "      type: 'ChangedFile',",
            },
            { type: 'AddedLine', lineAfter: 65, content: '      chunks: [' },
            { type: 'AddedLine', lineAfter: 66, content: '        {' },
            {
              type: 'AddedLine',
              lineAfter: 67,
              content: "          type: 'Chunk',",
            },
            {
              type: 'AddedLine',
              lineAfter: 68,
              content: '          toFileRange: { start: 41, lines: 8 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 69,
              content: '          fromFileRange: { start: 41, lines: 6 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 70,
              content: '          changes: [',
            },
            { type: 'AddedLine', lineAfter: 71, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 72,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 73,
              content: '              lineBefore: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 74,
              content: '              lineAfter: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 75,
              content: "              content: '      </Trans>',",
            },
            { type: 'AddedLine', lineAfter: 76, content: '            },' },
            { type: 'AddedLine', lineAfter: 77, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 78,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 79,
              content: '              lineBefore: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 80,
              content: '              lineAfter: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 81,
              content: '              content: "      <p>{t(\'lol\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 82, content: '            },' },
            { type: 'AddedLine', lineAfter: 83, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 84,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 85,
              content: '              lineBefore: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 86,
              content: '              lineAfter: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 87,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 88, content: '            },' },
            { type: 'AddedLine', lineAfter: 89, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 90,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 91,
              content: '              lineAfter: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 92,
              content: '              content:',
            },
            {
              type: 'AddedLine',
              lineAfter: 93,
              content:
                "                \"console.log(I18N.sometextkey)i18next.t('testKey')I18N['someTest']      <p>{t('TEST')}</p>\",",
            },
            { type: 'AddedLine', lineAfter: 94, content: '            },' },
            { type: 'AddedLine', lineAfter: 95, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 96,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 97,
              content: '              lineAfter: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 98,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 99, content: '            },' },
            { type: 'AddedLine', lineAfter: 100, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 101,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 102,
              content: '              lineBefore: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 103,
              content: '              lineAfter: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 104,
              content: "              content: '    </>',",
            },
            { type: 'AddedLine', lineAfter: 105, content: '            },' },
            { type: 'AddedLine', lineAfter: 106, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 107,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 108,
              content: '              lineBefore: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 109,
              content: '              lineAfter: 47,',
            },
            {
              type: 'AddedLine',
              lineAfter: 110,
              content: "              content: '  );',",
            },
            { type: 'AddedLine', lineAfter: 111, content: '            },' },
            { type: 'AddedLine', lineAfter: 112, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 113,
              content: "              type: 'DeletedFile',",
            },
            {
              type: 'AddedLine',
              lineAfter: 114,
              content: '              lineBefore: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 115,
              content: '              lineAfter: 48,',
            },
            {
              type: 'AddedLine',
              lineAfter: 116,
              content: "              content: '}',",
            },
            { type: 'AddedLine', lineAfter: 117, content: '            },' },
            { type: 'AddedLine', lineAfter: 118, content: '          ],' },
            { type: 'AddedLine', lineAfter: 119, content: '        },' },
            { type: 'AddedLine', lineAfter: 120, content: '      ],' },
            {
              type: 'AddedLine',
              lineAfter: 121,
              content: "      path: 'src/App.tsx',",
            },
            { type: 'AddedLine', lineAfter: 122, content: '    },' },
            { type: 'AddedLine', lineAfter: 123, content: '    {' },
            {
              type: 'AddedLine',
              lineAfter: 124,
              content: "      type: 'ChangedFile',",
            },
            { type: 'AddedLine', lineAfter: 125, content: '      chunks: [' },
            { type: 'AddedLine', lineAfter: 126, content: '        {' },
            {
              type: 'AddedLine',
              lineAfter: 127,
              content: "          type: 'Chunk',",
            },
            {
              type: 'AddedLine',
              lineAfter: 128,
              content: '          toFileRange: { start: 41, lines: 8 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 129,
              content: '          fromFileRange: { start: 41, lines: 6 },',
            },
            {
              type: 'AddedLine',
              lineAfter: 130,
              content: '          changes: [',
            },
            { type: 'AddedLine', lineAfter: 131, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 132,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 133,
              content: '              lineBefore: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 134,
              content: '              lineAfter: 41,',
            },
            {
              type: 'AddedLine',
              lineAfter: 135,
              content: "              content: '      </Trans>',",
            },
            { type: 'AddedLine', lineAfter: 136, content: '            },' },
            { type: 'AddedLine', lineAfter: 137, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 138,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 139,
              content: '              lineBefore: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 140,
              content: '              lineAfter: 42,',
            },
            {
              type: 'AddedLine',
              lineAfter: 141,
              content: '              content: "      <p>{t(\'lol\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 142, content: '            },' },
            { type: 'AddedLine', lineAfter: 143, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 144,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 145,
              content: '              lineBefore: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 146,
              content: '              lineAfter: 43,',
            },
            {
              type: 'AddedLine',
              lineAfter: 147,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 148, content: '            },' },
            { type: 'AddedLine', lineAfter: 149, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 150,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 151,
              content: '              lineAfter: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 152,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 153, content: '            },' },
            { type: 'AddedLine', lineAfter: 154, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 155,
              content: "              type: 'AddedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 156,
              content: '              lineAfter: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 157,
              content: '              content: "      <p>{t(\'TEST\')}</p>",',
            },
            { type: 'AddedLine', lineAfter: 158, content: '            },' },
            { type: 'AddedLine', lineAfter: 159, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 160,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 161,
              content: '              lineBefore: 44,',
            },
            {
              type: 'AddedLine',
              lineAfter: 162,
              content: '              lineAfter: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 163,
              content: "              content: '    </>',",
            },
            { type: 'AddedLine', lineAfter: 164, content: '            },' },
            { type: 'AddedLine', lineAfter: 165, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 166,
              content: "              type: 'UnchangedLine',",
            },
            {
              type: 'AddedLine',
              lineAfter: 167,
              content: '              lineBefore: 45,',
            },
            {
              type: 'AddedLine',
              lineAfter: 168,
              content: '              lineAfter: 47,',
            },
            {
              type: 'AddedLine',
              lineAfter: 169,
              content: "              content: '  );',",
            },
            { type: 'AddedLine', lineAfter: 170, content: '            },' },
            { type: 'AddedLine', lineAfter: 171, content: '            {' },
            {
              type: 'AddedLine',
              lineAfter: 172,
              content: "              type: 'DeletedFile',",
            },
            {
              type: 'AddedLine',
              lineAfter: 173,
              content: '              lineBefore: 46,',
            },
            {
              type: 'AddedLine',
              lineAfter: 174,
              content: '              lineAfter: 48,',
            },
            {
              type: 'AddedLine',
              lineAfter: 175,
              content: "              content: '}',",
            },
            { type: 'AddedLine', lineAfter: 176, content: '            },' },
            { type: 'AddedLine', lineAfter: 177, content: '          ],' },
            { type: 'AddedLine', lineAfter: 178, content: '        },' },
            { type: 'AddedLine', lineAfter: 179, content: '      ],' },
            {
              type: 'AddedLine',
              lineAfter: 180,
              content: "      path: 'src/App.tsx',",
            },
            { type: 'AddedLine', lineAfter: 181, content: '    },' },
            { type: 'AddedLine', lineAfter: 182, content: '  ],' },
            { type: 'AddedLine', lineAfter: 183, content: '};' },
            { type: 'AddedLine', lineAfter: 184, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 185,
              content: "const excludeTypes = ['DeletedFile', 'DeletedLine'];",
            },
            { type: 'AddedLine', lineAfter: 186, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 187,
              content: 'const toCheckContent = obj.files',
            },
            {
              type: 'AddedLine',
              lineAfter: 188,
              content: '  .filter((file) => !excludeTypes.includes(file.type))',
            },
            { type: 'AddedLine', lineAfter: 189, content: '  .flatMap(' },
            { type: 'AddedLine', lineAfter: 190, content: '    (file) =>' },
            {
              type: 'AddedLine',
              lineAfter: 191,
              content: '      file.chunks.flatMap((chunk) =>',
            },
            {
              type: 'AddedLine',
              lineAfter: 192,
              content: '        chunk.changes',
            },
            {
              type: 'AddedLine',
              lineAfter: 193,
              content:
                '          .filter((change) => !excludeTypes.includes(change.type))',
            },
            {
              type: 'AddedLine',
              lineAfter: 194,
              content: '          .map((change) => change.content)',
            },
            { type: 'AddedLine', lineAfter: 195, content: '      ),' },
            { type: 'AddedLine', lineAfter: 196, content: '    2' },
            { type: 'AddedLine', lineAfter: 197, content: '  )' },
            { type: 'AddedLine', lineAfter: 198, content: "  .join(' ');" },
            { type: 'AddedLine', lineAfter: 199, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 200,
              content: 'console.log(toCheckContent);',
            },
            {
              type: 'AddedLine',
              lineAfter: 201,
              content: "console.log('//////////////////////////');",
            },
            { type: 'AddedLine', lineAfter: 202, content: '' },
            { type: 'AddedLine', lineAfter: 203, content: 'const regExp =' },
            {
              type: 'AddedLine',
              lineAfter: 204,
              content:
                '  /(t\\([\'|"|`])(.*?)([\'|"|`]\\))|(I18N\\[[\'|"|`])(.*?)([\'|"|`]\\])|(i18next\\.t\\([\'|"|`])(.*?)([\'|"|`]\\))|(I18N\\.)(.*?)(?![a-zA-Z0-9])/g;',
            },
            {
              type: 'AddedLine',
              lineAfter: 205,
              content:
                "// t('translation.key') | I18N['translation.key'] | i18next.t('translation.key') | I18N.translationKey",
            },
            { type: 'AddedLine', lineAfter: 206, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 207,
              content:
                'const results = Array.from(new Set(toCheckContent.match(regExp)));',
            },
            {
              type: 'AddedLine',
              lineAfter: 208,
              content: '// console.log(result);',
            },
            {
              type: 'AddedLine',
              lineAfter: 209,
              content: 'regExp.lastIndex = 0;',
            },
            { type: 'AddedLine', lineAfter: 210, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 211,
              content: 'let translationKeys;',
            },
            { type: 'AddedLine', lineAfter: 212, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 213,
              content: 'if (results != null) {',
            },
            {
              type: 'AddedLine',
              lineAfter: 214,
              content: '  translationKeys = results.map((result) => {',
            },
            {
              type: 'AddedLine',
              lineAfter: 215,
              content:
                '    const regExpExecArray = regExp.exec(result).filter(Boolean);',
            },
            {
              type: 'AddedLine',
              lineAfter: 216,
              content: '    regExp.lastIndex = 0;',
            },
            {
              type: 'AddedLine',
              lineAfter: 217,
              content: '    return regExpExecArray[2];',
            },
            { type: 'AddedLine', lineAfter: 218, content: '  });' },
            { type: 'AddedLine', lineAfter: 219, content: '}' },
            { type: 'AddedLine', lineAfter: 220, content: '' },
            {
              type: 'AddedLine',
              lineAfter: 221,
              content: 'console.log(translationKeys);',
            },
          ],
        },
      ],
      path: 'src/test2.js',
    },
  ],
};

const excludeTypes = ['DeletedFile', 'DeletedLine'];

console.log(obj);

const toCheckContent = obj.files
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

console.log(toCheckContent);
console.log('//////////////////////////');

const regExp =
  /(t\(['|"|`])(.*?)(['|"|`]\))|(I18N\[['|"|`])(.*?)(['|"|`]\])|(i18next\.t\(['|"|`])(.*?)(['|"|`]\))|(I18N\.)(.*?)(?![a-zA-Z0-9])/g;
// t('translation.key') | I18N['translation.key'] | i18next.t('translation.key') | I18N.translationKey

const results = Array.from(new Set(toCheckContent.match(regExp)));
// console.log(result);
regExp.lastIndex = 0;

let translationKeys;

if (results !== null) {
  translationKeys = results.map((result) => {
    const regExpExecArray = regExp.exec(result)?.filter(Boolean);
    regExp.lastIndex = 0;
    return regExpExecArray ? regExpExecArray[2] : [];
  });
}

console.log(translationKeys);
