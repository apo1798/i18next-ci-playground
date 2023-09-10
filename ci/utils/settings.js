// reltative path to src/utils
export const localesDirPath = '../../locales';

export const excludeTypes = ['DeletedFile', 'DeletedLine'];

// t('translation.key') |
// I18N['translation.key'] |
// i18next.t('translation.key') |
// I18N.translationKey |
// t('translation.key', {}) -> to 'translation.key'
//
export const regExpPattern =
  /(t\(['|"|`])(.*?)(['|"|`]\))|(I18N\[['|"|`])(.*?)(['|"|`]\])|(i18next\.t\(['|"|`])(.*?)(['|"|`]\))|(I18N\.)(.*?)(?![a-zA-Z0-9])|(t\(['|"|`])(.*?)(['|"|`](.*?)\))/g;
// t\([^)]*\)

export const extractInnerInRegex = (test, regex) => {
  const regExpExecArray = regex.exec(test)?.filter(Boolean);
  regex.lastIndex = 0;
  return regExpExecArray ? regExpExecArray[2] : '';
};
