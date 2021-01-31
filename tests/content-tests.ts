import path from 'path'
import { Content, ContentProps } from '../lib/content'

describe('Content', () => {
  let linkContent = new Content('test-content/link.md', '/link')
  let noMetaContent = new Content('test-content/no-meta.md', '/no-meta')
  let photoContent = new Content(
    'public/ellada/santorini/evening-light.md',
    '/ellada/santorini/evening-light'
  )

  describe('filename', () => {
    test('filename is set', () => {
      let expected = path.resolve('test-content/link.md')
      expect(linkContent.filename).toBe(expected)
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

  describe('photo', () => {
    test('resolves href for photo', () => {
      expect(photoContent.photoHref).toBe('/ellada/santorini/evening-light.jpg')
    })
  })

  describe('props', () => {
    test('props from link.md', async () => {
      let props = await linkContent.props()
      expect(props.slug).toBe('/link')
      expect(props.title).toBe('Link title')
      expect(props.text).toContain('Text [Linked text][link]')
      //expect(props.date).toEqual('2021-01-19')
      expect(props.emoji).toBe('🤦‍♂️')
      expect(props.meta['emoji']).toBe('🤦‍♂️')
      expect(props.meta['title']).toBe('Link title')
      expect(props.meta['type']).toBe('link')
    })

    test('props from no-meta.md', async () => {
      let props = await noMetaContent.props()
      expect(props.meta).toEqual({})
      expect(props.slug).toBe('/no-meta')
      expect(props.text).toContain('This is some markdown')
      expect(props.title).toBeUndefined
      expect(props.date).toBeUndefined
      expect(props.emoji).toBeUndefined
    })
  })
})
