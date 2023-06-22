module.exports = {
  root: true,
  env: { node: true },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    // Configuration for Vue/Javascript files
    {
      files: ['**/*.vue', '**/*.ts'],
      plugins: ['unused-imports', 'simple-import-sort', 'jsx-a11y'],
      extends: [
        'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
      ],
      env: {
        browser: true
      },
      rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      }
    },
    // Configuration for testing with vitest
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
    },
  ],
};
