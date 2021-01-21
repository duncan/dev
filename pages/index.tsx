import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Duncan Davidson</title>
      </Head>
      <article className="container mx-auto prose max-w-xl px-4">
        <h1>Duncan Davidson</h1>
        <h2>
          Software developer, photographer, and author. Made in America, living
          in Berlin, Germany.
        </h2>
        <p>
          My{' '}
          <Link href="/cv">
            <a>curriculum vitae</a>
          </Link>{' '}
          tells the story of my professional career, so far. The short version
          is in my{' '}
          <Link href="/resume">
            <a>resume</a>
          </Link>
          . And, of course, there’s also my{' '}
          <a href="http://linkedin.com/in/duncandavidson ">LinkedIn profile</a>.
          I probably spend too much time on{' '}
          <a href="https://twitter.com/duncan">Twitter</a> and I try not to
          spend much time at all on{' '}
          <a href="http://facebook.com/duncandavidson">Facebook</a>.
        </p>
      </article>
    </Layout>
  )
}
