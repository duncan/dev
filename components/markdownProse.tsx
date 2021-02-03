import React from 'react'
import ReactMarkdown from 'react-markdown'
import { render } from 'react-dom'

import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

function markdownToHTML(text: string): string {
  return unified().use(markdown).use(html).processSync(text).contents.toString()
}

export default function MarkdownProse({ text }: { text: string }) {
  return (
    <>
      <ReactMarkdown className="prose pt-4">{text}</ReactMarkdown>
    </>
  )
}
