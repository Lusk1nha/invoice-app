/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brightPurple': '#7C5DFA',
        'tealishBlue': {
          '600': '#373B53',
          '400': '#494E6E'
        },
        'ube': '#7E88C3',
        'lavender': '#DFE3FA',
        'violetsAreBlue': '#9277FF',
        'coolGrey': '#888EB0'
      },
      width: {
        '72': '4.5rem'
      },
      height: {
        '72': '4.5rem'
      }
    },
    screens: {
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: [],
}