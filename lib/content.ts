import fs from 'fs'
import path from 'path'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import extract from 'remark-extract-frontmatter'
import html from 'remark-html'
import yaml from 'yaml'

export interface ContentProps {
  html: string
  meta: {}
  title?: string
  date?: string
  emoji?: string
}

export class Content {
  filename: string
  rawText: string
  html: string
  meta: {}

  constructor(filename: string) {
    this.filename = filename

    this.rawText = fs.readFileSync(filename, 'utf8')

    let doc = unified()
      .use(frontmatter)
      .use(extract, { yaml: yaml.parse })
      .use(markdown)
      .use(html)
      .processSync(this.rawText)

    this.html = String(doc.contents)
    this.meta = doc.data
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
      html: this.html,
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
