import React, { Component } from 'react'
import Link from 'next/link'
import { ContentProps } from '../lib/content'
import MarkdownProse from './markdownProse'
import DateLine from './dateLine'
import Photo from './photo'

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
        <Photo photoId={content.meta['photoId']} />
      </div>
      <div className="container mx-auto max-w-xl pt-4 pb-4 px-4">
        <header>
          <h1 className="text-2xl font-bold">{content.title}</h1>
          <DateLine date={content.date}></DateLine>
        </header>
        <MarkdownProse text={content.text}></MarkdownProse>
      </div>
    </article>
  )
}
