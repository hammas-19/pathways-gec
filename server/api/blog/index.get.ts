import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const dataPath = join(process.cwd(), 'data', 'blog.json')

    if (!existsSync(dataPath)) {
      return []
    }

    const data = readFileSync(dataPath, 'utf-8')
    const blog = JSON.parse(data)

    // Sort by newest first
    return blog.sort((a: any, b: any) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
})
