import { Site } from '../../lib/site'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { ContentProps } from '../../lib/content'
import Layout from '../../components/layout'
import TextArticle from '../../components/textArticle'

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

export default function ContentPage(props: ContentProps) {
  return (
    <Layout>
      {renderMetadata(props)}
      <TextArticle content={props} home={false} />
    </Layout>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  let paths = Object.keys(Site.instance().links).map((slug: string) => {
    return { params: { name: slug.split('/').pop() } }
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}): Promise<GetStaticPropsResult<ContentProps>> {
  let slug = 'link/' + params.name
  let content = Site.instance().links[slug]
  let props = await content.props()
  return {
    props: props,
  }
}
