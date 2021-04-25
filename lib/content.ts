import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
//import sharp from 'sharp'

export interface ContentProps {
  slug: string
  text: string
  ogDescription?: string
  type: string
  meta: {}
  title?: string
  date?: string
  emoji?: string
  photoId?: string
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
  photoId: string

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
    if (this.meta['emoji']) {
      return this.meta['emoji']
    } else if (this.type == 'photo') {
      return '📷'
    } else {
      return null
    }
  }

  get date(): string {
    return this.meta['date']
  }

  async props(): Promise<ContentProps> {
    this.load()
    let props = {
      slug: this.slug,
      text: this.text,
      meta: this.meta,
      type: this.type,
    }

    if (this.title) {
      props['title'] = this.title
    }
    if (this.date) {
      props['date'] = this.date
    }
    if (this.emoji) {
      props['emoji'] = this.emoji
    }
    if (this.photoId) {
      props['photoId'] = this.photoId
    }

    props['ogDescription'] = this.title
    if (this.meta['description']) {
      props['ogDescription'] = this.meta['description']
    }
    console.log(props)
    return props
  }
}
