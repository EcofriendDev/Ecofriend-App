import pluginJs from "@eslint/js";
import putout from "@putout/plugin-merge-duplicate-imports";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImport from "eslint-plugin-import";
import pathAlias from "eslint-plugin-path-alias";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      import: eslintPluginImport,
      "simple-import-sort": simpleImportSort,
      "merge-duplicate-imports": putout,
      "path-alias": pathAlias,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg", ".jpeg", ".svg", ".gif"],
        },
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "react/prop-types": "off",
      "no-undef": ["error", { typeof: true }],
      "import/no-relative-packages": "error",
      "react/react-in-jsx-scope": "off",
      "path-alias/no-relative": "error",
    },
  },
];
