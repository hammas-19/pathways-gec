<template>
  <section class="section bg-white relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-amber/10 text-brand-amber font-semibold mb-4">
          <span class="text-xl">🎯</span>
          <span>Our Services</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent">
          End-to-End Support
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group text-center card card-hover p-8 scroll-reveal"
          :class="`animation-delay-${index * 100}`"
        >
          <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg class="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-brand-ocean group-hover:text-brand-blue transition-colors">{{ service.title }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

      <div class="text-center mt-12 scroll-reveal animation-delay-400">
        <NuxtLink to="/services" class="btn-primary inline-flex items-center gap-2">
          View All Services
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

const services = [
  {
    title: 'University Placement',
    description: 'Expert matching • Application support • Admission success',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Visa Assistance',
    description: 'Document prep • Interview coaching • 95% success rate',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'Test Preparation (HSK)',
    description: 'HSK 3-6 courses • Mock exams • Award ceremonies',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Initial Settlement',
    description: 'Airport pickup • SIM/Bank setup • Accommodation support',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  }
]
</script>
