/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
        
      },
      colors: {
        primaryOne: "hsl(0, 100%, 67%)",
        primaryTwo: "hsl(39, 100%, 56%)",
        primaryThree: "hsl(166, 100%, 37%)",
        primaryFour: "hsl(234, 85%, 45%)",
        rear: "hsl(0, 0%, 100%)",
        secondaryOne: "hsl(221, 100%, 96%)",
        secondaryTwo: "hsl(241, 100%, 89%)",
        secondaryThree: "hsl(224, 30%, 27%)",
        circleOne: "hsla(256, 72%, 46%, 1)",
        circleTwo: "hsla(241, 72%, 46%, 1)",
        gradientsOne: "hsl(252, 100%, 67%)",
        gradientsTwo: "hsl(241, 81%, 54%)",
      },
    },
  },
  plugins: [],
};