import glob from 'glob'
import path from 'path'
import { Content } from './content'

export function pageContentPaths(dir = 'pages'): Array<string> {
  return glob.sync(`${dir}/**/*.md`).map((value: string) => {
    return value.slice(dir.length + 1)
  })
}

export function pageStaticPaths(dir = 'pages'): Array<Array<string>> {
  return pageContentPaths(dir).map((value: string) => {
    return value.replace(/\.md$/, '').split('/')
  })
}

export function contentFromStaticPath(
  staticPath: Array<string>,
  dir = 'pages'
): Content {
  let filename = path.join(dir, staticPath.join('/')) + '.md'
  return new Content(filename)
}
