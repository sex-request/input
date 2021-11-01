module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  globals: {
    context: 'readonly'
  },
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/strict',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'jest'
  ],
  rules: {
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};