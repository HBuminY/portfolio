/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors:{
        deadsky:"#E6EAFD",
        moondream:"#6C7DB1",
        skypink:"#bea0be",
        "skypink-dark":"#916991",
        "sakurapink":"#f09cac",
        buildingblue:"rgb(68 77 129)"
      },
      fontFamily:{
        lobster:["lobster"]
      }
    },
  },
  plugins: []
}