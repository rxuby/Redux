/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screen:{
    //   'lg': '1024px',
    // },
    extend: {
      fontFamily:{
        'kanit':["Kanit"]
      }
    },
  },
  plugins: [],
}