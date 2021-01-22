import { blogStaticPaths, titleForIssue } from '../lib/blog'

describe('Blog', () => {
  test('title for issue', () => {
    expect(titleForIssue('001')).toBe('Week of January 18-24, 2021')
  })
})
