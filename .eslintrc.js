module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  }
};
