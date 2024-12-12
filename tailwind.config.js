/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
      // Customize any colors you need for dark mode
      darkBackground: '#1a202c',
      darkText: '#e2e8f0',
    },},
  },
  plugins: [],
};


