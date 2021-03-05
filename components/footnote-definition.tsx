import React from 'react'

export default function FootnoteDefinition({
  identifier,
  label,
  children,
}: {
  identifier: string
  label: string
  children
}) {
  let href = `#fnref-${identifier}`
  let id = `fndef-${identifier}`
  return (
    <div id={id} className="footnote flex">
      <div className="w-5">
        <p className="label w-5">
          <a href={href}>{label}</a>
        </p>
      </div>
      <div className="text w-auto pr-8">{children}</div>
    </div>
  )
}
