module.exports = {
  extends: ['airbnb', 'plugin:react/recommended'],
  env: {
    jest: true,
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-confusing-arrow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
