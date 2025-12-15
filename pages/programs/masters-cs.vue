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
            MSc Computer Science
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Master advanced computing technologies with specialized focus on AI & Machine Learning from leading Chinese universities.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
              Apply Now
            </NuxtLink>
            <a href="https://wa.me/923114999954" class="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105">
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
              <h3 class="text-xl font-bold mb-2">Tuition</h3>
              <p class="text-gray-600">Research Grants & Scholarships Available</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="text-xl font-bold mb-2">Language</h3>
              <p class="text-gray-600">English-Taught Program</p>
            </div>
          </div>

          <div class="prose max-w-none">
            <h2>Program Overview</h2>
            <p>
              Our Master of Science in Computer Science program is designed for students seeking to advance their expertise in cutting-edge computing technologies. With a strong emphasis on AI & Machine Learning, this research-focused program combines theoretical knowledge with practical research experience in state-of-the-art laboratories.
            </p>

            <h3>Program Specializations</h3>
            <ul>
              <li><strong>Artificial Intelligence & Machine Learning:</strong> Deep learning, neural networks, natural language processing</li>
              <li><strong>Data Science:</strong> Big data analytics, data mining, statistical learning</li>
              <li><strong>Software Engineering:</strong> System design, cloud computing, software architecture</li>
              <li><strong>Cybersecurity:</strong> Network security, cryptography, information security</li>
              <li><strong>Computer Vision:</strong> Image processing, pattern recognition, computer vision applications</li>
            </ul>

            <h3>Why Choose MSc Computer Science in China?</h3>
            <ul>
              <li><strong>Research Excellence:</strong> Access to advanced laboratories and cutting-edge research facilities</li>
              <li><strong>AI Leadership:</strong> Study in the world's leading hub for artificial intelligence innovation</li>
              <li><strong>Industry Connections:</strong> Collaborate with leading tech companies like Alibaba, Huawei, and Baidu</li>
              <li><strong>Publication Opportunities:</strong> Publish your research in international peer-reviewed journals</li>
              <li><strong>Affordable Tuition:</strong> Lower costs compared to Western universities with equivalent quality</li>
            </ul>

            <h3>Admission Requirements</h3>
            <ul>
              <li>Bachelor's degree in Computer Science, Engineering, or related field</li>
              <li>Strong academic background (GPA 3.0+ or equivalent)</li>
              <li>English proficiency (IELTS 6.5+ or TOEFL 90+)</li>
              <li>Statement of purpose and academic interests</li>
              <li>Two academic recommendation letters</li>
              <li>Programming skills and mathematical background</li>
            </ul>

            <h3>Career Opportunities</h3>
            <p>MSc Computer Science graduates pursue careers in:</p>
            <ul>
              <li>Machine Learning Engineer at major tech companies</li>
              <li>Data Scientist in finance, healthcare, or e-commerce</li>
              <li>Software Engineer in cloud computing and distributed systems</li>
              <li>Security Researcher in cybersecurity firms</li>
              <li>Academic Researcher in top universities</li>
              <li>AI Research Scientist at tech companies and research institutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Advance Your Tech Career?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Join our MSc Computer Science program and become a leader in AI and machine learning innovation.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
            Get Started Now
          </NuxtLink>
          <a href="https://wa.me/923114999954" class="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105">
            WhatsApp: +86 186 7230 1888
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'MSc Computer Science in China | AI & ML Specialization | GEC',
  meta: [
    { name: 'description', content: 'Pursue an MSc in Computer Science in China with specialization in AI & Machine Learning. Research-focused program at top universities. Apply now!' }
  ]
})
</script>
