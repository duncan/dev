module.exports = {
  purge: [
    './pages/**/*.{js,tsx}',
    './components/**/*.{js,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontWeight: '300',
            },
          },
        },
      },
      fontFamily: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
