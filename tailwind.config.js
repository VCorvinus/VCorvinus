/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020d19",
        secondary: "#7fd7da",
        tertiary: "#0a1b36",
        "black-100": "#08162a",
        "black-200": "#04062a",
        "white-100": "#edfaf7",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #10323c",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
