<template>
  <section class="hero-slider relative md:h-[590px] h-full overflow-hidden">
    <!-- Slides -->
    <div class="slides-container relative h-full">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'slide absolute inset-0 transition-opacity duration-1000',
          currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
        ]"
      >
        <!-- Background Image with Overlay -->
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-br from-[#000000] to-brand-blue/40"></div>
        <div class="absolute inset-0 bg-black/20"></div>

        <!-- Content -->
        <div class="container-custom relative z-20 h-full flex items-center">
          <div class="max-w-3xl text-white">
            <div class="w-fit bg-accent px-4 py-2 rounded-full mb-6 animate-fade-in-down flex items-center gap-2">
              <img src="/LogoWhite.png" class="h-10 w-fit" alt="">
              <span class="font-semibold">{{ slide.badge }}</span>
            </div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
              {{ slide.title }}
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in-up animation-delay-200">
              {{ slide.description }}
            </p>
            <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <NuxtLink to="/contact" class="btn-accent px-8 py-4 text-lg font-bold rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform">
                Get Started
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
              <NuxtLink to="/programs/mbbs" class="bg-white text-primary px-8 py-4 text-lg font-bold rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition-all">
                Explore Programs
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentSlide === index ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/80'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

    <!-- Navigation Arrows -->
    <button
      @click="previousSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      aria-label="Previous slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
      aria-label="Next slide"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    badge: '  Study in China',
    title: 'Your Gateway to World-Class Medical Education',
    description: 'Join 5000+ successful students pursuing MBBS and other programs in top Chinese universities with 95% visa success rate.',
    backgroundImage: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000'
  },
  {
    badge: '  WHO Recognized',
    title: 'PMC & ECFMG Recognized Medical Programs',
    description: 'Study MBBS in China with internationally recognized degrees. Return home ready to practice medicine worldwide.',
    backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000'
  },
  {
    badge: '  Global Opportunities',
    title: 'Build Your Future in China',
    description: 'From Engineering to AI, Medicine to Business - discover programs that transform careers and change lives.',
    backgroundImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000'
  },
  {
    badge: '  Expert Guidance',
    title: '50+ Education Consultants Supporting You',
    description: 'From application to graduation, we provide 24/7 support. Based in China, we understand your journey.',
    backgroundImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000'
  }
]

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const previousSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  // Auto-advance slides every 5 seconds
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.btn-accent {
  background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
}

.btn-accent:hover {
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.4);
}
</style>
