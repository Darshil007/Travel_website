/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
        primary:"#DF6951",
        secondary:"#FFF1DA",
        brightOrange:"#F1A501",
        font1color:'#181e4b',
        secondaryFont:"#5E6282",
        navLabels: "#212832",
        categoryLabels:"#1E1D4C",
        lightPurple : "#DFD7F9",
        footerLabels:"#080809",
     },
     fontFamily:{
      volkhov: "Volkhov, serif",
      popins: "Poppins, sans-serif",
     },
     letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      boxShadow: {
        'Orange': '0 0px 55px 1px rgba(241, 165, 1, 0.4)',
        'brown': '0 0px 60px 1px rgba(223, 105, 81, 1)'
      }
    },
  },
  plugins: [],
}

