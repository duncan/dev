import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import Image from 'next/image'

export default function PhotoArticle({
  content,
  home,
}: {
  content: ContentProps
  home?: boolean
}) {
  let ratio = content.photoMeta['width'] / content.photoMeta['height']
  var width, height
  if (ratio == 1) {
    width = 600
    height = 600
  }

  /*
  ratio= width / height
*/

  //console.log(`W ${width}`)
  return (
    <article key={content.slug}>
      <div className="container mx-auto max-w-2xl px-4 pb-2 items-center">
        <Image
          src={content.photoHref}
          alt="{content.title}"
          width={width}
          height={height}
          className="rounded-xl"
          quality="60"
          layout="responsive"
        />
      </div>
      <div className="container mx-auto max-w-xl pt-4 pb-4 px-4">
        <header>
          <Link href={content.slug}>
            <h1 className="text-2xl font-bold cursor-pointer">
              {content.title}
            </h1>
          </Link>
          <Link href={content.slug}>
            <DateLine date={content.date}></DateLine>
          </Link>
        </header>
        <MarkdownProse text={content.text}></MarkdownProse>
      </div>
    </article>
  )
}
