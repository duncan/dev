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
  },
  images: {
    deviceSizes: [320, 420, 640, 840, 1280],
    imageSizes: [320, 420, 640, 840, 1280],
  }
}