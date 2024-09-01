/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Karma: ['"Karma"', ...defaultTheme.fontFamily.sans],
        Poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}