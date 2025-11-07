/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rozha': ['Rozha One', 'serif'],
        'bona': ['Bona Nova', 'serif'],
        'rubik': ['Rubik Marker Hatch', 'cursive'],
      }
    },
  },
  plugins: [],
}

