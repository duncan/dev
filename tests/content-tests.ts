import { Content, ContentProps } from '../lib/content'

describe('Content', () => {
  let linkContent = new Content('test-content/link.md')
  let noMetaContent = new Content('test-content/no-meta.md')

  describe('filename', () => {
    test('filename is set', () => {
      expect(linkContent.filename).toBe('test-content/link.md')
    })
  })

  describe('metadata', () => {
    test('type from link.md', () => {
      expect(linkContent.type).toBe('link')
    })

    test('type from no-meta.md', () => {
      expect(noMetaContent.type).toBe('text')
    })

    test('title from link.md', () => {
      expect(linkContent.title).toBe('Link title')
    })

    test('title from no-meta.md', () => {
      expect(noMetaContent.title).toBe('no-meta')
    })

    test('emoji from link.md', () => {
      expect(linkContent.emoji).toContain('🤦‍♂️')
    })

    test('emoji from no-meta.md', () => {
      expect(noMetaContent.emoji).toBeNull
    })
  })

  describe('content', () => {
    test('raw text from link.md', () => {
      expect(linkContent.rawText).toContain('title: Link title')
    })

    test('raw text from no-meta.md', () => {
      expect(noMetaContent.rawText).toContain('This is some markdown')
    })

    test('html from link.md', () => {
      expect(linkContent.html).toContain('<p>Text <a href="https:')
    })

    test('html from no-meta.md', () => {
      expect(noMetaContent.html).toContain('<p>This is some markdown')
    })
  })

  describe('props', () => {
    test('props from link.md', () => {
      let props = linkContent.props
      expect(props.title).toBe('Link title')
      expect(props.html).toContain('<p>Text <a href="https:')
      expect(props.date).toEqual('2021-01-19')
      expect(props.emoji).toBe('🤦‍♂️')
      expect(props.meta['emoji']).toBe('🤦‍♂️')
      expect(props.meta['title']).toBe('Link title')
      expect(props.meta['type']).toBe('link')
    })

    test('props from no-meta.md', () => {
      let props = noMetaContent.props
      expect(props.meta).toEqual({})
      expect(props.html).toContain('<p>This is some markdown')
      expect(props.title).toBeUndefined
      expect(props.date).toBeUndefined
      expect(props.emoji).toBeUndefined
    })
  })
})
