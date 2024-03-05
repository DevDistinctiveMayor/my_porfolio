/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:
        '#B8B099',
        
        secondary:{
          100: '#243c5a',
          200: '#243c5a',
          300: '#243c5a',
          400: '#243c5a',
      },
      width: {
        '130': '34rem',
      },
      // fontFamily: {
      //   body: ['Kode Mono', 'monospace']
      // },

      screens: {
        'sm': '540px',
        // => @media (min-width: 640px) { ... }
  
        // 'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        // 'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      


    },
  },
  plugins: [],
}
}
