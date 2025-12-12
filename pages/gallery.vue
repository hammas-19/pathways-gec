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
            @click="switchTab(tab.id)"
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

        <!-- Tab Switching Loader -->
        <div v-if="tabSwitching" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent"></div>
          <p class="mt-3 text-gray-600">Loading images...</p>
        </div>

        <!-- Loading State -->
        <div v-else-if="loading" class="text-center py-20">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p class="mt-4 text-gray-600">Loading gallery...</p>
        </div>

        <!-- Gallery Grid -->
        <div v-else-if="!tabSwitching && filteredImages.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            @click="openLightbox(index)"
            class="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
          >
            <img
              :src="image.url"
              :alt="image.caption"
              loading="lazy"
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
        <div v-else-if="!tabSwitching && filteredImages.length === 0" class="text-center py-20">
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
const tabSwitching = ref(false)

// Fetch images from API
const fetchImages = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/gallery')
    if (response.ok) {
      const data = await response.json()
      if (data && data.length > 0) {
        images.value = data
      } else {
        // Use local images if API returns empty
        images.value = getSampleImages()
      }
    } else {
      // Use local images if API fails
      images.value = getSampleImages()
    }
  } catch (error) {
    console.error('Failed to load gallery:', error)
    // Use local images on error
    images.value = getSampleImages()
  } finally {
    loading.value = false
  }
}

// Sample images for demonstration
const getSampleImages = () => {
  // Using the real final Cloudinary images provided by the user
  return [
    // Students
    {
      id: 1,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362563/1_z9vsr2.jpg',
      title: 'Student Life',
      caption: "Our amazing students",
      category: 'students'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362559/2_tfxd6k.jpg',
      title: 'Student Life',
      caption: "Our amazing students",
      category: 'students'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362556/3_xcjdp5.jpg',
      title: 'Student Life',
      caption: "Our amazing students",
      category: 'students'
    },

    // Events
    {
      id: 4,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362270/2_jbueku.jpg',
      title: 'Events & Activities',
      caption: 'Memorable moments from our events',
      category: 'events'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361890/c8216d1e2f9c52df77255d76997642d2_sxaw9n.jpg',
      title: 'Events & Activities',
      caption: 'Memorable moments from our events',
      category: 'events'
    },

    // Campus Life
    {
      id: 6,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362168/3_ziakzk.jpg',
      title: 'Campus Life',
      caption: 'Experience campus facilities and environment',
      category: 'campus'
    },
    {
      id: 7,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362043/eb0958f1703dc517aa61e6fe9787eaf3_jwlqhr.jpg',
      title: 'Campus Life',
      caption: 'Experience campus facilities and environment',
      category: 'campus'
    },
    {
      id: 8,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361890/98fada23fc419b1f301734aefc8b7466_vmhedf.jpg',
      title: 'Campus Life',
      caption: 'Experience campus facilities and environment',
      category: 'campus'
    },

    // Graduation (added final images)
    {
      id: 9,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362436/1_t4goz4.jpg',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our successful graduates',
      category: 'graduation'
    },
    {
      id: 10,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362434/4_xbxjzh.jpg',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our successful graduates',
      category: 'graduation'
    },
    {
      id: 11,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362433/3_nx4buo.jpg',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our successful graduates',
      category: 'graduation'
    },
    {
      id: 12,
      url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765362432/2_yi36wf.jpg',
      title: 'Graduation Ceremony',
      caption: 'Celebrating our successful graduates',
      category: 'graduation'
    }
  ]
}

// Computed filtered images
const filteredImages = computed(() => {
  if (activeTab.value === 'all') {
    return images.value
  }
  return images.value.filter(img => img.category === activeTab.value)
})

// Switch tab with loading state
const switchTab = async (tabId) => {
  if (tabId === activeTab.value) return
  
  tabSwitching.value = true
  
  // Small delay to show loader and allow UI to update
  await new Promise(resolve => setTimeout(resolve, 300))
  
  activeTab.value = tabId
  
  // Wait for next tick to ensure DOM updates
  await nextTick()
  
  tabSwitching.value = false
}

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
