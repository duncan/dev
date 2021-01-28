import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Site } from '../lib/site'
import { ContentCollectionProps } from '../lib/content'
import { GetStaticPropsResult } from 'next'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export default function Home(props: ContentCollectionProps) {
  return (
    <Layout home>
      <Head>
        <title>Duncan Davidson</title>
      </Head>

      <header className="container mx-auto max-w-xl pt-12 px-4">
        <div className="text-5xl pb-4"></div>
        <h1 className="text-4xl font-extrabold">Duncan Davidson</h1>
        {/* <div className="text-xs">{datestring}</div> */}
      </header>

      <section className="container prose mx-auto max-w-xl pt-6 px-4">
        <h2>
          Software developer, photographer, and author. American immigrant
          living in Berlin, Germany.
        </h2>
      </section>
      {/* <div className="container mx-auto max-w-xl pt-16 px-4">
        <h1 className="text-4xl font-extrabold">Recent i/o</h1>
      </div> */}

      {props.collection.map((content) => {
        let rendered = unified()
          .use(markdown)
          .use(html)
          .processSync(content.text)
          .contents.toString()
        let date = new Date(content.date)
        let datestring =
          date.toLocaleString('en-gb', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) +
          ' • ' +
          date.toLocaleTimeString('en-gb', {
            hour: '2-digit',
            minute: '2-digit',
          })
        return (
          <article className="container mx-auto max-w-xl pt-16 px-4">
            <header>
              <Link href={content.slug}>
                <div className="text-5xl pb-2 cursor-pointer">
                  {content.emoji}
                </div>
              </Link>

              <Link href={content.slug}>
                <h1 className="text-3xl font-bold cursor-pointer">
                  {content.title}
                </h1>
              </Link>
              <Link href={content.slug}>
                <div className="text-xs cursor-pointer">{datestring}</div>
              </Link>
            </header>
            <div
              className="prose pt-4"
              dangerouslySetInnerHTML={{ __html: rendered }}
            />
          </article>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let collection = Site.instance()
    .blogItems(5)
    .map((o) => {
      return o.props
    })
  return {
    props: { collection: collection },
  }
}
