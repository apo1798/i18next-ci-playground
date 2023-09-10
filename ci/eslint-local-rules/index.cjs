// const rule1 = require('./customRuleJS.cjs');
// import rule1 from './customRuleJS';

const transKeyCheck = await import('./customRuleJS.js');

const plugin = {
  rules: {
    'trans-key-check': transKeyCheck,
  },
};

export default plugin;
