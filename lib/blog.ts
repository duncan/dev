import fs from 'fs'
import path from 'path'
import { Content, ContentProps } from './content'

export interface BlogProps {
  issue: string
  title: string
  contents: Array<ContentProps>
}

export function blogStaticPaths(dir = 'blog'): Array<Array<string>> {
  return [['1']]
}

export function titleForIssue(issue: string): string {
  let dataPath = path.join('blog', issue, 'data.json')
  let data = fs.readFileSync(dataPath, 'utf8')
  let json = JSON.parse(data)
  return json.title
}

export function blogPropsForIssue(staticPath: Array<string>): BlogProps {
  return {
    issue: '1',
    title: 'This is what you think it is...',
    contents: [],
  }
}
