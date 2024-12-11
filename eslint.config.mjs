// eslint.config.mjs
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import jestPlugin from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      json: {},
      jest: jestPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // 使用 ES 模块系统
      globals: {
        ...jestPlugin.environments.globals.globals,
        module: "readonly", // 声明 `module` 是只读全局变量
        require: "readonly", // 声明 `require` 是只读全局变量
        process: "readonly", // 声明 Node.js 的 `process` 也是全局的
        ResizeObserver: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    rules: {
      "no-var": "error",
      "prettier/prettier": "error",
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "off",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
    settings: {
      jest: {
        version: 27, // 可以根据你的 Jest 版本进行调整
      },
    },
  },
];
