/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
       'mobile' : { min:'320px' , max:'640px'}
      },
    },
  },
  plugins: [],
}

