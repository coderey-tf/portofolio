/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 100px)',
        circularDark: 'repeating-radial-gradient(rgb(255, 255, 255) 2px, #121212 5px, #121212 100px)'
      }
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
};
