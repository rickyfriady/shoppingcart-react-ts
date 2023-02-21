/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sansita: ["Sansita"],
      },
      animation: {
        moona: "moon404 2.5s infinite",
      },
      keyframes: {
        moon404: {
          "33%": { top: "0px" },
          "66%": { top: "20px" },
          "100%": { top: "0px" },
        },
      },
    },
  },
  plugins: [],
};
