<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary to-secondary text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            GEC Blog
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Expert insights, guides, and tips for studying in China
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Blog Post 1 -->
            <NuxtLink to="/blog/mbbs-china-vs-pakistan" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-primary to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Medical Education</div>
                <h2 class="text-xl font-bold mb-3">MBBS in China vs Pakistan: Complete Comparison 2025</h2>
                <p class="text-gray-600 text-sm mb-4">Detailed comparison of costs, quality, career prospects, and more to help you make the right decision.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 2 -->
            <NuxtLink to="/blog/pmc-licensing-exam-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-secondary to-accent-purple/70"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Licensing Exams</div>
                <h2 class="text-xl font-bold mb-3">How to Clear PMC Licensing Exam After MBBS from China</h2>
                <p class="text-gray-600 text-sm mb-4">Complete guide with preparation tips, study strategies, and success secrets from our graduates.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 3 -->
            <NuxtLink to="/blog/top-medical-universities-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-yellow/80 to-primary"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Universities</div>
                <h2 class="text-xl font-bold mb-3">Top 10 Medical Universities in China for Pakistani Students</h2>
                <p class="text-gray-600 text-sm mb-4">PMC-recognized universities with excellent facilities, teaching quality, and student support.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 4 -->
            <NuxtLink to="/blog/student-life-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-peach/80 to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Student Life</div>
                <h2 class="text-xl font-bold mb-3">Student Life in China: What to Expect as an International Student</h2>
                <p class="text-gray-600 text-sm mb-4">From accommodation to food, culture to social life - everything you need to know.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 5 -->
            <NuxtLink to="/blog/chinese-student-visa-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-primary to-accent-purple/70"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Visa Guide</div>
                <h2 class="text-xl font-bold mb-3">Chinese Student Visa (X1): Complete Application Guide 2025</h2>
                <p class="text-gray-600 text-sm mb-4">Step-by-step process, required documents, and tips for 100% visa success.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 6 -->
            <NuxtLink to="/blog/scholarships-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-secondary to-primary"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Scholarships</div>
                <h2 class="text-xl font-bold mb-3">Scholarships for Pakistani Students in China 2025</h2>
                <p class="text-gray-600 text-sm mb-4">Complete guide to government and university scholarships with application tips.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 7 -->
            <NuxtLink to="/blog/hsk-exam-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-purple/70 to-accent-yellow/80"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Chinese Language</div>
                <h2 class="text-xl font-bold mb-3">HSK Exam Guide: Levels, Preparation & Tips</h2>
                <p class="text-gray-600 text-sm mb-4">Everything about HSK levels 1-6, preparation strategies, and how to pass.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 8 -->
            <NuxtLink to="/blog/cost-of-living-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-primary to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Budget Guide</div>
                <h2 class="text-xl font-bold mb-3">Cost of Living in China for International Students 2025</h2>
                <p class="text-gray-600 text-sm mb-4">Detailed breakdown of accommodation, food, transport, and entertainment costs.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 9 -->
            <NuxtLink to="/blog/cpec-opportunities" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-yellow/80 to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Career Opportunities</div>
                <h2 class="text-xl font-bold mb-3">CPEC Career Opportunities for China-Educated Graduates</h2>
                <p class="text-gray-600 text-sm mb-4">How studying in China opens doors to CPEC projects and high-paying jobs.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 10 -->
            <NuxtLink to="/blog/halal-food-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-secondary to-accent-peach/80"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Muslim Students</div>
                <h2 class="text-xl font-bold mb-3">Halal Food Guide for Muslim Students in China</h2>
                <p class="text-gray-600 text-sm mb-4">Finding halal restaurants, Muslim communities, and prayer facilities in Chinese cities.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 11 -->
            <NuxtLink to="/blog/engineering-programs-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-primary to-accent-purple/70"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Engineering</div>
                <h2 class="text-xl font-bold mb-3">Best Engineering Programs in China for International Students</h2>
                <p class="text-gray-600 text-sm mb-4">Top universities, specializations, and career prospects in engineering fields.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 12 -->
            <NuxtLink to="/blog/learning-chinese-language-tips" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-purple/70 to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Language Learning</div>
                <h2 class="text-xl font-bold mb-3">How to Learn Chinese Fast: Tips from Successful Students</h2>
                <p class="text-gray-600 text-sm mb-4">Proven strategies to master Mandarin Chinese quickly and effectively.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 13 -->
            <NuxtLink to="/blog/cultural-adaptation-guide" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-primary to-secondary"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Culture</div>
                <h2 class="text-xl font-bold mb-3">Cultural Adaptation: Thriving as an International Student in China</h2>
                <p class="text-gray-600 text-sm mb-4">Understanding Chinese culture, customs, and how to adapt successfully.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 14 -->
            <NuxtLink to="/blog/part-time-jobs-international-students-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-accent-yellow/80 to-primary"></div>
              <div class="p-6">
                <div class="text-sm text-secondary font-semibold mb-2">Jobs & Finance</div>
                <h2 class="text-xl font-bold mb-3">Part-Time Jobs for International Students in China</h2>
                <p class="text-gray-600 text-sm mb-4">Legal opportunities to earn while studying and gain work experience.</p>
                <div class="text-secondary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>

            <!-- Blog Post 15 -->
            <NuxtLink to="/blog/after-graduation-options-china" class="blog-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="h-48 bg-gradient-to-br from-secondary to-accent-peach/80"></div>
              <div class="p-6">
                <div class="text-sm text-primary font-semibold mb-2">Career Planning</div>
                <h2 class="text-xl font-bold mb-3">What to Do After Graduation: Career Options for China Graduates</h2>
                <p class="text-gray-600 text-sm mb-4">Work in China, return home, or go global - explore your career pathways.</p>
                <div class="text-primary font-semibold text-sm">Read More →</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog - Study in China Guides & Tips | GEC Global Educational Consultants',
  meta: [
    { name: 'description', content: 'Expert guides and tips for studying in China. MBBS, engineering, scholarships, student life, and more from GEC - Global Educational Consultants.' }
  ]
})
</script>

<style scoped>
.blog-card {
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
}
</style>
