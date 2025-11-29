import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const dataDir = join(process.cwd(), 'data')
    const dataPath = join(dataDir, 'blog.json')

    // Ensure data directory exists
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true })
    }

    // Read existing data or initialize empty array
    let blog = []
    if (existsSync(dataPath)) {
      const data = readFileSync(dataPath, 'utf-8')
      blog = JSON.parse(data)
    }

    // Create new blog post
    const newPost = {
      id: Date.now().toString(),
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      tags: body.tags || [],
      author: body.author || 'GEC Team',
      publishedAt: body.publishedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add to blog
    blog.push(newPost)

    // Save to file
    writeFileSync(dataPath, JSON.stringify(blog, null, 2))

    return {
      success: true,
      data: newPost
    }
  } catch (error) {
    console.error('Error adding blog post:', error)
    return {
      success: false,
      error: 'Failed to add blog post'
    }
  }
})
