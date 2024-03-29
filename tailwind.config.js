/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/****.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'Box' : '#25A3A1',
        'primary' : '#FE6784',
        'button' : '#a3156d'
      }
    },
  },
  plugins: [],
}

