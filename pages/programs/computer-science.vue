<template>
  <div class="program-page">
    <!-- Hero Section -->
    <section class="hero-section bg-brand-ocean text-white py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span class="text-accent-yellow font-semibold">Technology & Innovation</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            Computer Science & Technology in China
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Study at the forefront of technology in the world's leading tech hub. Learn from cutting-edge research and innovation.
          </p>
          <div class="flex flex-wrap gap-4 justify-center mb-8">
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">4 Years</div>
              <div class="text-sm">Bachelor Program</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">English</div>
              <div class="text-sm">Medium of Teaching</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">Globally</div>
              <div class="text-sm">Recognized Degree</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-full font-semibold text-lg">
              Get Started Now
            </NuxtLink>
            <a href="https://wa.me/8618672301888" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose CS in China -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Why Study Computer Science in China?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            China is at the forefront of technological innovation, AI development, and digital transformation
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🚀</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">Tech Innovation Hub</h3>
            <p class="text-gray-600">
              Study in the country leading global tech innovation. Home to Alibaba, Tencent, Huawei, ByteDance, and countless startups pushing boundaries in AI, 5G, and quantum computing.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">💻</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Cutting-Edge Curriculum</h3>
            <p class="text-gray-600">
              Learn latest technologies including AI, Machine Learning, Big Data, Cloud Computing, Blockchain, IoT, and Cybersecurity. Curriculum updated regularly to match industry demands.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🏢</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">Industry Connections</h3>
            <p class="text-gray-600">
              Access to internships and projects with top tech companies. Strong industry partnerships provide real-world experience and excellent job placement opportunities.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-yellow/30 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🔬</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Research Excellence</h3>
            <p class="text-gray-600">
              Participate in groundbreaking research projects. Chinese universities invest heavily in CS research with state-of-the-art labs and equipment for student projects.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-peach/30 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🌏</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">Global Career Opportunities</h3>
            <p class="text-gray-600">
              Degree recognized worldwide. Graduates work in top tech companies globally or start their own ventures. Strong alumni network across international tech industry.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Excellent Value</h3>
            <p class="text-gray-600">
              World-class education at affordable cost. Scholarships available for outstanding students. Living expenses much lower than Western countries offering similar quality programs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specializations -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Specialization Tracks</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your focus area based on your interests and career goals
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-xl font-bold mb-3 text-primary">Artificial Intelligence</h3>
            <p class="text-gray-600 text-sm">
              Machine learning, deep learning, neural networks, computer vision, natural language processing, and robotics.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-xl font-bold mb-3 text-secondary">Data Science & Big Data</h3>
            <p class="text-gray-600 text-sm">
              Data analytics, big data technologies, data mining, predictive modeling, business intelligence, and data visualization.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🔒</div>
            <h3 class="text-xl font-bold mb-3 text-primary">Cybersecurity</h3>
            <p class="text-gray-600 text-sm">
              Network security, ethical hacking, cryptography, security protocols, penetration testing, and information assurance.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">☁️</div>
            <h3 class="text-xl font-bold mb-3 text-secondary">Cloud Computing</h3>
            <p class="text-gray-600 text-sm">
              Cloud architecture, distributed systems, virtualization, container orchestration, serverless computing, and DevOps.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3 text-primary">Software Engineering</h3>
            <p class="text-gray-600 text-sm">
              Software development lifecycle, agile methodologies, design patterns, mobile app development, web development, and testing.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🔗</div>
            <h3 class="text-xl font-bold mb-3 text-secondary">Blockchain & Cryptocurrency</h3>
            <p class="text-gray-600 text-sm">
              Distributed ledger technology, smart contracts, cryptocurrency, consensus algorithms, DeFi, and Web3 applications.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🌐</div>
            <h3 class="text-xl font-bold mb-3 text-primary">Internet of Things</h3>
            <p class="text-gray-600 text-sm">
              IoT architecture, sensor networks, embedded systems, edge computing, smart devices, and industrial IoT applications.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🎮</div>
            <h3 class="text-xl font-bold mb-3 text-secondary">Game Development</h3>
            <p class="text-gray-600 text-sm">
              Game engines, 3D graphics, VR/AR development, game physics, multiplayer systems, and interactive media design.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Universities -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Top CS Universities in China</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            World-ranked institutions offering excellent computer science programs
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Tsinghua University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-primary to-accent-purple/70 p-6 text-white">
              <h3 class="text-white text-2xl font-bold mb-2">Tsinghua University</h3>
              <p class="text-gray-300">Department of Computer Science & Technology</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Beijing (Capital City)</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">#1 CS program in Asia, Top 15 globally</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• China's MIT - premier engineering university</li>
                    <li>• World-leading AI and robotics research</li>
                    <li>• Strong industry partnerships with tech giants</li>
                    <li>• State-of-the-art research laboratories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Peking University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-secondary to-primary p-6 text-white">
              <h3 class="text-white text-2xl font-bold mb-2">Peking University</h3>
              <p class="text-gray-300">School of Electronics Engineering & Computer Science</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Beijing (Capital City)</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 20 CS programs worldwide</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Prestigious comprehensive research university</li>
                    <li>• Excellence in theoretical computer science</li>
                    <li>• Strong international faculty and exchange programs</li>
                    <li>• Beautiful historic campus environment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Zhejiang University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-accent-peach/70 to-secondary p-6 text-white">
              <h3 class="text-white text-2xl font-bold mb-2">Zhejiang University</h3>
              <p class="text-gray-300">College of Computer Science & Technology</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Hangzhou, Zhejiang (Alibaba Headquarters)</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 30 CS programs worldwide</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Located in China's tech startup hub</li>
                    <li>• Strong industry collaboration with Alibaba</li>
                    <li>• Excellence in AI and cloud computing</li>
                    <li>• Outstanding entrepreneurship support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Shanghai Jiao Tong University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-accent-yellow/80 to-primary p-6 text-white">
              <h3 class="text-white text-2xl font-bold mb-2">Shanghai Jiao Tong University</h3>
              <p class="text-gray-300">School of Software</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Shanghai (Financial Hub)</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 50 CS programs globally</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Located in China's most international city</li>
                    <li>• Strong software engineering focus</li>
                    <li>• Excellent internship opportunities</li>
                    <li>• Modern campus with advanced facilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Opportunities -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Career Opportunities</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Computer science graduates are in high demand globally across all industries
          </p>
        </div>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">💼</div>
            <h3 class="font-bold text-lg mb-2">Software Developer</h3>
            <p class="text-gray-600 text-sm">Full-stack, backend, frontend development</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">📊</div>
            <h3 class="font-bold text-lg mb-2">Data Scientist</h3>
            <p class="text-gray-600 text-sm">Big data analytics and insights</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">🤖</div>
            <h3 class="font-bold text-lg mb-2">AI/ML Engineer</h3>
            <p class="text-gray-600 text-sm">Artificial intelligence solutions</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">🔒</div>
            <h3 class="font-bold text-lg mb-2">Security Analyst</h3>
            <p class="text-gray-600 text-sm">Cybersecurity and protection</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">☁️</div>
            <h3 class="font-bold text-lg mb-2">Cloud Architect</h3>
            <p class="text-gray-600 text-sm">Cloud infrastructure design</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">📱</div>
            <h3 class="font-bold text-lg mb-2">Mobile App Developer</h3>
            <p class="text-gray-600 text-sm">iOS and Android applications</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">🎮</div>
            <h3 class="font-bold text-lg mb-2">Game Developer</h3>
            <p class="text-gray-600 text-sm">Interactive entertainment</p>
          </div>

          <div class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all">
            <div class="text-3xl mb-3">🚀</div>
            <h3 class="font-bold text-lg mb-2">Tech Entrepreneur</h3>
            <p class="text-gray-600 text-sm">Start your own tech venture</p>
          </div>
        </div>

        <div class="mt-12 max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h3 class="text-2xl font-bold mb-4 text-center text-primary">Average Salary Ranges</h3>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="text-3xl font-bold text-secondary mb-2">$40K - $70K</div>
              <div class="text-gray-600">Entry Level (Pakistan/India)</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-primary mb-2">$60K - $120K</div>
              <div class="text-gray-600">Mid-Level (China/Asia)</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-accent-yellow mb-2">$100K - $200K+</div>
              <div class="text-gray-600">Senior Level (USA/Europe)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-accent to-primary text-black">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Launch Your Tech Career in China</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Study computer science at world-class universities. Get expert guidance from our team of 50+ professionals with 95% visa success rate.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="btn-primary px-8 py-4 rounded-lg font-semibold text-lg">
            Enroll Now
          </NuxtLink>
          <a href="https://wa.me/8618672301888" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all">
            WhatsApp: +86 186 7230 1888
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Computer Science in China - BS CS & Technology | Study CS Abroad | GEC Pathways',
  meta: [
    { name: 'description', content: 'Study Computer Science & Technology in China at top-ranked universities. Learn AI, Machine Learning, Big Data, Cloud Computing. English medium programs. Expert guidance from GEC.' },
    { name: 'keywords', content: 'computer science china, cs degree china, study cs abroad, ai machine learning, software engineering china, tech education, computer science abroad' }
  ]
})
</script>

<style scoped>
.btn-primary, .btn-secondary {
  display: inline-block;
  text-align: center;
}

.feature-card, .university-card {
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>
