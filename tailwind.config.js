// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':[ 'Poppins', 'sans-serif'],
        'inter':['Inter', 'sans-serif'],
        'nuni': [ 'Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}


