/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#2b2e30",
        "darker-black": "#171717",
        "primary-coffe": "#b77a37",
        "yellow-dark": "#c78a35",
        "yellow-mid": "#d59834",
        "primary-yellow": "#e5a832",
        "primary-white": "#e1e1e1",
        "light-white": "#ffff",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif;"] /*Titulos*/,
        roboto: ["Roboto", "sans-serif;"] /*SubTitulos*/,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
