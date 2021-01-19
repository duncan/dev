module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/foo',
        permanent: true,
      }
    ]
  }
}