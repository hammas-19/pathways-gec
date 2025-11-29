import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const dataDir = join(process.cwd(), 'data')
    const dataPath = join(dataDir, 'hsk-holders.json')

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let hskHolders = []
    if (existsSync(dataPath)) {
      const data = readFileSync(dataPath, 'utf-8')
      hskHolders = JSON.parse(data)
    }

    // Create new HSK holder entry
    const newHolder = {
      id: Date.now().toString(),
      name: body.name,
      country: body.country,
      level: body.level, // HSK 1-6
      score: body.score,
      maxScore: body.maxScore || 300,
      examDate: body.examDate,
      photo: body.photo || '',
      university: body.university || '',
      testimonial: body.testimonial || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add to HSK holders
    hskHolders.push(newHolder)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(hskHolders, null, 2))

    return {
      success: true,
      data: newHolder
    }
  } catch (error) {
    console.error('Error adding HSK holder:', error)
    return {
      success: false,
      error: 'Failed to add HSK holder'
    }
  }
})
