import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      colors: {
        body: '#525252', // Цвет основного текста
        action: '#dadada', // Зачеркнутый текст и цвета иконок с действием
        secondary: '#9f9f9f', // Второстепенный цвет
        primary: '#e9d9d8', // Яркий акцент - это заголовок и активная кнопка
        default: '#f5f5f5', // Фон страницы
        input: '#fefefe',
      },
      fontFamily: {
        'helvetica-neue': ['HelveticaNeue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
