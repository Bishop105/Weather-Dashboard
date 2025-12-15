/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         ibm: ["'IBM Plex Mono'", "monospace"],
         holtwood: ["'Holtwood One SC'", "serif"],
         inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
