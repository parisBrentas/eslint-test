module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "../tsconfig.base.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  extends: [
    "plugin:import/typescript",
    "next",
    "next/core-web-vitals",
    "./typescript.js",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
  ],
  settings: { "import/resolver": { typescript: {} } },
  ignorePatterns: "**/*.d.ts",
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "consistent-return": "off",
    "@next/next/no-img-element": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [ 2, { extensions: [ ".jsx", ".tsx" ] } ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-curly-spacing": [ 2, { when: "always", children: true, attributes: false } ],
    // This rule doesn't work with NextJS Links that wrap anchor tags
    "jsx-a11y/anchor-is-valid": "off",
  },
  overrides: [
    {
      // Overrides for test files
      files: [ "*.spec.ts", "*.spec.js", "**/__tests__/*" ],
      rules: { "dot-notation": "off" },
    },
  ],
};
