import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
        <title>foo</title>
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
      </Head>
      <header className="container prose mx-auto max-w-xl py-16 px-4">
        <Link href="/">
          <a>
            <Image
              src="/images/duncan.jpg"
              alt="Photo of Duncan Davidson"
              width={100}
              height={100}
              className="rounded-full"
            />
          </a>
        </Link>
      </header>
      {children}
      <footer className="container prose mx-auto max-w-xl py-32 px-4">
        {/* <Link href="/copyright"><a>copyright</a></Link>
      &bull;
      <Link href="/colophon"><a>colophon</a></Link> */}
      </footer>
    </>
  )
}
