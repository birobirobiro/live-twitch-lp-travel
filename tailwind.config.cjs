/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-search': 'rgba(255, 255, 255, 0.4)',
        'background-categories': 'rgba(18,18,20,0.8)',
      },
      backgroundImage: {
        topbackground: 'url(/assets/top-background.jpeg)'
      },

    },
    plugins: [],
  }
}
