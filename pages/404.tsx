import Link from 'next/link'
import { ContentProps } from '../lib/content'
import Layout from '../components/layout'
import TextArticle from '../components/textArticle'

export default function FourOhFour() {
  let props = {
    emoji: '🤦‍♂️',
    title: '404 — Not Found',
    text: `I’m sorry, but the link you followed no longer exists on this site.
    I’ve either moved it and not left a redirect in place, or taken the content
    down as I no longer want it to appear here.\n\n[Check out the homepage](/) 
    for what’s currrently here.`,
    slug: '/',
  } as ContentProps
  return (
    <Layout>
      <TextArticle content={props} home />
    </Layout>
  )
}
