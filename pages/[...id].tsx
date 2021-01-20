import glob from 'glob'

import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../lib/content'

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
  return {
    paths: [
      {
        params: {
          id: ['cv'],
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ContentProps>
> {
  let content = new Content('pages/cv.md')
  return {
    props: content.props,
  }
}
