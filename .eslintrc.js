module.exports = {
  extends: 'airbnb',
  env: {
    jest: true,
    browser: true,
  },
  rules: {
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
