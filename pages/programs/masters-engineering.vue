<template>
  <div class="program-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span class="text-lg font-semibold">🎓 Master's Program</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            Master of Engineering
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Develop advanced engineering expertise with flexible specializations and CSC scholarship support.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
              Apply Now
            </NuxtLink>
            <a href="https://wa.me/923114999954" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
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
              <p class="text-gray-600">2-3 Years Full-Time</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold mb-2">Scholarships</h3>
              <p class="text-gray-600">CSC Scholarships Available</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="text-xl font-bold mb-2">Language</h3>
              <p class="text-gray-600">English & Chinese Programs</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <h2>Program Overview</h2>
            <p>
              The Master of Engineering program offers comprehensive postgraduate education in various engineering disciplines. Designed to equip students with advanced technical knowledge and professional skills, the program combines theoretical learning with practical projects and industry collaboration.
            </p>

            <h3>Available Specializations</h3>
            <ul>
              <li><strong>Mechanical Engineering:</strong> Advanced machinery design, thermal engineering, automation</li>
              <li><strong>Civil Engineering:</strong> Infrastructure design, sustainable construction, structural analysis</li>
              <li><strong>Electrical Engineering:</strong> Power systems, renewable energy, electrical machines</li>
              <li><strong>Materials Engineering:</strong> Advanced materials, nanotechnology, material science</li>
              <li><strong>Environmental Engineering:</strong> Water treatment, air quality, sustainable development</li>
              <li><strong>Chemical Engineering:</strong> Process design, biochemical engineering, industrial processes</li>
            </ul>

            <h3>Why Choose Engineering in China?</h3>
            <ul>
              <li><strong>CSC Scholarship Eligibility:</strong> Competitive scholarships from Chinese government for international students</li>
              <li><strong>World-Class Facilities:</strong> State-of-the-art laboratories, testing equipment, and engineering workshops</li>
              <li><strong>Industry Partnerships:</strong> Collaborations with leading engineering firms and manufacturers</li>
              <li><strong>Practical Experience:</strong> Internship opportunities with major Chinese engineering companies</li>
              <li><strong>Global Recognition:</strong> Degrees recognized internationally by engineering boards and professional organizations</li>
            </ul>

            <h3>Admission Requirements</h3>
            <ul>
              <li>Bachelor's degree in Engineering or related discipline</li>
              <li>Minimum GPA 2.8 or equivalent</li>
              <li>English proficiency (IELTS 6.0+ or TOEFL 80+)</li>
              <li>Academic transcripts and diploma</li>
              <li>Statement of purpose</li>
              <li>Two recommendation letters from academic referees</li>
              <li>Valid passport copy</li>
            </ul>

            <h3>Career Opportunities</h3>
            <p>Engineering graduates are equipped for careers in:</p>
            <ul>
              <li>Senior Engineer or Project Manager at engineering firms</li>
              <li>R&D Engineer in manufacturing industries</li>
              <li>Infrastructure Development Specialist</li>
              <li>Environmental & Sustainability Consultant</li>
              <li>Energy Sector Professional</li>
              <li>Academic Researcher and University Lecturer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Master Engineering?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Apply for our Master of Engineering program and receive CSC scholarship support.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
            Get Started Now
          </NuxtLink>
          <a href="https://wa.me/923114999954" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            WhatsApp: +86 186 7230 1888
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Master of Engineering in China | Multiple Specializations | GEC',
  meta: [
    { name: 'description', content: 'Study Master of Engineering in China with CSC scholarships. Choose from multiple specializations including mechanical, civil, electrical, and more. Apply today!' }
  ]
})
</script>
