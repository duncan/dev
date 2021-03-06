import React from 'react'

const urlBase = 'https://res.cloudinary.com/duncandavidson/image/upload'

export default function CodeBlock({ photoId }: { photoId: string }) {
  let xlurl = `${urlBase}/w_1200/${photoId}`
  let lgurl = `${urlBase}/w_800/${photoId}`
  let mdurl = `${urlBase}/w_600/${photoId}`
  let smurl = `${urlBase}/w_400/${photoId}`
  let xsurl = `${urlBase}/w_300/${photoId}`

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={`${xlurl} 2x, ${mdurl} 1x`} />
      <source media="(min-width: 400px)" srcSet={`${lgurl} 2x, ${smurl} 1x`} />
      <source media="(min-width: 300px)" srcSet={`${mdurl} 2x, ${xsurl} 1x`} />
      <img src={mdurl} className="rounded-xl" width="100%" />
    </picture>
  )
}
