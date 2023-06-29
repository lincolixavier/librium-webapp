module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['unused-imports', 'simple-import-sort', 'jsx-a11y', 'prettier'],
  rules: {
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended']
    }
  ]
}
