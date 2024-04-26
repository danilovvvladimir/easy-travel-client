module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:i18next/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json']
  },
  plugins: ['react-refresh', 'i18next'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    '@typescript-eslint/comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-absolute-path': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react-refresh/only-export-components': 'off'
  },
  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: {
        'no-param-reassign': 'off'
      }
    }
  ]
};
