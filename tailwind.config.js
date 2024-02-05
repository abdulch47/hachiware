/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dblue: "#369AD9",
        lblue: "#5FAAD9",
        lgray: "#BEBDBF",
        lpink: "#D9A3A7",
      },
      fontFamily: {
        slussen: ["Slussen", "sans"],
      },
    },
  },
  plugins: [],
};
