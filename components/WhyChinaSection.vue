<template>
  <section class="relative section bg-gradient-to-br from-brand-ocean via-slate-900 to-brand-ocean text-white overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white font-semibold mb-4 shadow-lg">
          <span class="text-xl">🇨🇳</span>
          <span>Study in China</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white">
          Why China? Because Your Future Deserves the Best.
        </h2>
      </div>

      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="group text-center bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 scroll-reveal"
          :class="`animation-delay-${Math.min(index, 5) * 100}`"
        >
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
            <div class="text-4xl">{{ benefit.icon }}</div>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-ocean">{{ benefit.title }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 scroll-reveal animation-delay-500">
        <NuxtLink to="/why-china" class="btn-white inline-flex items-center gap-2">
          Discover More Benefits
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use scroll reveal composable for animations
useScrollReveal()

const benefits = [
  {
    icon: '🎓',
    title: 'Quality Education',
    description: 'Top 100 global universities. WHO/PMDC recognized degrees.'
  },
  {
    icon: '💰',
    title: 'Affordable Tuition & Living',
    description: '50% lower costs than US/UK. $300-500/month living expenses.'
  },
  {
    icon: '🏆',
    title: 'Scholarship Opportunities',
    description: 'Up to 100% tuition coverage. Merit-based awards available.'
  },
  {
    icon: '🏮',
    title: 'Rich Culture & Language',
    description: 'Learn Mandarin while studying. Immerse in 5,000 years of history.'
  },
  {
    icon: '🌍',
    title: 'Global Career Opportunities',
    description: 'Chinese companies hiring worldwide. Belt & Road connections.'
  },
  {
    icon: '🏗️',
    title: 'Modern Campuses & Facilities',
    description: 'State-of-the-art labs, libraries, and student centers.'
  },
  {
    icon: '🛡️',
    title: 'Safe & Welcoming',
    description: 'Low crime rates. International student support systems.'
  },
  {
    icon: '🚀',
    title: 'Innovation Hub',
    description: "World's fastest tech growth. AI, robotics, engineering boom."
  }
]
</script>
