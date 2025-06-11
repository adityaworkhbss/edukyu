/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      maxHeight: {
        'screen-minus-78': 'calc(100vh - 78px)',
      },
      screens: {
        mobile: '0px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

