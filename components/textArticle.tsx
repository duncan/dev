import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import { ReactElement } from 'react'

function emojiDiv(content: ContentProps, linked = false): ReactElement {
  let classes = ['text-5xl', 'pb-2']
  if (linked) {
    classes.push('cursor-pointer')
  }
  return <div className={classes.join(' ')}>{content.emoji}</div>
}

function titleDiv(content: ContentProps, linked = false): ReactElement {
  let classes = ['text-4xl', 'font-bold']
  if (linked) {
    classes.push('cursor-pointer')
  }
  return <h1 className={classes.join(' ')}>{content.title}</h1>
}

function dateLineDiv(content: ContentProps, linked = false): ReactElement {
  return content.date ? (
    <DateLine date={content.date} linked={linked}></DateLine>
  ) : (
    <></>
  )
}

export default function TextArticle({
  content,
  home,
}: {
  content: ContentProps
  home?: boolean
}) {
  return (
    <article
      className="container mx-auto max-w-xl pb-8 pt-16 px-4"
      key={content.slug}
    >
      <header>
        {home ? (
          <>
            <Link href={content.slug}>{emojiDiv(content, true)}</Link>
            <Link href={content.slug}>{titleDiv(content, true)}</Link>
            <Link href={content.slug}>{dateLineDiv(content, true)}</Link>
          </>
        ) : (
          <>
            {emojiDiv(content)}
            {titleDiv(content)}
            {dateLineDiv(content)}
          </>
        )}
      </header>
      <MarkdownProse text={content.text}></MarkdownProse>
    </article>
  )
}
