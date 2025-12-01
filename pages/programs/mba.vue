<template>
  <div class="program-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span class="text-lg font-semibold">📚 Master's Program</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            MBA - Master of Business Administration
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Build your leadership skills and business acumen with a globally recognized MBA degree from top Chinese universities.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
              Apply Now
            </NuxtLink>
            <a href="https://wa.me/8618672301888" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              WhatsApp: +86 186 7230 1888
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">⏱️</div>
              <h3 class="text-xl font-bold mb-2">Duration</h3>
              <p class="text-gray-600">2 Years Full-Time</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold mb-2">Tuition</h3>
              <p class="text-gray-600">Affordable & Scholarships Available</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="text-xl font-bold mb-2">Language</h3>
              <p class="text-gray-600">English-Taught Programs</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <h2>Program Overview</h2>
            <p>
              Our MBA program offers a comprehensive business education that combines theoretical knowledge with practical application. Designed for aspiring business leaders, the program covers essential management disciplines including finance, marketing, operations, and strategy.
            </p>

            <h3>Why Choose MBA in China?</h3>
            <ul>
              <li><strong>Global Business Perspective:</strong> Learn about the world's second-largest economy and gain insights into Asian markets</li>
              <li><strong>Leadership Development:</strong> Develop essential leadership and management skills for the modern business world</li>
              <li><strong>Networking Opportunities:</strong> Build connections with international students and business professionals</li>
              <li><strong>Affordable Excellence:</strong> World-class education at a fraction of Western MBA costs</li>
              <li><strong>Career Advancement:</strong> Enhance your career prospects with an internationally recognized MBA degree</li>
            </ul>

            <h3>Admission Requirements</h3>
            <ul>
              <li>Bachelor's degree from an accredited institution</li>
              <li>Minimum 2-3 years of work experience (preferred)</li>
              <li>English proficiency (IELTS 6.0+ or equivalent)</li>
              <li>Passport and application documents</li>
              <li>Personal statement and recommendation letters</li>
            </ul>

            <h3>Career Opportunities</h3>
            <p>MBA graduates are well-prepared for leadership roles in various sectors including:</p>
            <ul>
              <li>Corporate Management & Leadership</li>
              <li>Consulting & Strategy</li>
              <li>Finance & Investment Banking</li>
              <li>Entrepreneurship & Startups</li>
              <li>International Business & Trade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Advance Your Career?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Start your MBA journey today. Contact us for free consultation and admission guidance.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
            Get Started Now
          </NuxtLink>
          <a href="https://wa.me/8618672301888" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'MBA - Master of Business Administration in China | GEC',
  meta: [
    { name: 'description', content: 'Pursue an MBA degree in China with GEC. Affordable tuition, English-taught programs, and globally recognized qualifications. Start your leadership journey today.' }
  ]
})
</script>
