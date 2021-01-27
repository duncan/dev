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

  blogItems(n = 10): Array<Content> {
    // select all items that are of type link or post

    return lodash
      .chain(Object.values(this.contents))
      .filter((o) => {
        return o.type == 'link' || o.type == 'post'
      })
      .sortBy([
        (o) => {
          return o.date
        },
      ])
      .reverse()
      .slice(0, n)
      .value()

    // return most recent n
    //return []
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
