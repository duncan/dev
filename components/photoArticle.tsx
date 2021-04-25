import React, { Component } from 'react'
import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import { Image } from 'cloudinary-react'

export default function PhotoArticle({
  content,
  home,
}: {
  content: ContentProps
  home?: boolean
}) {
  return (
    <article key={content.slug}>
      <div className="container mx-auto max-w-2xl px-4 pb-2 items-center">
        <Image
          cloudName="duncandavidson"
          publicId={content.meta['photoId']}
          width="1200"
          crop="fill"
          className="rounded-xl"
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
