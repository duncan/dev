import { staticPaths, contentForStaticPath } from '../lib/site'
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

  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon-32.ico" />
      </Head>

      <div className="container prose mx-auto max-w-xl py-16 px-4">
        <h1>{props.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <footer></footer>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = staticPaths().map((value: Array<string>) => {
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
  let content = contentForStaticPath(params.slug as Array<string>)
  return {
    props: content.props,
  }
}
