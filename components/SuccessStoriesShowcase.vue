<template>
  <section class="section bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-1/3 w-96 h-96 bg-brand-emerald/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 scroll-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald font-semibold mb-4">
          <span class="text-xl">⭐</span>
          <span>Success Stories</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Real Stories. Real Success.
        </h2>
        <p class="text-xl text-slate-600">Join 500+ students who trusted GEC</p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 scroll-reveal animation-delay-100">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['px-6 py-3 rounded-xl font-semibold transition-all duration-300', activeTab === tab.id ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-button' : 'bg-white text-slate-700 hover:shadow-card hover:-translate-y-0.5']"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content: Written Reviews -->
      <div v-if="activeTab === 'written'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="group card card-hover p-6 relative overflow-hidden scroll-reveal"
          :class="`animation-delay-${Math.min(index, 5) * 100}`"
        >
          <!-- Decorative gradient -->
          <div class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" :style="`background: ${testimonial.bgColor};`"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl border-2 border-white/40">
                {{ testimonial.flag }}
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-brand-ocean">{{ testimonial.name }}</h4>
                <p class="text-sm text-slate-600">{{ testimonial.program }}</p>
              </div>
            </div>
            <div class="flex gap-1 mb-3">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-slate-700 italic mb-4 leading-relaxed">"{{ testimonial.quote }}"</p>
            <p class="text-sm font-medium text-brand-blue">{{ testimonial.achievement }}</p>
          </div>
        </div>
      </div>

      <!-- Tab Content: Video Testimonials -->
      <div v-if="activeTab === 'video'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="card p-0 overflow-hidden">
          <div class="aspect-video bg-gray-200 flex items-center justify-center">
            <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="p-4">
            <h4 class="font-semibold mb-1">Student Testimonial {{ i }}</h4>
            <p class="text-sm text-gray-600">2 minutes • Campus Life</p>
          </div>
        </div>
      </div>

      <!-- Tab Content: Documents -->
      <div v-if="activeTab === 'documents'" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="doc in documents" :key="doc.id" @click="selectedDocument = doc" class="card p-4 text-center cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
          <svg class="w-16 h-16 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p class="text-sm font-medium">{{ doc.name }}</p>
        </div>
      </div>

      <!-- Tab Content: HSK Achievers -->
      <div v-if="activeTab === 'hsk'" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="achiever in hskAchievers" :key="achiever.id" class="card p-6 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all" @click="openDocumentByName(achiever.name)">
          <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-yellow/20 flex items-center justify-center">
            <span class="text-3xl">🏆</span>
          </div>
          <h4 class="font-semibold mb-1 hover:text-brand-blue transition-colors">
            {{ achiever.name }}
          </h4>
        </div>
      </div>

      <!-- View All CTA -->
      <div class="text-center mt-12 scroll-reveal animation-delay-500">
        <NuxtLink to="/success-stories" class="btn-primary inline-flex items-center gap-2">
          View All Success Stories
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Document Modal -->
    <div v-if="selectedDocument" @click="selectedDocument = null" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div @click.stop class="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <h3 class="text-2xl font-bold">{{ selectedDocument.name }}</h3>
          <button @click="selectedDocument = null" class="text-gray-500 hover:text-gray-700 text-2xl">
            &times;
          </button>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 overflow-auto p-6">
          <img :src="selectedDocument.url" :alt="selectedDocument.name" class="w-full rounded-lg">
        </div>

        <!-- Modal Footer -->
        <div class="flex gap-3 p-6 border-t">
          <a :href="selectedDocument.url" target="_blank" rel="noopener noreferrer" class="btn-primary flex-1 flex items-center justify-center">
            View Full Size
          </a>
          <button @click="selectedDocument = null" class="btn-secondary flex-1 flex items-center justify-center">
            Close
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Use scroll reveal composable for animations
useScrollReveal()

const activeTab = ref('written')
const selectedDocument = ref(null)

const tabs = [
  { id: 'written', label: 'Written Reviews' },
  { id: 'video', label: 'Video Testimonials' },
  { id: 'documents', label: 'Document Gallery' },
  { id: 'hsk', label: 'HSK Achievers' }
]

const hskAchievers = [
  { id: 1, name: 'Fakhrat Aleena Ali' },
  { id: 2, name: 'Sania Sabir' },
  { id: 3, name: 'Yaqoob Muqaddas' },
  { id: 4, name: 'Shoukat Kashif' },
  { id: 5, name: 'Butt Ayesha' },
  { id: 6, name: 'Eshaal Fatima' },
  { id: 7, name: 'Shamraiza Iqbal' },
  { id: 8, name: 'Shehzadi Nimra' },
  { id: 9, name: 'Abid Mirza Sami Ullah' }
]

const documents = [
  { id: 1, name: 'Fakhrat Aleena Ali', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082273/Fakhrat_Aleena_Ali_rdymfk.jpg' },
  { id: 2, name: 'Shamraiza Iqbal', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082272/Shamraiza_Iqbal_xpyqul.jpg' },
  { id: 3, name: 'Eshaal Fatima', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082272/Eshaal_Fatima_caorpr.jpg' },
  { id: 4, name: 'Sania Sabir', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082272/Sania_Sabir_ka4kwf.jpg' },
  { id: 5, name: 'Shoukat Kashif', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082271/Shoukat_Kashif_dqygcx.jpg' },
  { id: 6, name: 'Butt Ayesha', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082271/Butt_Ayesha_eprjku.jpg' },
  { id: 7, name: 'Abid Mirza Sami Ullah', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082271/ABID_MIRZA_SAMI_ULLAH_x1ppds.jpg' },
  { id: 8, name: 'Yaqoob Muqaddas', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082271/Yaqoob_Muqaddas_e65jpi.jpg' },
  { id: 9, name: 'Shehzadi Nimra', url: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1767082270/SHEHZADI_NIMRA_turcvp.jpg' }
]

const testimonials = [
  {
    name: 'Dr. Sarah Ahmed',
    flag: '🇦🇪',
    program: 'MBBS, Beijing Medical University',
    quote: 'GEC made my dream of studying medicine a reality. From visa processing to airport pickup, they were with me every step.',
    achievement: 'Now practicing at City Hospital, Dubai',
    bgColor: '#00e4ff'
  },
  {
    name: 'Ahmed Hassan',
    flag: '🇵🇰',
    program: 'Computer Science, Tsinghua University',
    quote: 'The guidance I received was beyond expectations. They helped me secure a scholarship and navigate university life in China.',
    achievement: 'Software Engineer at Huawei',
    bgColor: '#deaaff'
  },
  {
    name: 'Fatima Khan',
    flag: '🇵🇰',
    program: 'Business Administration',
    quote: 'I was scared about language barriers, but GEC\'s team made everything smooth. They even helped me set up my bank account.',
    achievement: 'Business Analyst in Karachi',
    bgColor: '#006046'
  },
  {
    name: 'Omar Abdullah',
    flag: '🇸🇦',
    program: 'Engineering, Shanghai Jiao Tong',
    quote: 'GEC\'s doctor team knows exactly what students need. Their advice on university selection was spot-on.',
    achievement: 'Engineer at Saudi Aramco',
    bgColor: '#fccf00'
  },
  {
    name: 'Aisha Rahman',
    flag: '🇧🇩',
    program: 'Architecture, Fudan University',
    quote: 'From application to graduation, GEC was my support system. They answered every midnight WhatsApp message.',
    achievement: 'Architect in Dhaka',
    bgColor: '#ffcbb0'
  }
]

const openDocumentByName = (name) => {
  const doc = documents.find(d => d.name === name)
  if (doc) {
    selectedDocument.value = doc
  }
}
</script>
