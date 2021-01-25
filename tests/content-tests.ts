import { Content, ContentProps } from '../lib/content'

describe('Content', () => {
  let linkContent = new Content('test-content/link.md', '/link')
  let noMetaContent = new Content('test-content/no-meta.md', '/no-meta')

  describe('filename', () => {
    test('filename is set', () => {
      expect(linkContent.filename).toBe('test-content/link.md')
    })
  })

  describe('slug', () => {
    test('slug is set', () => {
      expect(linkContent.slug).toBe('/link')
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

  describe('text', () => {
    test('text from link.md', () => {
      expect(linkContent.text).toContain('Text [Linked text][link]')
    })

    test('text from no-meta.md', () => {
      expect(noMetaContent.text).toContain('This is some markdown')
    })
  })

  describe('props', () => {
    test('props from link.md', () => {
      let props = linkContent.props
      expect(props.slug).toBe('/link')
      expect(props.title).toBe('Link title')
      expect(props.text).toContain('Text [Linked text][link]')
      //expect(props.date).toEqual('2021-01-19')
      expect(props.emoji).toBe('🤦‍♂️')
      expect(props.meta['emoji']).toBe('🤦‍♂️')
      expect(props.meta['title']).toBe('Link title')
      expect(props.meta['type']).toBe('link')
    })

    test('props from no-meta.md', () => {
      let props = noMetaContent.props
      expect(props.meta).toEqual({})
      expect(props.slug).toBe('/no-meta')
      expect(props.text).toContain('This is some markdown')
      expect(props.title).toBeUndefined
      expect(props.date).toBeUndefined
      expect(props.emoji).toBeUndefined
    })
  })
})
