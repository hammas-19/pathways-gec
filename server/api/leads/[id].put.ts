import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    const dataPath = join(process.cwd(), 'data', 'leads.json')

    if (!existsSync(dataPath)) {
      return {
        success: false,
        error: 'Leads not found'
      }
    }

    const data = readFileSync(dataPath, 'utf-8')
    let leads = JSON.parse(data)

    // Find and update lead
    const index = leads.findIndex((lead: any) => lead.id === id)

    if (index === -1) {
      return {
        success: false,
        error: 'Lead not found'
      }
    }

    leads[index] = {
      ...leads[index],
      status: body.status || leads[index].status,
      notes: body.notes || leads[index].notes,
      updatedAt: new Date().toISOString()
    }

    // Save to file
    writeFileSync(dataPath, JSON.stringify(leads, null, 2))

    return {
      success: true,
      data: leads[index]
    }
  } catch (error) {
    console.error('Error updating lead:', error)
    return {
      success: false,
      error: 'Failed to update lead'
    }
  }
})
