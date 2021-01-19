import fs from 'fs'
import path from 'path'
import unified from 'unified'
import markdown from 'remark-parse'
import frontmatter from 'remark-frontmatter'
import extract from 'remark-extract-frontmatter'
import html from 'remark-html'
import yaml from 'yaml'

export interface ContentProps {
  title: string;
  date: string;
  html: string;
  meta: {}
}

export class Content {
  source: string
  slug: string
  text: string
  html: string
  meta: {}

  constructor(source: string, slug?: string) {
    this.source = source

    if (slug) {
      this.slug = slug
    } else {
      this.slug = path.dirname(source) + "/" + path.basename(source, '.md')
    }

    this.text = fs.readFileSync(source, 'utf8')

    let doc = unified()
      .use(markdown)
      .use(frontmatter)
      .use(extract, {yaml: yaml.parse})
      .use(html)
      .processSync(this.text)
    
    this.html = String(doc.contents)
    this.meta = doc.data
  }

  get type() : string {
    return this.meta['type']
  }

  get title() : string {
    return this.meta['title']
  }

  get emoji() : string {
    return this.meta['emoji']
  }
}