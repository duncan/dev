import { Content } from '../lib/content'
import { Site } from '../lib/site'
import xml from 'xml'
import fs from 'fs'

//let contents = Site.instance().contents as { [slug: string]: Content }

let urls = [
  { _attr: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' } },
] as {}[]
let now = new Date().toISOString()
urls.push({ url: [{ loc: 'https://duncan.dev/' }, { lastmod: now }] })

function addContent(collection: { [slug: string]: Content }) {
  Object.values(collection).forEach((content: Content) => {
    let mtime = new Date(content.mtime).toISOString()
    urls.push({
      url: [{ loc: `https://duncan.dev/${content.slug}` }, { lastmod: mtime }],
    })
  })
}

addContent(Site.instance().pages)
addContent(Site.instance().posts)
addContent(Site.instance().photos)
addContent(Site.instance().links)

let data = xml(
  {
    urlset: urls,
  },
  { indent: true }
)

fs.writeFileSync('./out/sitemap.xml', data)
