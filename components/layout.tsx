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
      <header className="flex container mx-auto max-w-xl pt-8 pb-8 px-4">
        <Link href="/">
          <a>
            <div className="text-lg font-bold text-gray-500">duncan.dev</div>
          </a>
        </Link>
        <div className="flex-none items-right">
          <Link href="/posts">
            <a>
              <div className="inline text-lg font-thin text-gray-500 pl-4">
                posts
              </div>
            </a>
          </Link>
          <Link href="/photos">
            <a>
              <div className="inline text-lg font-thin text-gray-500 pl-2">
                photos
              </div>
            </a>
          </Link>
          <Link href="/links">
            <a>
              <div className="inline text-lg font-thin text-gray-500 pl-2">
                links
              </div>
            </a>
          </Link>
        </div>
      </header>
      {children}
      <footer className="container mx-auto max-w-xl py-16 px-4">
        <About />
      </footer>
    </>
  )
}
