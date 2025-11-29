import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const dataPath = join(process.cwd(), 'data', 'hsk-holders.json')

    if (!existsSync(dataPath)) {
      return []
    }

    const data = readFileSync(dataPath, 'utf-8')
    const hskHolders = JSON.parse(data)

    // Sort by score (highest first)
    return hskHolders.sort((a: any, b: any) => b.score - a.score)
  } catch (error) {
    console.error('Error reading HSK holders:', error)
    return []
  }
})
