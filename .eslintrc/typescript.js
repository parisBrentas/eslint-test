module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "../tsconfig.base.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: { impliedStrict: true },
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: { "import/resolver": { node: { extensions: [ ".ts", ".tsx" ] } } },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@nrwl/nx",
    "@typescript-eslint",
  ],
  rules: {
    "max-len": [ "error", {
      code: 120,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
    } ],
    "@typescript-eslint/quotes": [ "error", "double" ],
    indent: "off",
    quotes: "off",
    // camelcase: "off",
    // "import/no-unresolved": [2, {ignore: ["@\/.*"]}],
    "import/no-extraneous-dependencies": "off", // Doesn't work with monorepo :/
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/indent": [ "error", 2 ],
    "no-unused-vars": "off", // Use the TypeScript one instead
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/naming-convention": [ "error",
      {
        selector: "default",
        format: [ "camelCase", "PascalCase", "UPPER_CASE" ],
        leadingUnderscore: "allow",
      },
      {
        selector: [ "objectLiteralProperty", "typeProperty" ],
        format: null,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-use-before-define": "off", // This rule only affects type declaration
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      // Overrides for test files
      files: [ "*.spec.ts", "*.spec.js", "**/__tests__/*" ],
      rules: { "dot-notation": "off" },
    },
  ],
};
