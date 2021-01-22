import { blogStaticPaths } from '../../../lib/blog'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../../../lib/content'
import Layout from '../../../components/layout'

export default function Blog(props: ContentProps) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="shortcut icon" href="/favicon-32.ico" />
      </Head>

      <header className="container prose mx-auto max-w-xl pt-16 pb-8 px-4">
        <h1>Input/Output</h1>
        <p>
          Quick thoughts and pointers from Duncan for the week of January
          18th-24th, 2021
        </p>
      </header>

      <section
        className="container prose mx-auto max-w-xl px-4"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />

      <footer></footer>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = blogStaticPaths().map((value: Array<string>) => {
    return { params: { year: value[0], week: value[1] } }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<ContentProps>> {
  //let content = contentFromStaticPath(params.id as Array<string>)
  let content = new Content('blog/21/4/shot-on-iphone-12.md')
  return {
    props: content.props,
  }
}
