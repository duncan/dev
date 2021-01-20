import { pageStaticPaths, contentFromStaticPath } from '../lib/pages'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../lib/content'
import { Site } from '../lib/site'

export default function ContentPage(props: ContentProps) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="shortcut icon" href="/favicon-32.ico" />
      </Head>

      <div
        className="container mx-auto px-4 py-4 prose max-w-lg"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />

      <footer>footer</footer>
    </div>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = pageStaticPaths().map((value: Array<string>) => {
    return { params: { id: value } }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<ContentProps>> {
  let content = contentFromStaticPath(params.id as Array<string>)
  return {
    props: content.props,
  }
}
