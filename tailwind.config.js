/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundColor: {
      primary: "#FFF",
      secoundary: "#000",
      purple: "#AD49E1",
      darkPurple: "#7A1CAC",
    },
    colors: {
      primary: "#FFF",
      Secoundary: "#000",
      purple: "#AD49E1",
      darkPurple: "#7A1CAC",
    },
    screens: {
      s: "0px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
