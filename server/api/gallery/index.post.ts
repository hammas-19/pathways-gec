import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const dataDir = join(process.cwd(), 'data')
    const dataPath = join(dataDir, 'gallery.json')

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let gallery = []
    if (existsSync(dataPath)) {
      const data = readFileSync(dataPath, 'utf-8')
      gallery = JSON.parse(data)
    }

    // Create new image entry
    const newImage = {
      id: Date.now().toString(),
      url: body.url,
      title: body.title,
      caption: body.caption,
      category: body.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add to gallery
    gallery.push(newImage)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(gallery, null, 2))

    return {
      success: true,
      data: newImage
    }
  } catch (error) {
    console.error('Error adding image:', error)
    return {
      success: false,
      error: 'Failed to add image'
    }
  }
})
