<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h2 class="mb-4">Latest Insights & Guides</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
        >
          <div :class="`h-48 bg-gradient-to-br ${post.image}`"></div>
          <div class="p-6">
            <div :class="`text-sm ${post.categoryColor} font-semibold mb-2`">{{ post.category }}</div>
            <h3 class="text-lg font-bold mb-3">{{ post.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
            <div :class="`${post.categoryColor} font-semibold text-sm`">Read More →</div>
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
import allBlogs from '~/data/blogs.json'

const posts = computed(() => {
  return allBlogs.slice(0, 3)
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
