module.exports = {
  env: { node: true },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  overrides: [
    // Configuration for Vue/Javascript files
    {
      files: ["**/*.vue", "**/*.js"],
      plugins: ["unused-imports", "simple-import-sort", "jsx-a11y"],
      extends: ["plugin:prettier/recommended", "plugin:jsx-a11y/recommended"],
      env: {
        browser: true,
      },
      rules: {
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      },
    },
    // Configuration for testing with vitest
    {
      files: ["**/*.test.js", "**/*.test.jsx"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
    },
    // Configuration for testing with cypress
    {
      files: ["**/*.cy.js"],
      plugins: ["cypress"],
      extends: ["plugin:cypress/recommended"],
      env: {
        "cypress/globals": true,
      },
    },
  ],
};
