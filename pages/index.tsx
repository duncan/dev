import Head from 'next/head'
import Link from 'next/link'
import { Site } from '../lib/site'
import { Content, ContentProps, ContentCollectionProps } from '../lib/content'
import { GetStaticPropsResult } from 'next'
import Layout from '../components/layout'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

interface FrontPageProps {
  photos: Array<ContentProps>
  links: Array<ContentProps>
  posts: Array<ContentProps>
}

export default function Home(props: FrontPageProps) {
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
            content="https://duncan.dev/images/duncan.jpg"
          ></meta>

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

        <article key={props.photos[0].slug}>
          <div className="container mx-auto max-w-2xl px-4 pb-12 items-center cursor-pointer">
            <Link href={props.photos[0].slug}>
              <img
                src={props.photos[0].photoHref}
                alt={props.photos[0].title}
                width="100%"
                className="rounded-xl"
              />
            </Link>
          </div>
        </article>

        <div className="container mx-auto max-w-xl pb-4 flex flex-wrap mb-4">
          <div className="w-full md:w-2/3 pr-4 pl-4 md:pr-3">
            <h1 className="pb-4 font-thin">Posts:</h1>
            {props.posts.map((content, index) => {
              // return Summary({ content: content, home: true })
              return (
                <Link href={content.slug}>
                  <div className="cursor-pointer pb-8 md:pb-12 text-lg">
                    <span className="font-bold text-xl">{content.title} </span>
                    <span className="cursor-pointer text-xl  pl-1">
                      {content.emoji}
                    </span>{' '}
                    <div className="prose">
                      <p>{content.meta['description']}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="w-full md:w-1/3 pr-4 pl-4 md:pl-3">
            <h1 className="pb-4 font-thin">Links:</h1>
            {props.links.map((content, index) => {
              return (
                <Link href={content.slug}>
                  <div className="cursor-pointer pb-8">
                    {/* <span className="cursor-pointer pr-1">{content.emoji}</span>{' '} */}
                    <span className="font-bold">{content.title} </span>
                    <div className="prose text-sm pt-1">
                      <p>{content.meta['description']}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<FrontPageProps>
> {
  let postsCollection = await Promise.all(
    Site.instance()
      .contentOfType('post')
      .slice(0, 7)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  let linksCollection = await Promise.all(
    Site.instance()
      .contentOfType('link')
      .slice(0, 5)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  let photoCollection = await Promise.all(
    Site.instance()
      .contentOfType('photo')
      .slice(0, 4)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: {
      photos: photoCollection,
      links: linksCollection,
      posts: postsCollection,
    },
  }
}
