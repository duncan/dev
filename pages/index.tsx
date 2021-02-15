import Head from 'next/head'
import Link from 'next/link'
import { Site } from '../lib/site'
import { Content, ContentCollectionProps } from '../lib/content'
import { GetStaticPropsResult } from 'next'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import PhotoArticle from '../components/photoArticle'
import LinkArticle from '../components/linkArticle'

export default function Home(props: ContentCollectionProps) {
  return (
    <>
      <Layout home>
        <Head>
          <title>Duncan Davidson</title>
          <meta name="title" content="Duncan Davidson"></meta>
          <meta
            name="description"
            content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
          ></meta>

          <meta property="og:locale" content="en_US"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://duncan.dev/"></meta>
          <meta property="og:title" content="Duncan Davidson"></meta>
          <meta
            property="og:description"
            content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
          ></meta>
          <meta
            property="og:image"
            content="https://duncan.dev/images/og-image.jpg"
          ></meta>
          <meta property="og:image:width" content="1200"></meta>
          <meta property="og:image:height" content="630"></meta>

          <meta property="twitter:card" content="summary"></meta>
          <meta property="twitter:url" content="https://duncan.dev/"></meta>
          <meta property="twitter:title" content="Duncan Davidson"></meta>
          <meta
            property="twitter:description"
            content="Software developer, photographer, and author. American immigrant living in Berlin, Germany."
          ></meta>
          <meta
            property="twitter:image"
            content="https://duncan.dev/images/duncan.jpg"
          ></meta>
          <meta property="twitter:site" content="@duncan"></meta>
          <meta property="twitter:creator" content="@duncan"></meta>
        </Head>
        {props.collection
          .map((content, index) => {
            switch (content.type) {
              case 'link': {
                return LinkArticle({ content: content, home: true })
              }
              case 'photo': {
                return PhotoArticle({ content: content, home: true })
              }
              default: {
                return TextArticle({ content: content, home: true })
              }
            }
          })
          .map((content, index) => {
            if (index == 0) {
              return <>{content}</>
            } else {
              return (
                <>
                  <div className="container mx-auto max-w-xl pt-8 pb-12 px-4 text-center text-2xl text-gray-300">
                    ◼︎
                  </div>
                  {content}
                </>
              )
            }
          })}
      </Layout>
    </>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let propsCollection = await Promise.all(
    Site.instance()
      .frontPageContent(10)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
