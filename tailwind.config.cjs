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
        'ghostWhite': {
          '600': '#F8F8FB',
          '400': '#F9FAFE'
        },
        'eerieBlack': '#141625',
        'chineseBlack': '#0C0E16',
        'eucalyptus': '#33D69F',
        'eucalyptusTranslucid': '#33d69f12',
        'darkOrange': '#FF8F00',
        'darkOrangeTranslucid': '#ff8f0012',
        'charcoal': '#373B53',
        'charcoalTranslucid': '#373b5329',
        'blackTranslucid': '#000000AF',
        'customGray': '#979797',
        'lightSlateGray': '#777F98'
      },
      width: {
        '72': '4.5rem'
      },
      height: {
        '72': '4.5rem'
      },
      gridTemplateAreas: {
        'invoiceItem': [
          'code name',
          'date status',
          'price status',
        ],
        'invoiceDetailsMobile': [
          'invoiceDate billTo',
          'paymentDue billTo',
          'sentTo sentTo',
        ],
        'invoiceDetailsTablet': [
          'invoiceDate billTo sentTo',
          'paymentDue billTo',
        ],
        'fieldsFormOnSmartphone': [
          'city postCode',
          'country country'
        ],
        'itemListFormOnSmartphone': [
          'itemName itemName itemName itemName itemName',
          'itemQty itemPrice itemPrice itemTotal btnDelete'
        ],
        'itemListFormOnDesktop': [
          'itemName itemQty itemPrice itemTotal btnDelete'
        ]
      },
      gridTemplateColumns: {
        'invoiceItem': '1fr 1fr',
        'invoiceDetailsMobile': '1fr 1fr',
        'invoiceDetailsTablet': '1fr 1fr 1fr',
        'fieldsFormOnSmartphone': '1fr 1fr',
        'itemListOnSmartphone': '1.2fr 1.2fr 1.1fr 1fr 1fr',
        'itemListOnDesktop': '2fr 0.55fr 1fr 0.55fr 0.5fr'
      },
      gridTemplateRows: {
        'invoiceItem': '1fr 2fr',
        'invoiceDetailsMobile': '1fr 1fr 1fr',
        'invoiceDetailsTablet': '1fr 1fr',
        'fieldsFormOnSmartphone': '1fr 1fr',
        'itemListOnSmartphone': '1fr 1fr',
        'itemListOnDesktop': '1fr',
      },
      backgroundImage: {
        'checkedImage': "url('/src/assets/icon-check.svg')"
      },
      boxShadow: {
        '3xl': '0px -17px 64px 0px rgba(0,0,0,0.08)'
      }
    },
    screens: {
      sm: '0px',
      md: '670px',
      lg: '1440px'
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded'],
    extend: {
      fill: ['group-hover', 'hover']
    }
  }
}