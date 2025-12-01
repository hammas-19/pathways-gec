<template>
  <div class="program-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-secondary to-primary text-white py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span class="text-accent-yellow font-semibold">Engineering Excellence</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            Engineering Programs in China
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            World-class engineering education in the country building the future. Multiple specializations available.
          </p>
          <div class="flex flex-wrap gap-4 justify-center mb-8">
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">4 Years</div>
              <div class="text-sm">Bachelor Degree</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">English</div>
              <div class="text-sm">Medium of Teaching</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div class="text-2xl font-bold text-accent-yellow">Multiple</div>
              <div class="text-sm">Specializations</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary bg-accent-yellow text-white hover:bg-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              Get Started Now
            </NuxtLink>
            <a href="https://wa.me/8618672301888" class="btn-secondary bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Engineering in China -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Why Study Engineering in China?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            China leads the world in infrastructure, manufacturing, and technological innovation
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🏗️</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">World's Largest Engineering Projects</h3>
            <p class="text-gray-600">
              Study in the country that built the world's longest high-speed rail network, largest dams, and most impressive infrastructure. Witness engineering marvels firsthand.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🔬</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Cutting-Edge Research</h3>
            <p class="text-gray-600">
              Access to state-of-the-art laboratories and equipment. Participate in groundbreaking research in renewable energy, robotics, materials science, and aerospace engineering.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🏭</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">Industry Integration</h3>
            <p class="text-gray-600">
              Strong partnerships with manufacturing giants, tech companies, and construction firms. Internship opportunities with companies shaping global engineering standards.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-yellow/30 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🎓</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Top-Ranked Universities</h3>
            <p class="text-gray-600">
              Chinese engineering universities rank among the world's best. Many programs recognized by Washington Accord and international professional engineering bodies.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-peach/30 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">💰</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-primary">Affordable Excellence</h3>
            <p class="text-gray-600">
              World-class engineering education at a fraction of the cost in Western countries. Government scholarships available for outstanding international students.
            </p>
          </div>

          <div class="feature-card bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
            <div class="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
              <span class="text-3xl">🌍</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-secondary">Global Career Prospects</h3>
            <p class="text-gray-600">
              Engineers from China work on projects worldwide. International degree recognition opens doors to careers in Belt and Road Initiative countries and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Engineering Specializations -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Engineering Specializations</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of engineering disciplines
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Civil Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🏗️</div>
            <h3 class="text-2xl font-bold mb-3 text-primary">Civil Engineering</h3>
            <p class="text-gray-600 mb-4">
              Structural design, construction management, transportation systems, geotechnical engineering, and infrastructure development.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Structural Engineer, Construction Manager, Infrastructure Planner
            </div>
          </div>

          <!-- Mechanical Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">⚙️</div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Mechanical Engineering</h3>
            <p class="text-gray-600 mb-4">
              Thermodynamics, fluid mechanics, machine design, manufacturing processes, robotics, and automotive engineering.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Design Engineer, Manufacturing Engineer, Automotive Engineer
            </div>
          </div>

          <!-- Electrical Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-2xl font-bold mb-3 text-primary">Electrical Engineering</h3>
            <p class="text-gray-600 mb-4">
              Power systems, electronics, control systems, renewable energy, smart grids, and electrical machine design.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Power Engineer, Control Systems Engineer, Electronics Designer
            </div>
          </div>

          <!-- Chemical Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🧪</div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Chemical Engineering</h3>
            <p class="text-gray-600 mb-4">
              Process engineering, petrochemicals, pharmaceuticals, materials synthesis, environmental engineering, and biochemical processes.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Process Engineer, Petrochemical Engineer, Materials Scientist
            </div>
          </div>

          <!-- Aerospace Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">✈️</div>
            <h3 class="text-2xl font-bold mb-3 text-primary">Aerospace Engineering</h3>
            <p class="text-gray-600 mb-4">
              Aircraft design, propulsion systems, aerodynamics, space technology, avionics, and satellite engineering.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Aerospace Engineer, Aircraft Designer, Space Systems Engineer
            </div>
          </div>

          <!-- Environmental Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🌱</div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Environmental Engineering</h3>
            <p class="text-gray-600 mb-4">
              Water treatment, air pollution control, waste management, sustainable development, and environmental impact assessment.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Environmental Engineer, Sustainability Consultant, Water Resources Engineer
            </div>
          </div>

          <!-- Biomedical Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🏥</div>
            <h3 class="text-2xl font-bold mb-3 text-primary">Biomedical Engineering</h3>
            <p class="text-gray-600 mb-4">
              Medical devices, prosthetics, tissue engineering, medical imaging, biomaterials, and healthcare technology.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Biomedical Engineer, Medical Device Designer, Clinical Engineer
            </div>
          </div>

          <!-- Materials Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">🔩</div>
            <h3 class="text-2xl font-bold mb-3 text-secondary">Materials Engineering</h3>
            <p class="text-gray-600 mb-4">
              Nanomaterials, metallurgy, polymer science, ceramics, composite materials, and materials characterization.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Materials Scientist, Metallurgical Engineer, R&D Engineer
            </div>
          </div>

          <!-- Industrial Engineering -->
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-2xl font-bold mb-3 text-primary">Industrial Engineering</h3>
            <p class="text-gray-600 mb-4">
              Operations research, supply chain management, quality control, production planning, and systems optimization.
            </p>
            <div class="text-sm text-gray-500">
              <strong>Career:</strong> Operations Manager, Quality Engineer, Supply Chain Analyst
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Top Engineering Universities -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Top Engineering Universities</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Study at world-renowned institutions leading engineering innovation
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Tsinghua University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-primary to-secondary p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Tsinghua University</h3>
              <p class="text-gray-200">School of Engineering</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Beijing</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">#1 Engineering in Asia, Top 10 globally</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• China's premier engineering university</li>
                    <li>• All engineering disciplines available</li>
                    <li>• World-class research facilities</li>
                    <li>• Strong industry partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Harbin Institute of Technology -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-secondary to-accent-purple/70 p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Harbin Institute of Technology</h3>
              <p class="text-gray-200">Multiple Engineering Schools</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Harbin, Heilongjiang</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 50 Engineering schools worldwide</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Excellence in aerospace engineering</li>
                    <li>• Strong robotics and automation programs</li>
                    <li>• Affordable living costs</li>
                    <li>• Beautiful winter campus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Shanghai Jiao Tong University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-accent-peach/70 to-primary p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Shanghai Jiao Tong University</h3>
              <p class="text-gray-200">School of Mechanical Engineering</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Shanghai</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 100 Engineering schools globally</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Located in China's industrial hub</li>
                    <li>• Strong mechanical and naval engineering</li>
                    <li>• Excellent internship opportunities</li>
                    <li>• International city environment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Zhejiang University -->
          <div class="university-card bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all">
            <div class="bg-gradient-to-br from-accent-yellow/80 to-secondary p-6 text-white">
              <h3 class="text-2xl font-bold mb-2">Zhejiang University</h3>
              <p class="text-gray-200">College of Engineering</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">📍</span> Location
                  </div>
                  <div class="font-semibold">Hangzhou, Zhejiang</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">🏆</span> Global Ranking
                  </div>
                  <div class="font-semibold">Top 100 Engineering schools globally</div>
                </div>
                <div>
                  <div class="flex items-center text-sm text-gray-500 mb-1">
                    <span class="mr-2">✨</span> Highlights
                  </div>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Comprehensive engineering programs</li>
                    <li>• Beautiful lakeside campus</li>
                    <li>• Strong research output</li>
                    <li>• Excellent student facilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Structure -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">4-Year Program Structure</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum balancing theory, practice, and research
          </p>
        </div>

        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
              <h3 class="text-xl font-bold text-primary">Year 1: Foundation</h3>
            </div>
            <ul class="space-y-2 text-gray-700 ml-13">
              <li>• Mathematics (Calculus, Linear Algebra)</li>
              <li>• Physics and Chemistry fundamentals</li>
              <li>• Introduction to Engineering</li>
              <li>• Programming and Computer Skills</li>
              <li>• English and Chinese Language</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
              <h3 class="text-xl font-bold text-primary">Year 2: Core Courses</h3>
            </div>
            <ul class="space-y-2 text-gray-700 ml-13">
              <li>• Specialized engineering subjects</li>
              <li>• Engineering mechanics and materials</li>
              <li>• Circuit analysis and electronics</li>
              <li>• Laboratory work and experiments</li>
              <li>• Technical drawing and CAD</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
              <h3 class="text-xl font-bold text-secondary">Year 3: Specialization</h3>
            </div>
            <ul class="space-y-2 text-gray-700 ml-13">
              <li>• Advanced courses in chosen field</li>
              <li>• Design projects and simulations</li>
              <li>• Research methodology</li>
              <li>• Industrial visits and training</li>
              <li>• Elective courses</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-3">4</div>
              <h3 class="text-xl font-bold text-secondary">Year 4: Application</h3>
            </div>
            <ul class="space-y-2 text-gray-700 ml-13">
              <li>• Capstone/graduation project</li>
              <li>• Industry internship (3-6 months)</li>
              <li>• Advanced electives</li>
              <li>• Thesis preparation and defense</li>
              <li>• Career preparation workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-secondary via-primary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Engineer Your Future in China</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of international students studying engineering at China's top universities. Expert guidance from GEC's team of 50+ professionals.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="bg-accent-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all">
            Apply for Engineering
          </NuxtLink>
          <a href="https://wa.me/8618672301888" class="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
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
  title: 'Engineering in China - Civil, Mechanical, Electrical & More | Study Abroad | GEC',
  meta: [
    { name: 'description', content: 'Study Engineering in China - Civil, Mechanical, Electrical, Chemical, Aerospace and more. World-class universities, modern facilities, affordable education. Expert guidance from GEC.' },
    { name: 'keywords', content: 'engineering china, civil engineering, mechanical engineering, study engineering abroad, engineering degree china, electrical engineering' }
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
