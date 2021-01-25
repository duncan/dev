import {
  contentPaths,
  staticPaths,
  contentForStaticPath,
  contentCollectionForStaticPrefix,
} from '../lib/site'

describe('Site', () => {
  describe('paths', () => {
    test('test content paths', () => {
      let paths = contentPaths('test-content')
      expect(paths.length).toBeGreaterThan(0)
      expect(paths).toContain('link.md')
      expect(paths).toContain('dir/post.md')
    })

    test('test static paths', () => {
      let paths = contentPaths('test-content')
      let ids = staticPaths('test-content')
      expect(ids.length).toEqual(paths.length)
      expect(ids).toContainEqual(['link'])
      expect(ids).toContainEqual(['dir', 'post'])
    })
  })

  describe('content', () => {
    test('get content for static path', () => {
      let content = contentForStaticPath(['dir', 'post'], 'test-content')
      expect(content.filename).toEqual('test-content/dir/post.md')
      expect(content.title).toEqual('Some post')
    })
    test('content collection for all content', () => {
      let collection = contentCollectionForStaticPrefix([], 'test-content')
      expect(collection.length).toBe(9)
    })
    test('content collection for subdir content', () => {
      let collection = contentCollectionForStaticPrefix(['dir'], 'test-content')
      expect(collection.length).toBe(1)
    })
  })
})
