/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#FAC213",
        "gold-secondary": "#F9F54B",
        "dark-primary": "#191825",
        "dark-secondary": "#393E46",
        light: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
