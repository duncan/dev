import { Site } from '../lib/site'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../lib/content'
import Layout from '../components/layout'

import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export default function ContentPage(props: ContentProps) {
  let content = unified()
    .use(markdown)
    .use(html)
    .processSync(props.text)
    .contents.toString()

  var datestring = ''

  if (props.date) {
    let date = new Date(props.date)
    datestring =
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
  }
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
      </Head>

      <header className="container mx-auto max-w-xl pt-12 px-4">
        <div className="text-5xl pb-4">{props.emoji}</div>
        <h1 className="text-4xl font-extrabold">{props.title}</h1>
        <div className="text-xs pt-2">{datestring}</div>
      </header>

      <div className="container prose mx-auto max-w-xl px-4">
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = Site.instance()
    .staticPaths()
    .map((value: Array<string>) => {
      return { params: { slug: value } }
    })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<ContentProps>> {
  let content = Site.instance().contentForStaticPath(
    params.slug as Array<string>
  )
  return {
    props: content.props,
  }
}
