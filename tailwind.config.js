/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base_color: "#032C26",
        base_two: "#035145",
        base_text: "#0CC76D",
        white: "#FFFFFF",
      },
    },

    transitionProperty: {
      colors: "color, background-color, border-color, text-decoration-color",
    },
  },
  plugins: [],
};



