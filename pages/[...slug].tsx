import { Site } from '../lib/site'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { ContentProps } from '../lib/content'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import PhotoArticle from '../components/photoArticle'
import LinkArticle from '../components/linkArticle'

function renderContent(props: ContentProps) {
  switch (props.type) {
    case 'link': {
      return LinkArticle({ content: props, home: false })
    }
    case 'photo': {
      return PhotoArticle({ content: props, home: false })
    }
    default: {
      return TextArticle({ content: props, home: false })
    }
  }
}

export default function ContentPage(props: ContentProps) {
  return (
    <Layout>
      <Head>
        <title>{props.title} - Duncan Davidson</title>
      </Head>
      {renderContent(props)}
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
  let props = await content.props()
  return {
    props: props,
  }
}
