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
              fontWeight: '350',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          'Source Sans Variable',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji"
        ]
      },
      fontSize: {
        'tiny': '1em',
        'base': '1.125em',
        'lg': '1.25em',
        'xl': '1.5em',
        '2xl': '1.875em',
        '3xl': '2.25em',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '6rem'
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
