import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const dataPath = join(process.cwd(), 'data', 'gallery.json')

    if (!existsSync(dataPath)) {
      return []
    }

    const data = readFileSync(dataPath, 'utf-8')
    const gallery = JSON.parse(data)

    // Sort by newest first
    return gallery.sort((a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  } catch (error) {
    console.error('Error reading gallery:', error)
    return []
  }
})
