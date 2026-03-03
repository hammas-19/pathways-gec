<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary to-secondary text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            GEC Blog
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Expert insights, guides, and tips for studying in China
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Dynamic Blog Cards -->
            <NuxtLink
              v-for="blog in blogs"
              :key="blog.slug"
              :to="`/blog/${blog.slug}`"
              class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div :class="`h-48 bg-gradient-to-br ${blog.image}`"></div>
              <div class="p-6">
                <div :class="`text-sm ${blog.categoryColor} font-semibold mb-2`">{{ blog.category }}</div>
                <h2 class="text-xl font-bold mb-3">{{ blog.title }}</h2>
                <p class="text-gray-600 text-sm mb-4">{{ blog.excerpt }}</p>
                <div :class="`${blog.categoryColor} font-semibold text-sm`">Read More →</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import blogs from '~/data/blogs.json'

useHead({
  title: 'Blog - Study in China Guides & Tips | GEC Global Educational Consultants',
  meta: [
    { name: 'description', content: 'Expert guides and tips for studying in China. MBBS, engineering, scholarships, student life, and more from GEC - Global Educational Consultants.' }
  ]
})
</script>

<style scoped>
.blog-card {
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}
</style>
