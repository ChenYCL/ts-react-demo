/**
 * Created by Owen.chen on 2019/11/9
 */
const Process = require('process');
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            webpack: {
                config: './config/webpack.config.js',
            },
        },
    },
    plugins: ['react', 'jsx-control-statements', '@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true,
    },
    globals: {
        $: true,
    },
    rules: {
        'prettier/prettier': 1,
        'no-console': Process.env.NODE_ENV === 'production' ? 0 : 0,
        '@typescript-eslint/explicit-function-return-type': [
            // 'warn',
            'off',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            },
        ],
        '@typescript-eslint/no-use-before-define': ['warn', { functions: true, classes: true }],
        eqeqeq: ['warn', 'always'],
        'prefer-const': 0,
        '@typescript-eslint/indent': ['off'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': 0,
        '@typescript-eslint/class-name-casing': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'jsx-control-statements/jsx-jcs-no-undef': ['off'],
        // React相关校验规则
        'react/jsx-indent': [2, 4],
        'react/jsx-no-undef': [2, { allowGlobals: true }],
        'jsx-control-statements/jsx-use-if-tag': 0,
    },
};
