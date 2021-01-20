import {
  pageContentPaths,
  pageStaticPaths,
  contentFromStaticPath,
} from '../lib/pages'

describe('Pages', () => {
  describe('paths', () => {
    test('test content paths', () => {
      let paths = pageContentPaths('test-content')
      expect(paths.length).toBeGreaterThan(0)
      expect(paths).toContain('link.md')
      expect(paths).toContain('dir/post.md')
    })

    test('test static paths', () => {
      let paths = pageContentPaths('test-content')
      let ids = pageStaticPaths('test-content')
      expect(ids.length).toEqual(paths.length)
      expect(ids).toContainEqual(['link'])
      expect(ids).toContainEqual(['dir', 'post'])
    })
  })

  describe('content', () => {
    test('get content with static path', () => {
      let content = contentFromStaticPath(['dir', 'post'], 'test-content')
      expect(content.filename).toEqual('test-content/dir/post.md')
      expect(content.title).toEqual('Some post')
    })
  })
})
