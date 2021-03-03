import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './codeBlock'
import FootnoteReference from './footnote-reference'
import FootnoteDefinition from './footnote-definition'
import footnotes from 'remark-footnotes'

export default function MarkdownProse({ text }: { text: string }) {
  return (
    <>
      <ReactMarkdown
        plugins={[footnotes]}
        source={text}
        className="prose pt-4"
        renderers={{
          code: CodeBlock,
          footnoteReference: FootnoteReference,
          footnoteDefinition: FootnoteDefinition,
        }}
      />
    </>
  )
}
