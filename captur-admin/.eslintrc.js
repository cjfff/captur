module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: ['./tsconfig.json'],
  // },
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreStrings: true,
      },
    ],
    semi: ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
}
