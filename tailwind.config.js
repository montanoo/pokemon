const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
