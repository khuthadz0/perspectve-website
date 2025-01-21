/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#004E4E',
        'primary': '#FF6B35',
      },
    },
  },
  plugins: [],
}