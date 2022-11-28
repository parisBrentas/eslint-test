module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
  ],
  ignorePatterns: [
    "!.eslintrc",
  ],
  plugins: [
    "import",
    "import-newlines",
    "unused-imports",
  ],
  rules: {
    "operator-linebreak": "off",
    "symbol-description": "off",
    "dot-notation": "off",
    "class-methods-use-this": "off",
    "linebreak-style": [ "error", "unix" ],
    eqeqeq: "error",
    "no-await-in-loop": "off",
    "no-underscore-dangle": "off",
    "no-nested-ternary": "off",
    "no-continue": "off",
    "padded-blocks": [ "error", { classes: "always" } ],
    "no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "consistent-return": "off",
    "object-curly-spacing": [ 2, "always" ],
    "object-curly-newline": "off",
    "array-bracket-spacing": [ "error", "always" ],
    quotes: [ "error", "double" ],
    semi: [ "error", "always" ],
    indent: [ "error", 2 ],
    "import/prefer-default-export": "off",
    "import/order": [
      "error",
      { "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          [ "internal", "unknown" ],
          "parent",
          "sibling",
          "index",
        ] },
    ],
    "import-newlines/enforce": [
      "error",
      {
        items: 3,
        "max-len": 80,
        semi: true,
      },
    ],
    "no-restricted-syntax": [
      "error",
      { selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand." },
      { selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize." },
    ],
    "unused-imports/no-unused-imports": "error",
    "no-void": "off",
    curly: "off",
    "no-inner-declarations": "off",
    "react/button-has-type": "off",
  },
  overrides: [
    { files: [ "**/*.ts", "**/*.tsx" ],
      extends: [
        "./.eslintrc/typescript.js",
      ] },
    { files: [ "**/*.tsx" ],
      extends: [
        "./.eslintrc/react.js",
      ] },
    { files: [ "**/*.js" ],
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],
};
