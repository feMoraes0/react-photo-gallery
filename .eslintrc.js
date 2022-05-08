module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-return-await': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 0,
  },
};
