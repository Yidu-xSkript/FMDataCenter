/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#131A2A',
        'primary-a': '#2075D5',
        'primary-b': '#0142A7',
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}