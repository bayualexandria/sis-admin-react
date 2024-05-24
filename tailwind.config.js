/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        primary: "#009FDE",
        "light-primary": "#A4DDF7",
      },
      
    },
  },
  plugins: [],
};
