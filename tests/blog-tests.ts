import { blogStaticPaths, titleForIssue } from '../lib/blog'

describe('Blog', () => {
  test('title for issue', () => {
    expect(titleForIssue('1')).toBe('Week of January 18-24, 2021')
  })
})
