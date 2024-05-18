/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052FE",
        secondary: "#19EFB7",
        terciary:"#6EFFEC",
      },
      fontFamily: {
        poetsen: ["Poetsen One"],
      }
    },
  },
  plugins: [],
};
