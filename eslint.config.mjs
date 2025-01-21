import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended', // Добавляем Prettier
    'eslint:recommended',
    'plugin:react/recommended',
  ),
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js не требует импорта React
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Игнорировать неиспользуемые аргументы с префиксом "_"
      'prettier/prettier': ['error', { singleQuote: true }],
      'sort-imports': 'off', // Выключаем встроенное правило ESLint, чтобы избежать конфликта
      complexity: ['error', 10],
    },
  },
];

export default eslintConfig;
