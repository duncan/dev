import Link from 'next/link'
import { Content, ContentCollectionProps, ContentProps } from '../lib/content'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'
import { GetStaticPropsResult } from 'next'
import { Site } from '../lib/site'
import Summary from '../components/summary'

export default function PostPage(props: ContentCollectionProps) {
  return (
    <Layout>
      {props.collection.map((content, index) => {
        return Summary({ content: content, home: true })
      })}
    </Layout>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let propsCollection = await Promise.all(
    Site.instance()
      .latestPosts(100)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
