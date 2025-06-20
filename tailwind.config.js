/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8ebcff',
          400: '#5d99ff',
          500: '#3975fe',
          600: '#2057f5',
          700: '#1943e0',
          800: '#1a38b5',
          900: '#1b358d',
          950: '#142055',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}