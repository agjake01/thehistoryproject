/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5F0E1",
        charcoal: "#2E2E2E",
        gold: "#C49B66",
        navy: "#2A3E5C",
      },
      fontFamily: {
        heading: ["Libre Baskerville", "serif"],
        body: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};

  