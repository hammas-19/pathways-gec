import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    const dataPath = join(process.cwd(), 'data', 'gallery.json')

    if (!existsSync(dataPath)) {
      return {
        success: false,
        error: 'Gallery not found'
      }
    }

    const data = readFileSync(dataPath, 'utf-8')
    let gallery = JSON.parse(data)

    // Find and update image
    const index = gallery.findIndex((img: any) => img.id === id)

    if (index === -1) {
      return {
        success: false,
        error: 'Image not found'
      }
    }

    gallery[index] = {
      ...gallery[index],
      url: body.url || gallery[index].url,
      title: body.title || gallery[index].title,
      caption: body.caption || gallery[index].caption,
      category: body.category || gallery[index].category,
      updatedAt: new Date().toISOString()
    }

    // Save to file
    writeFileSync(dataPath, JSON.stringify(gallery, null, 2))

    return {
      success: true,
      data: gallery[index]
    }
  } catch (error) {
    console.error('Error updating image:', error)
    return {
      success: false,
      error: 'Failed to update image'
    }
  }
})
