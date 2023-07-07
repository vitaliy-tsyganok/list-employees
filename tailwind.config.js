/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      white: '#ffffff',
      line: '#dbe4ed',
      'dark-grey': '#84909b',
      grey: '#b0bcc7',
      black: '#041423',
      gold: '#e2bd06',
      red: '#e52e2e',
      'light-blue': '#00b6ed',
      green: '#00ae5b',
      'light-grey': '#e7f3ff',
      blue: '#2a358c',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('prettier-plugin-tailwindcss')],
};
