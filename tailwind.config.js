/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // You can define your 'cool and light' colors here if you want names
        brand: '#4f46e5', 
      },
    },
  },
  plugins: [],
}