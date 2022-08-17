/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
      redlight : {
        100 :'#A33327',
        200 : '#a73429',
      },
      white : '#FFFFFF',
    },
    fontFamily: {
      'Hatolie': 'Hatolie',
      'Collingar': 'Collingar',
      'Helvetica': 'Helvetica',
      'Stevens': 'Stevens'

    },
    spacing: {

      '4.75': '15.28px',
      '1.25': '5px',
    }
    },

    

  },
  plugins: [],
}

