/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy-Regular', 'sans-serif'],
        bold: ['Gilroy-Bold', 'sans-serif'],
        medium: ['Gilroy-Medium', 'sans-serif'],
        light: ['Gilroy-Light', 'sans-serif'],
        heavy: ['Gilroy-Heavy', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
}

