// customRule.js
import { AST_NODE_TYPES, TSESLint } from '@typescript-eslint/utils';

type MessageIds = 'messageIdForSomeFailure' | 'messageIdForSomeOtherFailures';

const myRule: TSESLint.RuleModule<MessageIds> = {
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
  create: (context) => {
    context.get;
    return {
      CallExpression(node) {
        // context.getDeclaredVariables(node);
        if (node.callee.type !== AST_NODE_TYPES.Identifier) return;

        if (node.callee.name === 'getPayments') {
          // const as = node.arguments[0]
          context.report({
            node: node,
            messageId: 'messageIdForSomeFailure',
          });
        } else if (
          node.callee.type === 'MemberExpression' &&
          node.callee?.object?.name === 'i18next' &&
          node.callee?.property === 't'
        ) {
          console.log('SMDSMDSMDSMD');
          const transKey = node.callee.parent?.arguments?.[0]?.value;
          console.log(transKey, 'TEST');
          const missingLangs = getMissingLangs(transKey);

          checkAndMakeWarning(node, missingLangs);
        }
      },
      ExpressionStatement(node) {
        if (node.type )
      }
    };
  },
};

export default myRule;
