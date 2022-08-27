module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    // "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "prettier",
  ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: { project: ["./tsconfig.json"] }, // Specify it only for TypeScript files
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "import-access",
    // "react-hooks",
    "sort-keys-custom-order",
  ],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/naming-convention": [
      "error",
      { format: ["PascalCase"], selector: "typeAlias" },
      {
        filter: {
          match: false,
          regex: "opened",
        },
        format: ["PascalCase"],
        prefix: ["is", "should", "has"],
        selector: "variable",
        types: ["boolean"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "import-access/jsdoc": ["error"],
    "import/named": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
        pathGroups: [
          {
            group: "parent",
            pattern: "@alias/**",
            position: "before",
          },
        ],
      },
    ],
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-handler-names": [
      "error",
      {
        checkInlineFunction: true,
        checkLocalVariables: true,
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: false,
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": ["error", { orderedKeys: ["id", "name", "title", "key"] }],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": ["error", { orderedKeys: ["id", "name", "title"] }],
    "unused-imports/no-unused-imports": "warn",
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".ts"] },
      typescript: {},
    },
    react: { version: "detect" },
  },
};
