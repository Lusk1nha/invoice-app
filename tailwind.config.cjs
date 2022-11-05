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
        'lavenderTranslucid': '#dfe3fa14',
        'violetsAreBlue': '#9277FF',
        'coolGrey': {
          '600': '#888EB0',
          '400': '#858BB2'
        },
        'yankeesBlue': {
          '600': '#1E2139',
          '400': '#252945'
        },
        'ghostWhite': '#F8F8FB',
        'eerieBlack': '#141625',
        'chineseBlack': '#0C0E16',
        'eucalyptus': '#33D69F',
        'eucalyptusTranslucid': '#33d69f12',
        'darkOrange': '#FF8F00',
        'darkOrangeTranslucid': '#ff8f0012',
        'charcoal': '#373B53',
        'charcoalTranslucid': '#373b5329',
        'blackTranslucid': '#000000AF',
        'customGray': "#979797"
      },
      width: {
        '72': '4.5rem'
      },
      height: {
        '72': '4.5rem'
      },
      gridTemplateAreas: {
        'layout': [
          'code name',
          'date status',
          'price status',
        ]
      },
      gridTemplateColumns: {
        'layout': '1fr 1fr',
      },
      gridTemplateRows: {
        'layout': `1fr 2fr`
      },
      backgroundImage: {
        'checkedImage': "url('/src/assets/icon-check.svg')"
      }
    },
    screens: {
      sm: '0px',
      md: '768px',
      lg: '1440px'
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}