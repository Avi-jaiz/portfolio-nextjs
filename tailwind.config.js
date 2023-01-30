/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    fontFamily: {
      playBall: ["Playball", "sans-serif"],
      aveDisplay: ["Sedgwick Ave Display", "cursive"],
    },
  },

  plugins: [],
};
