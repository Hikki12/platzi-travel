const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      }
    },
  },
  variants:{
    extends: [],
  },
  plugins: [],
};