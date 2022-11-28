module.exports = {
  extends: [
    "../../.eslintrc.js",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": [
      "error",
      "apps/testapp/src/pages",
    ],
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: `${__dirname}/tsconfig.json`,
        alwaysTryTypes: true,
      },
    },
  },
};
