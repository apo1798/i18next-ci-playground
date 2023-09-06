import polib

pofile = polib.pofile("../locales/zh-TW/test.po")

for entry in pofile:
    print(entry.msgid, entry.msgstr)

print('Hello this is backend code ^_^!!!')