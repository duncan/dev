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

export interface ContentCollectionProps {
  collection: Array<ContentProps>
}

export class Content {
  mtime: Date
  slug: string
  filename: string
  text: string
  meta: {}

  constructor(filename: string, slug: string) {
    this.filename = path.resolve(filename)
    this.slug = slug
    this.load()
  }

  load() {
    let thisMTime = fs.statSync(this.filename).mtime
    if (
      this.mtime != undefined &&
      this.mtime.getTime() == thisMTime.getTime()
    ) {
      return
    }
    this.mtime = thisMTime
    let rawText = fs.readFileSync(this.filename, 'utf8')
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
    this.load()
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
