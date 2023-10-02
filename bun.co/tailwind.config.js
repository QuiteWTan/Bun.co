/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'lobster': ['Lobster', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'cinzel': ['Cinzel Decorative', 'cursive'],
        'libre': ['Libre Baskerville', 'serif'],
        'linden': ['Linden Hill', 'serif']
      },
      gridTemplateColumns: {
        'catalogHome': 'repeat(3, minmax(240px, 340px))',
        'catalogHomeSM': 'repeat(2, minmax(240px, 340px))',
        'catalogHomeXS': 'repeat(1, minmax(240px, 340px))',
        'fs': 'repeat(5, minmax(40px, 80px))',
      },
      gridTemplateRows: {
        'fs': 'repeat(5, minmax(40px, 80px))',
      }
    },
  },
  plugins: [],
}