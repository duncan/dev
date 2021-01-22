import { BlogProps, blogStaticPaths, titleForIssue } from '../../lib/blog'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { Content, ContentProps } from '../../lib/content'
import Layout from '../../components/layout'

export default function Blog(props: BlogProps) {
  return (
    <Layout>
      <Head>
        <title>
          Input/Output {props.issue}: {props.title}
        </title>
        <link rel="shortcut icon" href="/favicon-32.ico" />
      </Head>

      <header className="container prose mx-auto max-w-xl pt-16 pb-8 px-4">
        <h1>Input/Output</h1>
        <p>
          Issue: {props.issue} — {props.title}
        </p>

        <p>
          Quick thoughts and pointers from Duncan for the week of January
          18th-24th, 2021
        </p>
      </header>

      {/* <section
        className="container prose mx-auto max-w-xl px-4"
        dangerouslySetInnerHTML={{ __html: props.html }}
      /> */}

      <footer></footer>
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = blogStaticPaths().map((value: Array<string>) => {
    return { params: { issue: value[0] } }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<BlogProps>> {
  //titleForIssue(props.issue)
  return {
    props: {
      issue: params.issue,
      title: titleForIssue(params.issue),
    },
  }
}
