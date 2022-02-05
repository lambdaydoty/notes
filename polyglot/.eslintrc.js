module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  overrides: [ // ref: https://stackoverflow.com/a/64488474/9426719
    {
      files: ['*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard-with-typescript',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
  },
}
