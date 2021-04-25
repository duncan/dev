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
        return (
          <Link href={'/link/' + content.slug}>
            <a>
              <Summary content={content} home={true} />
            </a>
          </Link>
        )
      })}
    </Layout>
  )
}

export async function getStaticProps({}): Promise<
  GetStaticPropsResult<ContentCollectionProps>
> {
  let propsCollection = await Promise.all(
    Site.instance()
      .latestLinks(100)
      .map((o: Content) => {
        let props = o.props()
        return props
      })
  )

  return {
    props: { collection: propsCollection },
  }
}
