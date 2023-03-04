/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sansita: ['Sansita'],
      },
      animation: {
        moona: 'moon404 2.5s infinite',
        flipUpAnim: 'flipUp 1s ease-in',
        flipDownAnim: 'flipDown 1s ease-out 1s',
      },
      keyframes: {
        moon404: {
          '33%': { top: '0px' },
          '66%': { top: '20px' },
          '100%': { top: '0px' },
        },
        flipUp: {
          '100%': { transform: 'rotateX(90deg)' },
        },
        flipDown: {
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
