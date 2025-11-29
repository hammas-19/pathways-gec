import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const dataDir = join(process.cwd(), 'data')
    const dataPath = join(dataDir, 'leads.json')

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let leads = []
    if (existsSync(dataPath)) {
      const data = readFileSync(dataPath, 'utf-8')
      leads = JSON.parse(data)
    }

    // Create new lead entry
    const newLead = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      country: body.country || '',
      programInterest: body.programInterest || '',
      message: body.message || '',
      source: body.source || 'website',
      status: 'new', // new, contacted, qualified, converted
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add to leads
    leads.push(newLead)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(leads, null, 2))

    return {
      success: true,
      data: newLead
    }
  } catch (error) {
    console.error('Error adding lead:', error)
    return {
      success: false,
      error: 'Failed to add lead'
    }
  }
})
