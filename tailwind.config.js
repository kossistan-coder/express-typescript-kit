/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{html,js}",
    "./public/**/*.{js,css}",
    "./src/**/*.ts",
    "./public/**/*.{js,css}",
    "./src/views/**/*.handlebars",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
            colors: {
        oranged : "#ea580c",
        orange: {
          primary : "#EF532B"
        },
        gray: {
          primary: "#777777",
          pale: "#F4F4F4",
          scale : "#F7FAFC"
        },
        blue: {
          ciel: "#E9F7FE",
          pal: "#203C48",
          sky: "#4D91AE",
          via: "#8ED4DE",
          tail: "#F7FAFC",
          atial : "#139CBC"
        },
        black: {
          primary: "#203C48",
          secondary: "#12223B",
          vial : "#15171C"
        },
        red: {
          primary : "#F5C36E1A"
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
}