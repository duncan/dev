module.exports = {
  purge: [
    './pages/**/*.{js,tsx,md}',
    './components/**/*.{js,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // screens: {
      //   'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      // },
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
