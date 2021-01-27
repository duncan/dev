import path from 'path'
import { Site } from '../lib/site'

describe('Site', () => {
  let testSite = Site.instance('test-content')

  describe('singleton', () => {
    test('same instance returned for same directory', () => {
      expect(testSite).toBe(Site.instance('test-content'))
    })
    test('instance has dir property', () => {
      let expectedDir = path.resolve('test-content')
      expect(testSite.dir).toBe(expectedDir)
    })
  })

  describe('paths', () => {
    test('content paths', () => {
      let paths = testSite.contentPaths()
      expect(paths.length).toBeGreaterThan(0)
      expect(paths).toContain('link.md')
      expect(paths).toContain('dir/post.md')
    })

    test('static paths', () => {
      let paths = testSite.staticPaths()
      expect(paths).toContainEqual(['link'])
      expect(paths).toContainEqual(['dir', 'post'])
    })
  })

  describe('content', () => {
    test('get content for static path', () => {
      //let site = Site.instance('test-content')
      let content = testSite.contentForStaticPath(['dir', 'post'])
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
