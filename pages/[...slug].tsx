import { Site } from '../lib/site'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { ContentProps } from '../lib/content'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import PhotoArticle from '../components/photoArticle'
import LinkArticle from '../components/linkArticle'

function renderMetadata(props: ContentProps) {
  let ogUrl = `https://duncan.dev/${props.slug}`
  let ogTitle = props.title
  var ogImage = 'https://duncan.dev/images/duncan.jpg'
  var twitterImage = 'https://duncan.dev/images/duncan.jpg'
  var twitterCard = 'summary'

  return (
    <Head>
      <title>{props.title} - Duncan Davidson</title>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={ogUrl}></meta>
      <meta property="og:title" content={ogTitle}></meta>
      <meta property="og:description" content={props.ogDescription}></meta>
      <meta property="og:image" content={ogImage}></meta>

      <meta property="og:site_name" content="duncan.dev"></meta>

      <meta property="twitter:card" content={twitterCard}></meta>
      <meta property="twitter:url" content={ogUrl}></meta>
      <meta property="twitter:title" content={ogTitle}></meta>
      <meta property="twitter:description" content={props.ogDescription}></meta>
      <meta property="twitter:image" content={twitterImage}></meta>
      <meta property="twitter:site" content="@duncan"></meta>
      <meta property="twitter:creator" content="@duncan"></meta>
    </Head>
  )
}

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
      {renderMetadata(props)}
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
