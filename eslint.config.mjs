import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  },
  {
    ignores: ["dist/", "build/", "node_modules/"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  eslintPluginPrettierRecommended,
];
