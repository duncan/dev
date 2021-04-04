module.exports = {
  purge: ['./pages/**/*.{js,tsx,md}', './components/**/*.{js,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    // fontSize: {
    //   xs: ['12px', '16px'],
    //   sm: ['14px', '20px'],
    //   base: ['16px', '24px'],
    //   lg: ['20px', '28px'],
    //   xl: ['24px', '32px'],
    //   2xl: ['', ''],
    // },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 350,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
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
            code: {
              fontWeight: '300',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          'Source Sans Variable',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        mono: [
          //'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
