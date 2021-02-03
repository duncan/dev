import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function MarkdownProse({ text }: { text: string }) {
  return (
    <>
      <ReactMarkdown className="prose pt-4">{text}</ReactMarkdown>
    </>
  )
}
