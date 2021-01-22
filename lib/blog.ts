import fs from 'fs'
import path from 'path'

import { Content } from './content'

export interface BlogProps {
  issue: string
}

export function blogStaticPaths(dir = 'blog'): Array<Array<string>> {
  return [['001']]
}

export function titleForIssue(issue: string): string {
  let dataPath = path.join('blog', issue, 'data.json')
  let data = fs.readFileSync(dataPath, 'utf8')
  let json = JSON.parse(data)
  return json.title
}
