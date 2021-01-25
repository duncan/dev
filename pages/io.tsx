import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { GetStaticPropsResult } from 'next'
import { contentCollectionForStaticPrefix } from '../lib/site'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export default function Blog(props) {
  return (
    <Layout>
      <Head>
        <title>Duncan Davidson</title>
      </Head>
      <article className="container mx-auto max-w-xl py-16 px-4">
        <div className="text-5xl pb-2">🎙</div>
        <h1 className="text-4xl font-extrabold">Input/Output</h1>
        <p className="pt-2">
          Links, thoughts, and other random stuff that goes through my brain and
          catches my attention, sometimes several times a day.
        </p>
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
            <article className="pt-16">
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
      </article>
    </Layout>
  )
}

export async function getStaticProps({}): Promise<GetStaticPropsResult<{}>> {
  let content = contentCollectionForStaticPrefix(['io'])
  //console.log(content)

  let collection = contentCollectionForStaticPrefix(['io']).map((o) => {
    return o.props
  })
  console.log(collection)
  return {
    props: { collection: collection },
  }
}
