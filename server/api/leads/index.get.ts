import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const dataPath = join(process.cwd(), 'data', 'leads.json')

    if (!existsSync(dataPath)) {
      return []
    }

    const data = readFileSync(dataPath, 'utf-8')
    const leads = JSON.parse(data)

    // Sort by newest first
    return leads.sort((a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  } catch (error) {
    console.error('Error reading leads:', error)
    return []
  }
})
