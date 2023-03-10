/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': "#afde15",
        'light-purple': "#926efc",
        'dark-purple': '#320198',
        'light-blue': "#f3f7ff"
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      },
      fontFamily: {
        payton: ['Paytone One', "sans-serif"],
        open: ['Open Sans', " sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/top-background.png')",
      }
    },
  },
  plugins: [],
}