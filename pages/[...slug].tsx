import { pageStaticPaths, contentFromStaticPath } from '../lib/pages'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../lib/content'
import Layout from '../components/layout'

export default function ContentPage(props: ContentProps) {
  return (
    <Layout>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon-32.ico" />
      </Head>

      <article
        className="container prose mx-auto max-w-xl py-16 px-4"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />

      <footer></footer>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = pageStaticPaths().map((value: Array<string>) => {
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
  let content = contentFromStaticPath(params.slug as Array<string>)
  return {
    props: content.props,
  }
}