// customRule.js
// import { AST_NODE_TYPES, TSESLint } from '@typescript-eslint/utils';

const rule1 = {
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {
      description: 'Desription of the rule you defiend',
    },
    messages: {
      messageIdForSomeFailure: 'getPayment is deprecated. Use SMD insterad',
      messageIdForSomeOtherFailures: '456',
    },
    // fixable: 'code',
    schema: [],
  },
  create: (context) => ({
    CallExpression(node) {
      if (node.callee.type !== AST_NODE_TYPES.Identifier) return;
      if (node.callee.name === 'getPayments') {
        context.report({
          node: node,
          messageId: 'messageIdForSomeFailure',
        });
      }
    },
  }),
};

export default rule1;
