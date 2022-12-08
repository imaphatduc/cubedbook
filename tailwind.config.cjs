/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cubedpink: '#d31dde',
        cubedpurple: '#4935e8',
        cubedlightpurple: '#a61ee8',
        cubedblue: '#560bff',
        cubedlightblue: '#3b59ff',
        cubeddark: '#2e0f52',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'scale(0.95)' } },
        fadeOut: { to: { opacity: 0, transform: 'scale(0.95)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-out',
        fadeOut: 'fadeOut 0.15s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
