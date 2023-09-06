import fs from 'fs';

// msgid "description"
// msgstr "Edit <1>src/App.js</1> and save to reload"

const outputString = Array.from({ length: 20000 })
  .flatMap((_, i) => {
    return [`msgid "description.${i}"`, `msgstr "content ${i}"`, ''];
  })
  .join('\n');

fs.writeFileSync('test.po', outputString);
