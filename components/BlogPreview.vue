<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="mb-4">Latest Insights & Guides</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="card card-hover p-0 overflow-hidden group">
          <div class="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span class="text-5xl">{{ post.icon }}</span>
          </div>
          <div class="p-6">
            <span class="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">{{ post.category }}</span>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{{ post.title }}</h3>
            <p class="text-sm text-gray-600 line-clamp-2">{{ post.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/blog" class="btn-secondary">View All Articles</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    slug: 'mbbs-china-pakistan-2025',
    title: 'Complete Guide: MBBS in China for Pakistani Students (2025)',
    category: 'Study Tips',
    excerpt: 'Everything you need to know about studying MBBS in China—from admission requirements to visa process.',
    icon: '📚'
  },
  {
    slug: 'hsk-4-preparation',
    title: 'How to Prepare for HSK 4 in 6 Months',
    category: 'Language',
    excerpt: 'Proven strategies and study plan to pass HSK 4 examination in just 6 months.',
    icon: '🎓'
  },
  {
    slug: 'student-life-china',
    title: 'Student Life in China: A First-Hand Experience',
    category: 'Student Life',
    excerpt: 'What it\'s really like living and studying in China as an international student.',
    icon: '🏙️'
  }
]
</script>
