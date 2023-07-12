/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      light: '#e8f1f4',
      'light-2': '#e0ebef',
      'light-3': '#dbe4ed',
      'light-grey': '#e7f3ff',
      'dark-grey': '#84909b',
      grey: '#b0bcc7',
      black: '#041423',
      gold: '#e2bd06',
      'light-gold': '#dcdcdc',
      red: '#e52e2e',
      'light-blue': '#00b6ed',
      green: '#00ae5b',
      blue: '#2a358c',
    },
    extend: {},
  },
  plugins: [
    // require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
