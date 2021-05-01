import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <!-- Cloudflare Web Analytics for duncan.dev --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "5a4a2059347340ddbf35592f251f6051"}'></script><!-- End Cloudflare Web Analytics -->
        </body>
      </Html>
    )
  }
}
