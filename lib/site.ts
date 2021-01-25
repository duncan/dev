import glob from 'glob'
import path from 'path'
import { Content, ContentProps } from './content'
import * as _ from 'lodash'

export function contentPaths(dir = 'public'): Array<string> {
  return glob.sync(`${dir}/**/*.md`).map((value: string) => {
    return value.slice(dir.length + 1)
  })
}

export function staticPaths(dir = 'public'): Array<Array<string>> {
  return contentPaths(dir).map((value: string) => {
    return value.replace(/\.md$/, '').split('/')
  })
}

export function contentForStaticPath(
  staticPath: Array<string>,
  dir = 'public'
): Content {
  let filename = path.join(dir, staticPath.join('/')) + '.md'
  let slug = '/' + staticPath.join('/')
  return new Content(filename, slug)
}

export function contentCollectionForStaticPrefix(
  staticPrefix: Array<string>,
  dir = 'public'
): Array<Content> {
  let l = staticPrefix.length
  return _.chain(staticPaths(dir))
    .filter((o) => {
      return _.isEqual(staticPrefix, _.slice(o, 0, l))
    })
    .map((o) => {
      return contentForStaticPath(o, dir)
    })
    .sortBy([
      (o) => {
        return o.date
      },
    ])
    .reverse()
    .value()
}
