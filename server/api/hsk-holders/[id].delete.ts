import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    const dataPath = join(process.cwd(), 'data', 'hsk-holders.json')

    if (!existsSync(dataPath)) {
      return {
        success: false,
        error: 'HSK holders not found'
      }
    }

    const data = readFileSync(dataPath, 'utf-8')
    let hskHolders = JSON.parse(data)

    // Find holder index
    const index = hskHolders.findIndex((h: any) => h.id === id)

    if (index === -1) {
      return {
        success: false,
        error: 'HSK holder not found'
      }
    }

    // Remove holder
    hskHolders.splice(index, 1)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(hskHolders, null, 2))

    return {
      success: true,
      message: 'HSK holder deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting HSK holder:', error)
    return {
      success: false,
      error: 'Failed to delete HSK holder'
    }
  }
})
