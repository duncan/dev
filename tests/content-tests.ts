import { Content, ContentProps } from '../lib/content'

describe('Content', () => {
  let linkContent = new Content('test-content/link.md')
  let noMetaContent = new Content('test-content/no-meta.md')

  test('source path from link.md', () => {
    expect(linkContent.source).toBe('test-content/link.md')
  })

  test('slug from link.md', () => {
    expect(linkContent.slug).toBe('test-content/link')
  })

  test('type from link.md', () => {
    expect(linkContent.type).toBe('link')
  })

  test('raw text from link.md', () => {
    expect(linkContent.text).toContain('title: Link title')
  })

  test('raw text from no-meta.md', () => {
    expect(noMetaContent.text).toContain('This is some markdown')
  })

  test('title from link.md', () => {
    expect(linkContent.title).toBe('Link title')
  })

  test('title from no-meta.md', () => {
    expect(noMetaContent.title).toBeNull
  })

  test('html from link.md', () => {
    expect(linkContent.html).toContain('<p>Text <a href="https:')
  })

  test('html from no-meta.md', () => {
    expect(noMetaContent.html).toContain('<p>This is some markdown')
  })

  test('emoji from link.md', () => {
    expect(linkContent.emoji).toContain('🤦‍♂️')
  })

  test('emoji from no-meta.md', () => {
    expect(noMetaContent.emoji).toBeNull
  })
})
