module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  root: true,
  ignorePatterns: [".eslintrc.js"],
  rules: {
    '@typescript-eslint/require-await': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error'
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
  }
}

