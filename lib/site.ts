import glob from 'glob'
import path from 'path'
import { Content, ContentProps } from './content'
import * as lodash from 'lodash'

export class Site {
  private _dir: string

  contents: { [slug: string]: Content } = {}

  get dir() {
    return this._dir
  }

  private constructor(dir = 'public') {
    this._dir = path.resolve(dir)
    this.load()
  }

  load() {
    glob.sync(`${this._dir}/**/*.md`).forEach((filename: string) => {
      let slug = filename.replace(/\.md$/, '').slice(this.dir.length + 1)
      if (!this.contents[slug]) {
        this.contents[slug] = new Content(filename, slug)
      } else {
        // reload content
      }
    })
  }

  contentPaths(): Array<string> {
    return Object.keys(this.contents).map((slug: string) => {
      return slug + '.md'
    })
  }

  staticPaths(): Array<Array<string>> {
    // static paths are an Array<string> in Next.js
    return Object.keys(this.contents).map((slug: string) => {
      return slug.split('/')
    })
  }

  contentForStaticPath(staticPath: Array<string>): Content {
    let slug = staticPath.join('/')
    // need to address eventual possible situation of being asked
    // for a slug that has been made after content was loaded
    return this.contents[slug]
  }

  latestContent(n = 10): Array<Content> {
    return lodash
      .chain(Object.values(this.contents))
      .filter((o) => {
        return o.type == 'link' || o.type == 'post' || o.type == 'photo'
      })
      .sortBy([
        (o) => {
          return o.date
        },
      ])
      .reverse()
      .slice(0, n)
      .value()
  }

  frontPageContent(n = 10): Array<Content> {
    var items = this.latestContent(n)

    // float first post to top of page
    let firstPostIndex = lodash.findIndex(items, (o: Content) => {
      return o.type === 'post'
    })
    if (firstPostIndex) {
      let firstPostItem = items.splice(firstPostIndex, 1)
      items = lodash.concat(firstPostItem, items)
    }

    // float first photo to top of page (even before first post)
    let firstPhotoIndex = lodash.findIndex(items, (o: Content) => {
      return o.type === 'photo'
    })
    if (firstPhotoIndex) {
      let firstPhotoItem = items.splice(firstPhotoIndex, 1)
      items = lodash.concat(firstPhotoItem, items)
    }

    return items
  }

  private static sites: { [dir: string]: Site } = {}

  static instance(dir = 'public'): Site {
    var site = Site.sites[dir]
    if (!site) {
      site = new Site(dir)
      Site.sites[dir] = site
    }
    return site
  }
}
