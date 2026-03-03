<template>
  <div class="blog-detail-page">
    <!-- Hero Section -->
    <section v-if="blog" :class="`hero-section bg-gradient-to-br ${blog.image} text-white py-20`">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="mb-4">
            <span :class="`text-lg font-semibold ${blog.categoryColor}`">{{ blog.category }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ blog.title }}</h1>
          <p class="text-lg text-gray-100">{{ blog.excerpt }}</p>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section v-if="blog" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div class="prose prose-lg max-w-none" v-html="blog.content"></div>
          
          <!-- CTA Section -->
          <div class="mt-12 pt-8 border-t-2 border-gray-200">
            <h3 class="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p class="text-gray-600 mb-6">Connect with our educational consultants to learn more about studying in China.</p>
            <div class="flex gap-4 flex-wrap">
              <NuxtLink to="/contact" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </NuxtLink>
              <NuxtLink to="/blog" class="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                Back to Blog
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 404 Not Found -->
    <section v-else class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p class="text-gray-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
        <NuxtLink to="/blog" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors inline-block">
          Return to Blog
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import blogs from '~/data/blogs.json'

const route = useRoute()

const blog = computed(() => {
  return blogs.find(b => b.slug === route.params.slug)
})

useHead(() => {
  if (blog.value) {
    return {
      title: `${blog.value.title} | GEC Blog`,
      meta: [
        { name: 'description', content: blog.value.excerpt }
      ]
    }
  }
  return {
    title: 'Blog - GEC Global Educational Consultants',
    meta: [{ name: 'description', content: 'Read our blog posts about studying in China' }]
  }
})
</script>

<style scoped>
.prose {
  --tw-prose-body: #374151;
  --tw-prose-headings: #1F2937;
  --tw-prose-lead: #4B5563;
  --tw-prose-links: #0066CC;
  --tw-prose-bold: #1F2937;
  --tw-prose-counters: #6B7280;
  --tw-prose-bullets: #D1D5DB;
  --tw-prose-hr: #E5E7EB;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #E5E7EB;
  --tw-prose-captions: #6B7280;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #E5E7EB;
  --tw-prose-pre-bg: #111827;
  --tw-prose-th-borders: #D1D5DB;
  --tw-prose-td-borders: #E5E7EB;
}

.prose h2 {
  @apply text-3xl font-bold mt-8 mb-4 text-gray-900;
}

.prose h3 {
  @apply text-2xl font-bold mt-6 mb-3 text-gray-900;
}

.prose p {
  @apply mb-4 leading-relaxed text-gray-700;
}

.prose li {
  @apply mb-2;
}
</style>
