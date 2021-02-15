import Link from 'next/link'
import { Content, ContentCollectionProps, ContentProps } from '../lib/content'
import Layout from '../components/layout'
import Summary from '../components/summary'
import { GetStaticPropsResult } from 'next'
import { Site } from '../lib/site'

export default function LinksPage(props: ContentCollectionProps) {
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
      .contentOfType('link')
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
