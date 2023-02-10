/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'rubik'  :"'Rubik', sans-serif",
      },
      fontWeight:{
        'weight-800' : 800,
        'weight-500' : 500,
        'weight-400' : 400,
      },
      colors:{
        'very-dark-grey' : 'hsl(0, 0%, 17%)',
        'dark-grey' : 'hsl(0, 0%, 59%)',
      },
      height:{
        'desktop':'1440px',
        'mobile':'375px',
      },
      screens:{
        'desktop':'1440px',
        'mobile':'375px',
      },
      backgroundImage:{
        'img-bg' : "url('/pattern-bg.png')",
      }
    },
  },
  plugins: [],
}