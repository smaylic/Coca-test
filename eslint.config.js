import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    extends: ["plugin:prettier/recommended"],
  },

  {
    Plugins: {
      eslintConfigPrettier,
    },
    rules: {
      "pretter/prettier": "error",
    },
  },
];
