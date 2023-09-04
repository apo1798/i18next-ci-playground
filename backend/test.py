import polib

pofile = polib.pofile("../locales/zh-TW/test.po")

for entry in pofile:
    print(entry.msgid, entry.msgstr)
