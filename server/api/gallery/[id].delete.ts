import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    const dataPath = join(process.cwd(), 'data', 'gallery.json')

    if (!existsSync(dataPath)) {
      return {
        success: false,
        error: 'Gallery not found'
      }
    }

    const data = readFileSync(dataPath, 'utf-8')
    let gallery = JSON.parse(data)

    // Find image index
    const index = gallery.findIndex((img: any) => img.id === id)

    if (index === -1) {
      return {
        success: false,
        error: 'Image not found'
      }
    }

    // Remove image
    gallery.splice(index, 1)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(gallery, null, 2))

    return {
      success: true,
      message: 'Image deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting image:', error)
    return {
      success: false,
      error: 'Failed to delete image'
    }
  }
})
