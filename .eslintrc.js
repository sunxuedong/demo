module.exports = {
  // root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "asdfasdfasdsadfasdfsdffasdfasdfasdsadfasdfsdffasdfasdfasdsadfasdfsdffasdfasdfasdsadfasdfsdffasdfasdfasdsadfasdfsdffasdfasdfasdsadfasdfsdff",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["prettier"],
  rules: {
    "no-var": "error",
    "prettier/prettier": "error",
    "no-console": "error",
    "no-debugger": "error",
  },
};
