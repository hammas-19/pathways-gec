<template>
  <section class="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-1/3 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald font-semibold mb-4">
          <span class="text-xl">🌍</span>
          <span>Global Presence</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-teal bg-clip-text text-transparent">
          Find Information for Your Country
        </h2>
        <p class="text-xl text-slate-600">
          Tailored guidance for students from 12+ countries
        </p>
      </div>

      <!-- Countries Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Active Countries -->
        <NuxtLink
          v-for="(country, index) in activeCountries"
          :key="country.code"
          :to="`/countries/${country.slug}`"
          class="group card card-hover text-center p-6 border-2 border-brand-emerald/20 hover:border-brand-blue relative overflow-hidden scroll-reveal"
          :class="`animation-delay-${Math.min(index, 5) * 100}`"
        >
          <div class="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          <div class="relative z-10">
            <div class="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">{{ country.flag }}</div>
            <h3 class="text-lg font-bold mb-2 text-brand-ocean group-hover:text-brand-blue transition-colors">{{ country.name }}</h3>
            <p class="text-sm text-slate-600 mb-4">{{ country.description }}</p>
            <span class="btn-primary w-full text-sm inline-flex items-center justify-center gap-2">
              View Guide
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </div>
        </NuxtLink>

        <!-- Upcoming Countries -->
        <div
          v-for="(country, index) in upcomingCountries"
          :key="country.code"
          class="card text-center p-6 opacity-60 scroll-reveal"
          :class="`animation-delay-${Math.min(index + activeCountries.length, 5) * 100}`"
        >
          <div class="text-7xl mb-4">{{ country.flag }}</div>
          <h3 class="text-lg font-bold mb-2 text-slate-700">{{ country.name }}</h3>
          <span class="inline-block text-xs bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full mb-4 font-medium">Expanding Soon</span>
          <div class="text-xs text-slate-500">New market</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use scroll reveal composable for animations
useScrollReveal()

// Countries with active pages and campaigns
const activeCountries = [
  { name: 'Pakistan', flag: '🇵🇰', code: 'PK', slug: 'pakistan', description: '500+ students placed' },
  { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA', slug: 'saudi-arabia', description: 'Growing community' },
  { name: 'Yemen', flag: '🇾🇪', code: 'YE', slug: 'yemen', description: 'Active programs' },
  { name: 'Iran', flag: '🇮🇷', code: 'IR', slug: 'iran', description: 'New opportunities' },
  { name: 'Bangladesh', flag: '🇧🇩', code: 'BD', slug: 'bangladesh', description: 'Established presence' },
  { name: 'India', flag: '🇮🇳', code: 'IN', slug: 'india', description: 'Rapid growth' }
]

// Countries expanding soon
const upcomingCountries = [
  { name: 'Sudan', flag: '🇸🇩', code: 'SD' },
  { name: 'Morocco', flag: '🇲🇦', code: 'MA' },
  { name: 'Oman', flag: '🇴🇲', code: 'OM' },
  { name: 'Uganda', flag: '🇺🇬', code: 'UG' },
  { name: 'Tanzania', flag: '🇹🇿', code: 'TZ' },
  { name: 'Ghana', flag: '🇬🇭', code: 'GH' }
]
</script>
