<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary via-secondary to-accent-purple pt-32 pb-20">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container-custom relative z-10">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-syne font-bold mb-6">
            Our Gallery
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Celebrating our students' journey and memorable moments
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Tabs -->
    <section class="section bg-white">
      <div class="container-custom">
        <!-- Tab Navigation -->
        <div class="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-8 py-3 rounded-full font-semibold transition-all',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p class="mt-4 text-gray-600">Loading gallery...</p>
        </div>

        <!-- Gallery Grid -->
        <div v-else-if="filteredImages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            @click="openLightbox(index)"
            class="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
          >
            <img
              :src="image.url"
              :alt="image.caption"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="font-semibold text-lg mb-2">{{ image.title }}</h3>
                <p class="text-sm text-gray-200">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-20">
          <div class="text-6xl mb-4">📷</div>
          <h3 class="text-2xl font-semibold text-gray-700 mb-2">No images yet</h3>
          <p class="text-gray-600">Check back soon for updates!</p>
        </div>

        <!-- Lightbox -->
        <div
          v-if="lightboxOpen"
          @click="closeLightbox"
          class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl z-10"
          >
            ×
          </button>

          <button
            v-if="currentImageIndex > 0"
            @click.stop="previousImage"
            class="absolute left-4 text-white hover:text-gray-300 text-4xl z-10"
          >
            ‹
          </button>

          <button
            v-if="currentImageIndex < filteredImages.length - 1"
            @click.stop="nextImage"
            class="absolute right-4 text-white hover:text-gray-300 text-4xl z-10"
          >
            ›
          </button>

          <div @click.stop class="max-w-6xl w-full">
            <img
              :src="filteredImages[currentImageIndex]?.url"
              :alt="filteredImages[currentImageIndex]?.caption"
              class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div class="text-center mt-4 text-white">
              <h3 class="text-xl font-semibold mb-2">{{ filteredImages[currentImageIndex]?.title }}</h3>
              <p class="text-gray-300">{{ filteredImages[currentImageIndex]?.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-br from-primary to-secondary text-white">
      <div class="container-custom text-center">
        <h2 class="text-4xl font-bold mb-6">Join Our Success Story</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Be part of our growing community of successful students
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink
            to="/contact"
            class="btn-primary bg-white text-primary hover:bg-gray-100"
          >
            Start Your Journey
          </NuxtLink>
          <NuxtLink
            to="/success-stories"
            class="btn-secondary border-2 border-white  hover:bg-white hover:text-primary"
          >
            Read Success Stories
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Gallery - Student Photos & Events | GEC Pathways',
  meta: [
    { name: 'description', content: 'Browse our gallery of student photos, campus life, events, and memorable moments at GEC Pathways. See our vibrant community in action.' }
  ]
})

const tabs = [
  { id: 'all', label: 'All Photos' },
  { id: 'students', label: 'Students' },
  { id: 'events', label: 'Events' },
  { id: 'campus', label: 'Campus Life' },
  { id: 'graduation', label: 'Graduation' }
]

const activeTab = ref('all')
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)
const loading = ref(true)
const images = ref([])

// Fetch images from API
const fetchImages = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/gallery')
    if (response.ok) {
      const data = await response.json()
      images.value = data
    }
  } catch (error) {
    console.error('Failed to load gallery:', error)
    // Use sample data for now
    images.value = getSampleImages()
  } finally {
    loading.value = false
  }
}

// Sample images for demonstration
const getSampleImages = () => [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    title: 'Campus Life',
    caption: 'Students enjoying campus facilities',
    category: 'students'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    title: 'Graduation Ceremony 2024',
    caption: 'Celebrating our successful graduates',
    category: 'graduation'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    title: 'Group Study Session',
    caption: 'Students collaborating on assignments',
    category: 'students'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    title: 'Cultural Festival',
    caption: 'Annual international cultural festival',
    category: 'events'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    title: 'Library Study',
    caption: 'Modern library facilities',
    category: 'campus'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    title: 'Orientation Day',
    caption: 'Welcome event for new students',
    category: 'events'
  }
]

// Computed filtered images
const filteredImages = computed(() => {
  if (activeTab.value === 'all') {
    return images.value
  }
  return images.value.filter(img => img.category === activeTab.value)
})

// Lightbox functions
const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Keyboard navigation
onMounted(() => {
  fetchImages()

  const handleKeydown = (e) => {
    if (!lightboxOpen.value) return

    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') previousImage()
    if (e.key === 'ArrowRight') nextImage()
  }

  window.addEventListener('keydown', handleKeydown)

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
.btn-primary,
.btn-secondary {
  @apply px-8 py-4 rounded-lg font-semibold transition-all;
}
</style>
