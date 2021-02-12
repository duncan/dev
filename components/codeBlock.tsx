import React from 'react'
import Lowlight from 'react-lowlight'
import plaintext from 'highlight.js/lib/languages/plaintext'
import ruby from 'highlight.js/lib/languages/ruby'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import shell from 'highlight.js/lib/languages/shell'
import 'highlight.js/styles/gml.css'

Lowlight.registerLanguage('plaintext', plaintext)
Lowlight.registerLanguage('ruby', ruby)
Lowlight.registerLanguage('js', javascript)
Lowlight.registerLanguage('json', json)
Lowlight.registerLanguage('sh', shell)

export default function CodeBlock({
  value,
  language,
}: {
  value: string
  language?: string
}) {
  if (!language) {
    language = 'plaintext'
  }
  return <Lowlight language={language} value={value} />
}
