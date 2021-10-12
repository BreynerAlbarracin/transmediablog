module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@apis', './src/apis/'],
          ['@assets', './src/assets/'],
          ['@components', './src/components/'],
          ['@config', './src/config/'],
          ['@elements', './src/elements/'],
          ['@layouts', './src/layouts/'],
          ['@navigation', './src/navigation/'],
          ['@pages', './src/pages/'],
          ['@store', './src/store/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
