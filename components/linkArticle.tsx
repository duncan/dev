import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import { getStaticProps } from '../pages/[...slug]'

export default function LinkArticle({
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
          <h1 className="text-2xl font-bold cursor-pointer">
            {content.title}{' '}
            <span className="text-2xl cursor-pointer">{content.emoji}</span>{' '}
          </h1>
        </Link>
        <Link href={content.slug}>
          <DateLine date={content.date}></DateLine>
        </Link>
      </header>
      <MarkdownProse text={content.text}></MarkdownProse>
    </article>
  )
}
