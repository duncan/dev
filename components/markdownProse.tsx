import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './codeBlock'

export default function MarkdownProse({ text }: { text: string }) {
  return (
    <>
      <ReactMarkdown
        source={text}
        className="prose pt-4"
        renderers={{ code: CodeBlock }}
      />
    </>
  )
}
