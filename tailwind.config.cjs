/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-search': 'rgba(255, 255, 255, 0.4)'
      },
      backgroundImage: {
        topbackground: 'url(/assets/top-background.jpeg)'
      },
    },
    plugins: [],
  }
}
