/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '20%, 60%': { transform: 'translateX(-8px)' },
        '40%, 80%': { transform: 'translateX(8px)' },
      },
    },
    animation: {
      shake: 'shake 0.5s ease-in-out',
    },
  },  
      fontFamily: {
         ibm: ["'IBM Plex Mono'", "monospace"],
         holtwood: ["'Holtwood One SC'", "serif"],
         inter: ["Inter", "sans-serif"],
      },
    },
  }
  plugins: [];
