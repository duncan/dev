import { Content } from '../lib/content'
import { Site } from '../lib/site'
import rss from 'rss'
import fs from 'fs'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

export function generate() {
  let site = Site.instance()

  let feed = new rss({
    title: 'Duncan Davidson',
    site_url: 'https://duncan.dev',
    feed_url: 'https://duncan.dev/feed.xml',
  })

  let content: Content[] = []
  content = content.concat(site.latestPosts(5))
  content = content.concat(site.latestPhotos(5))
  content = content.concat(site.latestLinks(5))

  content = content.filter((o) => Date.parse(o.date) > Date.parse('2021-04-25'))

  console.log(content)

  content.forEach((item: Content) => {
    var title
    if (item.emoji) {
      title = `${item.emoji} ${item.title}`
    } else {
      title = item.title
    }
    let content = unified()
      .use(markdown)
      .use(html)
      .processSync(item.text)
      .contents.toString()

    if (item.type != 'photo') {
      feed.item({
        title: title,
        guid: item.slug,
        url: `https://duncan.dev/${item.slug}`,
        date: item.date,
        description: content,
        author: `Duncan Davidson`,
      })
    }
  })

  let data = feed.xml({ indent: true })
  fs.writeFileSync('out/feed.xml', data)
}

generate()
