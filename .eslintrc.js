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
    "comma-dangle": "off",
    "no-multiple-empty-lines": "off",
    "padded-blocks": "off",
    "no-trailing-spaces": "off",
    "no-use-before-define": "off",
    "prefer-arrow-callback": "off",
    "func-names": "off",
    "space-before-function-paren": "off",
    "space-before-blocks": "off",
    "space-infix-ops": "off",
    "operator-linebreak": "off",
    "no-multi-spaces": "off",
    "brace-style": "off",
    "indent": "off",
    "no-alert": "off",
    "no-empty": "warn",
    "no-unused-vars": "warn",
    "quotes": "warn",
    "max-len": "warn",
    "no-else-return": "warn",
  },
};
