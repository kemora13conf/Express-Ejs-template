/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#000000",
        "primary-dark-soft": "#2c1b06",
        "primary-light": "#ffffff",
        "secondary": "#c6a851",
        "tertiary": "#c0a868",
        "quaternary": "#584926",
      },
      fontFamily: {
        'main': 'main'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}