import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentProps {
  slug: string
  text: string
  meta: {}
  title?: string
  date?: string
  emoji?: string
}

export class Content {
  slug: string
  filename: string
  text: string
  meta: {}

  // we need the path to the file _and_ the slug of the content on the website

  constructor(filename: string, slug: string) {
    this.filename = filename
    this.slug = slug

    let rawText = fs.readFileSync(filename, 'utf8')

    let props = matter(rawText)
    this.meta = props.data
    this.text = props.content
  }

  get type(): string {
    if (this.meta['type']) {
      return this.meta['type']
    } else {
      return 'text'
    }
  }

  get title(): string {
    if (this.meta['title'] != undefined) {
      return this.meta['title']
    } else {
      return path.basename(this.filename, path.extname(this.filename))
    }
  }

  get emoji(): string {
    return this.meta['emoji']
  }

  get date(): string {
    return this.meta['date']
  }

  get props(): ContentProps {
    let props = {
      slug: this.slug,
      text: this.text,
      meta: this.meta,
    }

    if (this.title != undefined) {
      props['title'] = this.title
    }
    if (this.date != undefined) {
      props['date'] = this.date
    }
    if (this.emoji != undefined) {
      props['emoji'] = this.emoji
    }

    return props
  }
}
