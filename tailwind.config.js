module.exports = {
  purge: [ '_site/**/*.html' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [    
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter')()
],
}
