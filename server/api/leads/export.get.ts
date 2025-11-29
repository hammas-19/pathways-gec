import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const dataPath = join(process.cwd(), 'data', 'leads.json')

    if (!existsSync(dataPath)) {
      return {
        success: false,
        error: 'No leads found'
      }
    }

    const data = readFileSync(dataPath, 'utf-8')
    let leads = JSON.parse(data)

    // Apply filters
    if (query.status && query.status !== 'all') {
      leads = leads.filter((lead: any) => lead.status === query.status)
    }

    if (query.country && query.country !== 'all') {
      leads = leads.filter((lead: any) => lead.country === query.country)
    }

    if (query.programInterest && query.programInterest !== 'all') {
      leads = leads.filter((lead: any) => lead.programInterest === query.programInterest)
    }

    if (query.dateFrom) {
      leads = leads.filter((lead: any) => new Date(lead.createdAt) >= new Date(query.dateFrom as string))
    }

    if (query.dateTo) {
      leads = leads.filter((lead: any) => new Date(lead.createdAt) <= new Date(query.dateTo as string))
    }

    // Convert to CSV
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Country', 'Program Interest', 'Message', 'Status', 'Source', 'Created At', 'Updated At']
    const csvRows = [headers.join(',')]

    leads.forEach((lead: any) => {
      const row = [
        lead.id,
        `"${lead.name}"`,
        lead.email,
        lead.phone,
        lead.country,
        lead.programInterest,
        `"${(lead.message || '').replace(/"/g, '""')}"`,
        lead.status,
        lead.source,
        lead.createdAt,
        lead.updatedAt
      ]
      csvRows.push(row.join(','))
    })

    const csv = csvRows.join('\n')

    // Set headers for CSV download
    setHeader(event, 'Content-Type', 'text/csv')
    setHeader(event, 'Content-Disposition', `attachment; filename="leads-export-${Date.now()}.csv"`)

    return csv
  } catch (error) {
    console.error('Error exporting leads:', error)
    return {
      success: false,
      error: 'Failed to export leads'
    }
  }
})
