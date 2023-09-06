const obj = {
  type: 'GitDiff',
  files: [
    {
      type: 'ChangedFile',
      chunks: [
        {
          type: 'Chunk',
          toFileRange: { start: 41, lines: 8 },
          fromFileRange: { start: 41, lines: 6 },
          changes: [
            {
              type: 'UnchangedLine',
              lineBefore: 41,
              lineAfter: 41,
              content: '      </Trans>',
            },
            {
              type: 'UnchangedLine',
              lineBefore: 42,
              lineAfter: 42,
              content: "      <p>{t('lol')}</p>",
            },
            {
              type: 'UnchangedLine',
              lineBefore: 43,
              lineAfter: 43,
              content: "      <p>{t('TEST')}</p>",
            },
            {
              type: 'AddedLine',
              lineAfter: 44,
              content: "      <p>{t('TEST')}</p>",
            },
            {
              type: 'AddedLine',
              lineAfter: 45,
              content: "      <p>{t('TEST')}</p>",
            },
            {
              type: 'UnchangedLine',
              lineBefore: 44,
              lineAfter: 46,
              content: '    </>',
            },
            {
              type: 'UnchangedLine',
              lineBefore: 45,
              lineAfter: 47,
              content: '  );',
            },
            {
              type: 'UnchangedLine',
              lineBefore: 46,
              lineAfter: 48,
              content: '}',
            },
          ],
        },
      ],
      path: 'src/App.tsx',
    },
  ],
};
