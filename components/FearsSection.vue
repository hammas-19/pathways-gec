<template>
  <section class="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-semibold mb-4">
          <span class="text-xl">🛡️</span>
          <span>Your Concerns, Our Solutions</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent">
          We Understand Your Fears
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          Studying abroad is a big decision. We've helped 500+ students overcome these exact concerns.
        </p>
      </div>

      <!-- Desktop: Slider -->
      <div class="hidden md:block scroll-reveal">
        <div class="relative h-[500px] overflow-hidden rounded-3xl shadow-xl-soft">
          <!-- Slides -->
          <div
            v-for="(fear, index) in fears"
            :key="index"
            :class="['absolute inset-0 transition-all duration-700 ease-in-out', currentFear === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full']"
          >
            <!-- Gradient Background -->
            <div class="absolute inset-0" :style="`background: linear-gradient(135deg, ${fear.bgColor}15 0%, ${fear.bgColor}05 100%);`"></div>

            <div class="grid md:grid-cols-2 gap-12 h-full p-12 items-center relative z-10">
              <!-- Left: Content -->
              <div>
                <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-6">
                  <span class="text-3xl">{{ fear.icon }}</span>
                  <span class="font-semibold text-brand-ocean">{{ fear.imageAlt }}</span>
                </div>
                <h3 class="text-3xl md:text-4xl font-bold mb-6 text-brand-ocean">{{ fear.headline }}</h3>
                <p class="text-lg text-slate-700 mb-8 leading-relaxed">{{ fear.body }}</p>
                <button v-if="fear.ctaText" class="btn-primary">
                  {{ fear.ctaText }}
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <!-- Right: Visual Element -->
              <div class="flex items-center justify-center">
                <div class="relative">
                  <div class="w-80 h-80 glass rounded-3xl flex items-center justify-center border-2 border-white/40 shadow-card-hover hover:scale-105 transition-transform duration-500">
                    <div class="text-center p-8">
                      <div class="text-9xl mb-6 animate-bounce-subtle">{{ fear.icon }}</div>
                      <p class="text-xl font-bold text-brand-ocean">{{ fear.imageAlt }}</p>
                    </div>
                  </div>
                  <!-- Decorative circles -->
                  <div class="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-50" :style="`background: ${fear.bgColor};`"></div>
                  <div class="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl opacity-30" :style="`background: ${fear.bgColor};`"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Dots -->
          <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 glass px-4 py-3 rounded-full">
            <button
              v-for="(_, index) in fears"
              :key="index"
              @click="currentFear = index"
              :class="['h-2.5 rounded-full transition-all duration-300', currentFear === index ? 'bg-brand-blue w-10' : 'bg-slate-300 w-2.5 hover:bg-slate-400']"
            ></button>
          </div>

          <!-- Arrow Navigation -->
          <button
            @click="prevFear"
            class="absolute left-6 top-1/2 transform -translate-y-1/2 glass rounded-full p-4 shadow-card hover:shadow-card-hover hover:scale-110 transition-all group"
          >
            <svg class="w-6 h-6 text-brand-ocean group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextFear"
            class="absolute right-6 top-1/2 transform -translate-y-1/2 glass rounded-full p-4 shadow-card hover:shadow-card-hover hover:scale-110 transition-all group"
          >
            <svg class="w-6 h-6 text-brand-ocean group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile: Stacked Cards -->
      <div class="md:hidden space-y-6">
        <div
          v-for="(fear, index) in fears"
          :key="index"
          class="card card-hover p-6 scroll-reveal relative overflow-hidden"
        >
          <!-- Gradient Border -->
          <div class="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" :style="`background: ${fear.bgColor};`"></div>

          <!-- Decorative Background -->
          <div class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10" :style="`background: ${fear.bgColor};`"></div>

          <div class="relative z-10">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-4">
              <span class="text-3xl">{{ fear.icon }}</span>
              <span class="text-sm font-semibold text-brand-ocean">{{ fear.imageAlt }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-brand-ocean">{{ fear.headline }}</h3>
            <p class="text-slate-700 mb-4 leading-relaxed">{{ fear.body }}</p>
            <button v-if="fear.ctaText" class="btn-primary text-sm">
              {{ fear.ctaText }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Use scroll reveal composable for animations
useScrollReveal()

const currentFear = ref(0)
let autoplayInterval = null

const fears = [
  {
    headline: 'Worried About Scams?',
    body: "We're registered with offices in different countries, based in China. Visit our physical offices. Meet our team. We're not hiding behind emails.",
    ctaText: 'See Our Office Photos',
    icon: '🛡️',
    imageAlt: 'Professional Office',
    bgColor: '#00e4ff'
  },
  {
    headline: 'Fear of Being Alone Abroad?',
    body: "24/7 on-ground support from airport pickup to graduation. Our team lives in China—we're always here.",
    ctaText: '',
    icon: '🤝',
    imageAlt: 'Team Welcome',
    bgColor: '#deaaff'
  },
  {
    headline: 'No Hidden Fees. Ever.',
    body: "100% transparent pricing. See exact costs before you commit. No surprises, no fine print.",
    ctaText: '',
    icon: '💰',
    imageAlt: 'Transparent Pricing',
    bgColor: '#ffcbb0'
  },
  {
    headline: 'Tired of Inexperienced Agents?',
    body: "Founded by Dr. Sohail, Dr. Amir & Dr. Adnan—actual doctors who studied in China. We've been in your shoes.",
    ctaText: '',
    icon: '👨‍⚕️',
    imageAlt: 'Doctor Team',
    bgColor: '#006046'
  },
  {
    headline: 'Frustrated by Slow Responses?',
    body: "We respond within 24 hours on WhatsApp. Real humans, not bots. Try us.",
    ctaText: '',
    icon: '⚡',
    imageAlt: 'Fast Response',
    bgColor: '#fccf00'
  },
  {
    headline: 'Language Barriers Holding You Back?',
    body: "Our multilingual team speaks English, Urdu, Arabic, and Chinese. Zero language stress.",
    ctaText: '',
    icon: '🌍',
    imageAlt: 'Multilingual Team',
    bgColor: '#aed9e0'
  }
]

const nextFear = () => {
  currentFear.value = (currentFear.value + 1) % fears.length
}

const prevFear = () => {
  currentFear.value = currentFear.value === 0 ? fears.length - 1 : currentFear.value - 1
}

onMounted(() => {
  // Auto-advance slides every 5 seconds
  autoplayInterval = setInterval(nextFear, 5000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>
