module.exports = {
  // root: true,
  env: {
    jest: true, // 关键在这
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ["prettier", "json"],
  rules: {
    "no-var": "error",
    "prettier/prettier": "error",
    "no-console": "error",
    "no-debugger": "error",
  },
};
