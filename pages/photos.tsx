import Link from 'next/link'
import { Content, ContentCollectionProps, ContentProps } from '../lib/content'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import { GetStaticPropsResult } from 'next'
import { Site } from '../lib/site'
import PhotoArticle from '../components/photoArticle'

export default function PhotosPage(props: ContentCollectionProps) {
  return (
    <Layout>
      {props.collection
        .map((content, index) => {
          return PhotoArticle({ content: content, home: true })
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
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let propsCollection = await Promise.all(
    Site.instance()
      .contentOfType('photo')
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
