import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    fontFamily: {
      sans: ['Tajawal'],
    },
    extend: {
      colors: {
        primary: colors.gray
      }
    }
  }
}
