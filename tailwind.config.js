/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', sans-serif",
      },
      fontWeight: {
        'weight-800': 800,
        'weight-500': 500,
        'weight-400': 400,
      },
      colors: {
        'very-dark-grey': 'hsl(0, 0%, 17%)',
        'dark-grey': 'hsl(0, 0%, 59%)',
      },
      width: {
        'w-200': '200px',
        '900': '900px',
        '720': '720px',
        '280': '280px',
        '1000':'1000px',
        '360':'360px',
      },
      height: {
        'desktop': '1440px',
        'mobile': '375px',
        '62px': '62px'
      },
      spacing: {
        '900': '900px',
        '1300': '1300px',
        '280': '280px',
        '720':'720px',
      }
      ,
      screens: {
        'desktop': '1440px',
        'tablet': '720px',
        'mobile': '375px',
      },
      backgroundImage: {
        'img-bg': "url('/pattern-bg.png')",
      },
      zIndex: {
        '500': 500,
      }
    },
  },
  plugins: [],
}