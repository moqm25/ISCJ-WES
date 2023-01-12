/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'paleBlue': '#EFFAFD',
        'royalBlue': '#4A8BDF', 
        'eggplant': '#A0006D',
        'blueio':'#355a82',

        'brightRed': 'hsl(12, 88%, 59%)',
        'brightRedLight': 'hsl(12, 88%, 69%)',
        'brightRedSupLight': 'hsl(12, 88%, 95%)',
        'darkBlue': 'hsl(228, 39%, 23%)',
        'darkGrayishBlue': 'hsl(227, 12%, 61%)',
        'veryDarkBlue': 'hsl(233, 12%, 13%)',
        'veryPaleRed': 'hsl(13, 100%, 96%)',
        'veryLightGray': 'hsl(0, 0%, 98%)'
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      ua: 'upper-alpha',
    }

  },
  plugins: [],
}
