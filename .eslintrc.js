module.exports = {
  extends: [
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'airbnb',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'no-confusing-arrow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'function-paren-newline': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'react/no-typos': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
