import { describe, it, expect } from 'vitest';
import { extractInnerInRegex, regExpPattern } from './settings.js';

describe('Test regex of I18N pattern', () => {
  it(`should get the key in "t('')" `, () => {
    const tests = ['key', 'key.with.dot.notation'].map((key) => ({
      key,
      patterns: [
        `<div>{t('${key}')}</div>`,
        `<div>{t("${key}")}</div>`,
        `<div>{t(\`${key}\`)}</div>`,
        `const key = t('${key}')`,
      ],
    }));

    tests.forEach(({ key, patterns }) => {
      patterns.forEach((pattern) => {
        const innerKey = extractInnerInRegex(pattern, regExpPattern);
        expect(innerKey).toBe(key);
      });
    });
  });

  it(`should get the key in "I18N['']" `, () => {
    const tests = ['key', 'key.with.dot.notation'].map((key) => ({
      key,
      patterns: [
        `<div>{I18N['${key}']}</div>`,
        `<div>{I18N["${key}"]}</div>`,
        `<div>{I18N[\`${key}\`]}</div>`,
        `const key = I18N['${key}']`,
      ],
    }));

    tests.forEach(({ key, patterns }) => {
      patterns.forEach((pattern) => {
        const innerKey = extractInnerInRegex(pattern, regExpPattern);
        expect(innerKey).toBe(key);
      });
    });
  });

  it(`should get the key in "i18next.t('')" `, () => {
    const tests = ['key', 'key.with.dot.notation'].map((key) => ({
      key,
      patterns: [
        `<div>{i18next.t('${key}')}</div>`,
        `<div>{i18next.t("${key}")}</div>`,
        `<div>{i18next.t(\`${key}\`)}</div>`,
        `const key = i18next.t('${key}')`,
      ],
    }));

    tests.forEach(({ key, patterns }) => {
      patterns.forEach((pattern) => {
        const innerKey = extractInnerInRegex(pattern, regExpPattern);
        expect(innerKey).toBe(key);
      });
    });
  });

  it(`should get the key after "I18N." dot notation`, () => {
    const tests = ['key', 'longKeyInOne'].map((key) => ({
      key,
      patterns: [`<div>{I18N.${key}}</div>`, `const key = I18N.${key}`],
    }));

    tests.forEach(({ key, patterns }) => {
      patterns.forEach((pattern) => {
        const innerKey = extractInnerInRegex(pattern, regExpPattern);
        expect(innerKey).toBe(key);
      });
    });
  });
});
