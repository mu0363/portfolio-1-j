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
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
      parserOptions: { project: ["./tsconfig.json"] }, // Specify it only for TypeScript files
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {},
      node: { extensions: [".ts"] },
    },
  },
  plugins: ["react", "@typescript-eslint", "import", "unused-imports", "import-access"],
  rules: {
    "require-jsdoc": "off",
    "sort-imports": 0,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "typeAlias", format: ["PascalCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has"],
        filter: {
          regex: "opened",
          match: false,
        },
      },
    ],
    "unused-imports/no-unused-imports": "warn",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/named": "off",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: false,
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "import-access/jsdoc": ["error"],
  },
};
