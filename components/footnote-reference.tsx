import React from 'react'

export default function FootnoteReference({
  label,
  identifier,
}: {
  label: string
  identifier: string
}) {
  let id = `fnref-${identifier}`
  let href = `#fndef-${identifier}`
  return (
    <sup className="fn" id={id}>
      <a className="mr-1" href={href}>
        {label}
      </a>
    </sup>
  )
}
