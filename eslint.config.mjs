import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/* eslint-disable import/no-anonymous-default-export */
export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
      'no-unused-vars': ['warn', { args: 'none' }],
      'sort-imports': 'off',
      complexity: ['error', 10],
    },
  },
];
