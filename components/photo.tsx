import React from 'react'

const urlBase = 'https://res.cloudinary.com/duncandavidson/image/upload'

export default function CodeBlock({ photoId }: { photoId: string }) {
  console.log(photoId)

  let xlurl = `${urlBase}/w_1200/${photoId}`
  let lgurl = `${urlBase}/w_800/${photoId}`
  let mdurl = `${urlBase}/w_600/${photoId}`
  let smurl = `${urlBase}/w_400/${photoId}`
  let xsurl = `${urlBase}/w_300/${photoId}`

  return (
    <picture>
      <source media="(min-width: 600px)" srcset={`${xlurl} 2x, ${mdurl} 1x`} />
      <source media="(min-width: 400px)" srcset={`${lgurl} 2x, ${smurl} 1x`} />
      <source media="(min-width: 300px)" srcset={`${mdurl} 2x, ${xsurl} 1x`} />
      <img src={mdurl} className="rounded-xl" />
    </picture>
  )
}
