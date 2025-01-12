/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors:{
        sexyblue:'#4B70F5'
      }
    },
  },
  plugins: [],
}

