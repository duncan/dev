import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
      </Head>
      <header className="container mx-auto max-w-xl pt-16 px-4">
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
