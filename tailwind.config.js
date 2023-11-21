/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  darkMode: ['class'],
  theme: {
    minHeight: {
      'screen/2': '50vh',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
