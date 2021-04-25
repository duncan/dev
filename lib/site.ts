import glob from 'glob'
import path from 'path'
import { Content, ContentProps } from './content'
import * as lodash from 'lodash'

export class Site {
  private _dir: string

  public links: { [slug: string]: Content } = {}
  public posts: { [slug: string]: Content } = {}
  public photos: { [slug: string]: Content } = {}
  public pages: { [slug: string]: Content } = {}

  get dir() {
    return this._dir
  }

  private constructor(dir = 'public') {
    this._dir = path.resolve(dir)
    this.load()
  }

  loadInto(
    dirname: String,
    collection: { [slug: string]: Content },
    prefix = ''
  ) {
    glob.sync(`${dirname}/**/*.md`).forEach((filename: string) => {
      let slug =
        prefix + filename.replace(/\.md$/, '').slice(dirname.length + 1)
      if (!collection[slug]) {
        collection[slug] = new Content(filename, slug)
      } else {
        // reload content
      }
    })
  }

  load() {
    this.loadInto(this._dir, this.pages)
    this.loadInto('content/links', this.links, 'link/')
    this.loadInto('content/posts', this.posts, 'post/')
    this.loadInto('content/photos', this.photos, 'photo/')
  }

  latest(collection: { [slug: string]: Content }, n = 10): Array<Content> {
    return lodash
      .chain(Object.values(collection))
      .sortBy([
        (o) => {
          return o.date
        },
      ])
      .reverse()
      .slice(0, n)
      .value()
  }

  latestPhotos(n = 10): Array<Content> {
    return this.latest(this.photos, n)
  }

  latestPosts(n = 10): Array<Content> {
    return this.latest(this.posts, n)
  }

  latestLinks(n = 10): Array<Content> {
    return this.latest(this.links, n)
  }

  latestContent(n = 10): Array<Content> {
    return lodash
      .chain(Object.values(this.pages))
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
