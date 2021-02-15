import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import { displayDateTime } from './dateLine'

export default function Summary({
  content,
  home,
}: {
  content: ContentProps
  home?: boolean
}) {
  return (
    <article
      className="container mx-auto max-w-xl pb-4 px-4"
      key={content.slug}
    >
      <header>
        <Link href={content.slug}>
          <p className="cursor-pointer pb-2">
            <span className="font-bold">{content.title} </span>
            <span className="cursor-pointer">{content.emoji}</span> <br></br>
            <span className="font-light text-sm">
              {content.meta['description']}
            </span>
          </p>
        </Link>
      </header>
    </article>
  )
}
