module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb",
    'airbnb-typescript',
    "airbnb/hooks",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { 
    ecmaVersion: 'latest',
    sourceType: 'module',
  },  
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'airbnb-typescript',
    ],
    parserOptions: { project: ['./tsconfig.json'] },
  }],
  plugins: ['react-refresh'],
  "ignorePatterns": ["vite.config.ts"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    "no-underscore-dangle": 0,
    "import/prefer-default-export": "off",
    "semi": ["error", "never"],
    'max-classes-per-file': 'off',
    "no-param-reassign": 0,
    "object-curly-newline":["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "minProperties": 3, "consistent": false, "multiline": true },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 },
    }],
  },
}