import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'

export default function TextArticle({
  content,
  home,
}: {
  content: ContentProps
  home?: boolean
}) {
  return (
    <>
      <article className="container mx-auto max-w-xl pb-8 pt-16 px-4">
        <header>
          <Link href={content.slug}>
            <div className="text-5xl pb-2 cursor-pointer">{content.emoji}</div>
          </Link>

          <Link href={content.slug}>
            <h1 className="text-4xl font-bold cursor-pointer">
              {content.title}
            </h1>
          </Link>
          <Link href={content.slug}>
            <DateLine date={content.date}></DateLine>
          </Link>
        </header>
        <MarkdownProse text={content.text}></MarkdownProse>
      </article>
    </>
  )
}
