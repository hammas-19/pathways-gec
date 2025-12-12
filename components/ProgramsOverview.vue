<template>
  <section class="section bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-semibold mb-4">
          <span class="text-xl">🎓</span>
          <span>Academic Excellence</span>
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Explore Our Programs
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          From MBBS to AI, find the perfect program to launch your global career
        </p>
      </div>

      <!-- Program Level Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button type="button" v-for="level in programLevels" :key="level.id" @click="activeLevel = level.id" :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-300',
            activeLevel === level.id
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg'
          ]">
          <span class="mr-2">{{ level.icon }}</span>
          {{ level.name }}
        </button>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- MBBS Highlighted Card (Only for Undergraduate) -->
        <div v-show="activeLevel === 'undergraduate'"
          class="group relative col-span-1 md:col-span-2 lg:col-span-2 card card-hover p-8 overflow-hidden">
          <!-- Decorative Background -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-full blur-3xl">
          </div>

          <!-- Popular Badge -->
          <div class="absolute top-6 right-6 z-40">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-semibold text-sm shadow-button animate-bounce-subtle">
              <span>🏆</span>
              <span>Most Popular</span>
            </div>
          </div>

          <div class="relative z-10">
            <!-- Icon Container -->
            <div
              class="relative aspect-video bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-teal/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img src="https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361600/MBBS_p5zzax.png"
                alt="MBBS Program" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-purple/20 rounded-2xl"></div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="badge badge-primary">5-6 Years</span>
              <span
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-amber/10 text-brand-amber">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                95% Visa Success
              </span>
              <span class="badge badge-success">English Taught</span>
            </div>

            <h3 class="text-3xl font-bold mb-4 text-brand-ocean">MBBS (Bachelor of Medicine & Surgery)</h3>

            <!-- Features List -->
            <ul class="space-y-3 mb-6 text-slate-700">
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>WHO & PMC Recognized</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>English-Medium Programs</span>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Clinical Rotations from Year 3</span>
              </li>
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 rounded-lg bg-brand-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-4 h-4 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Affordable Tuition (50% less than Western countries)</span>
              </li>
            </ul>

            <!-- CTA Section -->
            <div class="flex justify-end gap-4 pt-4 border-t border-slate-100">
              <NuxtLink to="/programs/mbbs" class="btn-primary">
                Explore MBBS
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Other Program Cards -->
        <div v-for="(program, index) in filteredPrograms" :key="program.slug"
          class="group card p-0 flex flex-col relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <!-- Badge -->
          <div v-if="program.badge" class="absolute top-4 right-4 z-40">
            <span
              class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand-amber to-brand-orange text-white text-xs font-semibold shadow-lg">
              <span>⭐</span>
              {{ program.badge }}
            </span>
          </div>

          <!-- Icon Container - Full Width Image -->
          <div
            class="relative aspect-video bg-gradient-to-br from-brand-blue/20 via-brand-purple/20 to-brand-teal/20 overflow-hidden">
            <img :src="program.image" :alt="program.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <!-- Overlay Gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500">
            </div>
            <!-- Duration Badge on Image -->
            <div class="absolute bottom-4 left-4">
              <span
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass backdrop-blur-md text-white font-semibold text-sm shadow-lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ program.duration }}
              </span>
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-6 flex flex-col flex-grow bg-gradient-to-br from-white to-slate-50/50">
            <h3
              class="text-xl font-bold mb-4 text-brand-ocean group-hover:text-brand-blue transition-colors leading-tight">
              {{ program.title }}</h3>

            <!-- Features List -->
            <ul class="space-y-2.5 mb-6 text-sm text-slate-700 flex-grow">
              <li v-for="(feature, idx) in program.features" :key="idx" class="flex items-start gap-2.5">
                <div
                  class="w-5 h-5 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="leading-snug">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA Section -->
            <div class="mt-auto pt-4">
              <NuxtLink :to="`/programs/${program.slug}`"
                class="group/btn relative w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/30">
                <span class="relative z-10">Learn More</span>
                <svg class="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-teal opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Removed useScrollReveal() call to avoid runtime side-effects and keep tabs simple

// Active program level
const activeLevel = ref('undergraduate')

// Program level tabs
const programLevels = [
  { id: 'undergraduate', name: 'Undergraduate', icon: '🎓' },
  { id: 'masters', name: "Master's", icon: '📚' },
  { id: 'phd', name: 'PhD', icon: '🔬' },
  { id: 'short-courses', name: 'Short Courses', icon: '⚡' }
]

// All programs organized by level
const allPrograms = {
  undergraduate: [
    {
      title: 'BDS (Bachelor of Dental Surgery)',
      slug: 'bds',
      icon: '🦷',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361609/BDS_uktleh.png',
      duration: '5 Years',
      level: 'undergraduate',
      features: [
        'Modern Facilities',
        'Clinical Training',
        'International Recognition',
        'Affordable Fees'
      ]
    },
    {
      title: 'Computer Science',
      slug: 'computer-science',
      icon: '💻',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361594/CS_bclm6n.png',
      badge: 'High Demand',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'AI/ML Specialization',
        'Industry-Led Projects',
        'Top-Ranked Universities',
        '95% Job Placement'
      ]
    },
    {
      title: 'International Economy & Trade',
      slug: 'economy-trade',
      icon: '💼',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361602/international_trade_and_business_pjjvcz.png',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'Global Business Focus',
        'Internship Opportunities',
        'English-Taught Programs',
        'Career-Ready Curriculum'
      ]
    },
    {
      title: 'International Relations',
      slug: 'international-relations',
      icon: '🌐',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361613/documentSubmission_owhddv.png',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'Diplomatic Career Preparation',
        'Multilingual Environment',
        'Policy & Governance Focus',
        'Global Networking'
      ]
    },
    {
      title: 'Nursing',
      slug: 'nursing',
      icon: '👩‍⚕️',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361593/mbbs2_ktn8tf.png',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'Practical Clinical Training',
        'International Nursing Standards',
        'High Demand Globally',
        'English Programs Available'
      ]
    },
    {
      title: 'Artificial Intelligence',
      slug: 'artificial-intelligence',
      icon: '🤖',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361591/CS2_lzm9ts.png',
      badge: 'Emerging Field',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'Cutting-Edge Curriculum',
        'Research Opportunities',
        'Industry Partnerships',
        'Future-Proof Career'
      ]
    },
    {
      title: 'Engineering',
      slug: 'engineering',
      icon: '⚙️',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361597/heartImage_di4ieu.png',
      duration: '4 Years',
      level: 'undergraduate',
      features: [
        'Multiple Specializations',
        'State-of-the-Art Labs',
        'Industry Partnerships',
        'Global Career Opportunities'
      ]
    }
  ],
  masters: [
    {
      title: 'Master of Business Administration',
      slug: 'mba',
      icon: '💼',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361602/international_trade_and_business_pjjvcz.png',
      badge: 'Popular',
      duration: '2 Years',
      level: 'masters',
      features: [
        'Global Business Perspective',
        'Leadership Development',
        'Networking Opportunities',
        'English-Taught Programs'
      ]
    },
    {
      title: 'Master in Computer Science',
      slug: 'masters-cs',
      icon: '💻',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361594/CS_bclm6n.png',
      duration: '2-3 Years',
      level: 'masters',
      features: [
        'Advanced AI & ML',
        'Research-Focused',
        'Industry Collaboration',
        'Scholarship Opportunities'
      ]
    },
    {
      title: 'Master in Engineering',
      slug: 'masters-engineering',
      icon: '⚙️',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361604/initialcontact_ktxbli.png',
      duration: '2-3 Years',
      level: 'masters',
      features: [
        'Various Specializations',
        'Research Projects',
        'Industry Experience',
        'CSC Scholarships Available'
      ]
    },
    {
      title: 'Master in International Relations',
      slug: 'masters-ir',
      icon: '🌐',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361592/document_visa_tjvhjq.png',
      duration: '2 Years',
      level: 'masters',
      features: [
        'Global Policy Focus',
        'Diplomatic Training',
        'Multilingual Environment',
        'Career in International Organizations'
      ]
    }
  ],
  phd: [
    {
      title: 'PhD in Computer Science',
      slug: 'phd-cs',
      icon: '💻',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361594/CS_bclm6n.png',
      duration: '3-4 Years',
      level: 'phd',
      features: [
        'Advanced Research',
        'Full Scholarships Available',
        'Publication Opportunities',
        'Academic Career Path'
      ]
    },
    {
      title: 'PhD in Engineering',
      slug: 'phd-engineering',
      icon: '⚙️',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361613/documentSubmission_owhddv.png',
      duration: '3-4 Years',
      level: 'phd',
      features: [
        'Research Excellence',
        'CSC Scholarships',
        'State-of-the-Art Facilities',
        'International Collaboration'
      ]
    },
    {
      title: 'PhD in Medicine',
      slug: 'phd-medicine',
      icon: '🩺',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361596/mbbs3_b5quti.png',
      badge: 'Research',
      duration: '3-5 Years',
      level: 'phd',
      features: [
        'Medical Research',
        'Clinical Studies',
        'Full Funding Available',
        'International Recognition'
      ]
    },
    {
      title: 'PhD in Business Administration',
      slug: 'phd-business',
      icon: '💼',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361597/heartImage_di4ieu.png',
      duration: '3-4 Years',
      level: 'phd',
      features: [
        'Business Research',
        'Academic Career',
        'Scholarship Opportunities',
        'Global Network'
      ]
    }
  ],
  'short-courses': [
    {
      title: 'Chinese Language (1 Year)',
      slug: 'language-1year',
      icon: '📚',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361596/chineseHsk_varssq.png',
      badge: 'Popular',
      duration: '1 Year',
      level: 'short-courses',
      features: [
        'HSK 3, 4, 6 Preparation',
        'Qualified Foreign Teachers',
        'Mock Exams & Cultural Activities',
        'Scholarship Opportunities'
      ]
    },
    {
      title: 'Chinese Language (6 Months)',
      slug: 'language-6months',
      icon: '📚',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361604/hsk3_frrktf.png',
      duration: '6 Months',
      level: 'short-courses',
      features: [
        'Intensive Language Training',
        'HSK Exam Preparation',
        'Cultural Immersion',
        'Fast-Track Learning'
      ]
    },
    {
      title: 'Business Chinese',
      slug: 'business-chinese',
      icon: '💼',
      image: 'https://res.cloudinary.com/drvlk5jyk/image/upload/v1765361591/MBBSGuide_frcubp.png',
      duration: '3-6 Months',
      level: 'short-courses',
      features: [
        'Business Communication',
        'Professional Vocabulary',
        'Networking Skills',
        'Certificate Program'
      ]
    },
    {
      title: 'Summer Programs',
      slug: 'summer-programs',
      icon: '☀️',
      image: '/studentlife3.png',
      duration: '2-8 Weeks',
      level: 'short-courses',
      features: [
        'Cultural Exchange',
        'Language & Culture',
        'City Tours & Activities',
        'Certificate of Completion'
      ]
    }
  ]
}

// Computed property to filter programs based on active level
const filteredPrograms = computed(() => {
  return allPrograms[activeLevel.value] || []
})
</script>
