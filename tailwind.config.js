/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FCF7ED",
        ink: "#1B1B1B",
        accent: "#A67C52",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
