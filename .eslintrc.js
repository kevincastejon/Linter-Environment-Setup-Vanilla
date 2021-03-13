module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: [".eslintignore", "**/vendor/*.js"],
  rules: {
    "strict": "off",
    "linebreak-style": "off",
    "spaced-comment": "off",
    "no-console": "off",
    "prefer-const": "off",
    "eol-last": "off",
    "no-plusplus": "off",
    "no-empty": "warn",
    "vars-on-top": "off",
    "no-unused-vars": "off",
    "comma-dangle": "off",
  },
};
