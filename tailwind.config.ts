import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'soft-pink': '#f5f5f5',
        heading: '#e9d9d8',
        second: '#9c9c9c',
      },
      fontSize: {
        heading: '100px', // Размер шрифта для заголовков
      },
      boxShadow: {
        custom: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
