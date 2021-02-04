import Head from 'next/head'
import Link from 'next/link'
import About from './about'

const name = 'Duncan Davidson'
export const siteTitle = 'Site Title'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Head>
        <title>Duncan Davidson</title>
        <meta name="title" content="Duncan Davidson"></meta>
        <meta
          name="description"
          content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
        ></meta>

        <meta property=":locale" content="en_US"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://duncan.dev/"></meta>
        <meta property="og:title" content="Duncan Davidson"></meta>
        <meta
          property="og:description"
          content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
        ></meta>
        <meta
          property="og:image"
          content="https://duncan.dev/images/og-image.jpg"
        ></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>

        <meta property="twitter:card" content="summary"></meta>
        <meta property="twitter:url" content="https://duncan.dev/"></meta>
        <meta property="twitter:title" content="Duncan Davidson"></meta>
        <meta
          property="twitter:description"
          content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
        ></meta>
        <meta
          property="twitter:image"
          content="https://duncan.dev/images/duncan.jpg"
        ></meta>
        <meta property="twitter:site" content="@duncan"></meta>
        <meta property="twitter:creator" content="@duncan"></meta>
        <link
          rel="icon"
          href="/favicon-64.png"
          type="image/png"
          sizes="64x64"
        ></link>
        <link
          rel="icon"
          href="/favicon-32.png"
          type="image/png"
          sizes="32x32"
        ></link>
        <link
          rel="shortcut icon"
          href="/favicon-16.png"
          type="image/png"
          sizes="16x16"
        ></link>
        <link
          rel="preload"
          href="/fonts/SourceSans3VF-Roman.otf.latin.woff2"
          as="font"
          type="font/woff2"
        ></link>
        <link
          rel="preload"
          href="/fonts/SourceSans3VF-Italic.otf.latin.woff2"
          as="font"
          type="font/woff2"
        ></link>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://duncan.dev/feed.xml"
        ></link>
        <script
          async
          defer
          data-domain="duncan.dev"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <header className="container mx-auto max-w-xl pt-8 px-4">
        <Link href="/">
          <a>
            <div className="text-lg font-bold text-blue-500">duncan.dev</div>
          </a>
        </Link>
      </header>
      {children}
      <footer className="container mx-auto max-w-xl py-16 px-4">
        <About />

        {/* <Link href="/copyright"><a>copyright</a></Link>
      &bull;
      <Link href="/colophon"><a>colophon</a></Link> */}
      </footer>
    </>
  )
}
