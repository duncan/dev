import { Site } from '../lib/site'

describe('Site', () => {
  describe('singleton', () => {
    test('same instance returned for same directory', () => {
      expect(Site.instance('test-content')).toBe(Site.instance('test-content'))
    })
    test('different instances returned for different directories', () => {
      expect(Site.instance('test-content/dir')).not.toBe(
        Site.instance('test-content')
      )
    })
    test('instance has dir property', () => {
      let site = Site.instance('test-content')
      expect(site.dir).toBe('test-content')
    })
  })

  describe('paths', () => {
    test('content paths', () => {
      let paths = Site.instance('test-content').contentPaths()
      expect(paths.length).toBeGreaterThan(0)
      expect(paths).toContain('link.md')
      expect(paths).toContain('dir/post.md')
    })

    test('static paths', () => {
      let site = Site.instance('test-content')
      let paths = site.staticPaths()
      expect(paths).toContainEqual(['link'])
      expect(paths).toContainEqual(['dir', 'post'])
    })
  })

  describe('content', () => {
    test('get content for static path', () => {
      let site = Site.instance('test-content')
      let content = site.contentForStaticPath(['dir', 'post'])
      expect(content.filename).toEqual('test-content/dir/post.md')
      expect(content.title).toEqual('Some post')
    })
  })

  // describe('content', () => {
  //   test('get content for static path', () => {
  //     let content = contentForStaticPath(['dir', 'post'], 'test-content')
  //     expect(content.filename).toEqual('test-content/dir/post.md')
  //     expect(content.title).toEqual('Some post')
  //   })
  //   test('content collection for all content', () => {
  //     let collection = contentCollectionForStaticPrefix([], 'test-content')
  //     expect(collection.length).toBe(9)
  //   })
  //   test('content collection for subdir content', () => {
  //     let collection = contentCollectionForStaticPrefix(['dir'], 'test-content')
  //     expect(collection.length).toBe(1)
  //   })
  // })
})
