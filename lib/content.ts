import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentProps {
  text: string
  meta: {}
  title?: string
  date?: string
  emoji?: string
}

export class Content {
  filename: string
  rawText: string
  text: string
  meta: {}

  constructor(filename: string) {
    this.filename = filename

    this.rawText = fs.readFileSync(filename, 'utf8')

    let props = matter(this.rawText)
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
