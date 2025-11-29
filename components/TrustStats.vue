<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

    <!-- Decorative Elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Stat 1 -->
        <div class="group card card-hover p-6 md:p-8 text-center scroll-reveal animate-fade-in">
          <div class="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-teal rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent mb-2 count-up" ref="stat1">500+</div>
          <div class="text-slate-600 font-medium text-sm md:text-base">Students Guided</div>
        </div>

        <!-- Stat 2 -->
        <div class="group card card-hover p-6 md:p-8 text-center scroll-reveal animate-fade-in animation-delay-100">
          <div class="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-emerald mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-br from-brand-emerald to-brand-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-teal to-brand-emerald bg-clip-text text-transparent mb-2 count-up" ref="stat2">50+</div>
          <div class="text-slate-600 font-medium text-sm md:text-base">Expert Team Members</div>
        </div>

        <!-- Stat 3 -->
        <div class="group card card-hover p-6 md:p-8 text-center scroll-reveal animate-fade-in animation-delay-200">
          <div class="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-amber to-brand-orange mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-coral rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-amber to-brand-orange bg-clip-text text-transparent mb-2 count-up" ref="stat3">95%</div>
          <div class="text-slate-600 font-medium text-sm md:text-base">Visa Success Rate</div>
        </div>

        <!-- Stat 4 -->
        <div class="group card card-hover p-6 md:p-8 text-center scroll-reveal animate-fade-in animation-delay-300">
          <div class="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div class="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mb-2 count-up" ref="stat4">15+</div>
          <div class="text-slate-600 font-medium text-sm md:text-base">Partner Universities</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Use scroll reveal composable for animations
useScrollReveal()

const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)
const stat4 = ref(null)

const animateValue = (element, start, end, duration, suffix = '') => {
  if (!element || typeof window === 'undefined') return

  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const value = Math.floor(progress * (end - start) + start)
    element.textContent = value + suffix
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

onMounted(() => {
  // Only run on client-side
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

  // Intersection Observer for scroll-triggered animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(stat1.value, 0, 500, 2000, '+')
        animateValue(stat2.value, 0, 50, 2000, '+')
        animateValue(stat3.value, 0, 95, 2000, '%')
        animateValue(stat4.value, 0, 15, 2000, '+')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  if (stat1.value && stat1.value.parentElement && stat1.value.parentElement.parentElement) {
    observer.observe(stat1.value.parentElement.parentElement)
  }
})
</script>
