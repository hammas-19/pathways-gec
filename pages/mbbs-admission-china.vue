<template>
  <div class="mbbs-landing-page">
    <!-- Hero Section with Form -->
    <section class="hero-section bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white py-12 md:py-20">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <!-- Left Column: Copy -->
          <div>
            <div class="inline-block bg-accent-yellow text-gray-900 px-4 py-2 rounded-full font-bold mb-4 animate-pulse">
              ⏰ 2025 Admissions Open - Limited Seats Available
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4 font-display leading-tight">
              Study MBBS in China Without Breaking the Bank
            </h1>
            <p class="text-xl md:text-2xl mb-6 text-gray-100 leading-relaxed">
              Get WHO & PMC Recognized MBBS Degree. World-Class Medical Education at Affordable Cost.
            </p>

            <!-- Trust Badges -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-accent-yellow">500+</div>
                <div class="text-sm">Students Placed</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-accent-yellow">95%</div>
                <div class="text-sm">Visa Success</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-accent-yellow">15+</div>
                <div class="text-sm">Years Experience</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-accent-yellow">PMC</div>
                <div class="text-sm">Recognized</div>
              </div>
            </div>

            <!-- Key Benefits -->
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-accent-yellow text-xl mr-2">✓</span>
                <span class="text-lg">No Entrance Exam Required (MCAT/NEET)</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent-yellow text-xl mr-2">✓</span>
                <span class="text-lg">English Medium Programs</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent-yellow text-xl mr-2">✓</span>
                <span class="text-lg">WHO & PMC Recognized Universities</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent-yellow text-xl mr-2">✓</span>
                <span class="text-lg">Start Your Medical Career in 2025</span>
              </li>
            </ul>
          </div>

          <!-- Right Column: Application Form -->
          <div class="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <div class="text-center mb-6">
              <h2 class="text-2xl md:text-3xl font-bold text-primary mb-2">
                Get Free Admission Assessment
              </h2>
              <p class="text-gray-600">Fill the form below. Our expert will contact you within 24 hours.</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Full Name *</label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">WhatsApp Number *</label>
                <input
                  v-model="formData.whatsapp"
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Email Address *</label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">Education Level *</label>
                <select
                  v-model="formData.education"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your education level</option>
                  <option value="intermediate">Intermediate (FSc Pre-Medical)</option>
                  <option value="a-levels">A-Levels</option>
                  <option value="equivalent">Equivalent</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold mb-2 text-gray-700">City *</label>
                <input
                  v-model="formData.city"
                  type="text"
                  required
                  placeholder="Your city"
                  class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-lg text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50"
              >
                <span v-if="!isSubmitting">🎓 Get Free Assessment Now</span>
                <span v-else>Submitting...</span>
              </button>

              <p class="text-xs text-gray-500 text-center">
                🔒 Your information is 100% secure. We hate spam too!
              </p>
            </form>

            <div v-if="formSubmitted" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              ✓ Thank you! Our team will contact you within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-8 bg-white border-y">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <p class="text-center text-gray-600 mb-4 font-semibold">Trusted by Students From:</p>
          <div class="flex flex-wrap justify-center gap-6 items-center text-gray-500">
            <span class="text-lg">🇵🇰 Pakistan</span>
            <span class="text-lg">🇮🇳 India</span>
            <span class="text-lg">🇧🇩 Bangladesh</span>
            <span class="text-lg">🇳🇬 Nigeria</span>
            <span class="text-lg">🇰🇪 Kenya</span>
            <span class="text-lg">🇸🇦 Saudi Arabia</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose MBBS in China -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">Why 28,000+ Students Choose China for MBBS</h2>
            <p class="text-xl text-gray-600">Get world-class medical education without the financial burden</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-xl font-bold mb-3 text-primary">Highly Affordable</h3>
              <p class="text-gray-600">
                Save 80% compared to private medical colleges. Quality education that doesn't require taking massive loans or selling property.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">📜</div>
              <h3 class="text-xl font-bold mb-3 text-secondary">PMC Recognized</h3>
              <p class="text-gray-600">
                All our partner universities recognized by Pakistan Medical Commission. Clear PMC exam and practice in Pakistan.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-bold mb-3 text-primary">No Entrance Test</h3>
              <p class="text-gray-600">
                No MCAT or NEET required. Admission based on FSc/A-Levels marks. Simple, straightforward admission process.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">🏥</div>
              <h3 class="text-xl font-bold mb-3 text-secondary">Excellent Clinical Training</h3>
              <p class="text-gray-600">
                Hands-on practice in modern hospitals. Treat real patients under supervision. Graduate as a confident, skilled doctor.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="text-xl font-bold mb-3 text-primary">Global Opportunities</h3>
              <p class="text-gray-600">
                WHO recognized degree. Practice anywhere in the world after clearing respective licensing exams. Unlimited career options.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div class="text-4xl mb-4">🛡️</div>
              <h3 class="text-xl font-bold mb-3 text-secondary">Safe & Supportive</h3>
              <p class="text-gray-600">
                China is extremely safe. Large Pakistani student community. Halal food available. GEC team supports you 24/7 throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Slider -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">Real Success Stories</h2>
            <p class="text-xl text-gray-600">Hear from doctors who studied with our guidance</p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">AM</div>
                <div>
                  <h3 class="text-xl font-bold">Dr. Ahmed Malik</h3>
                  <p class="text-sm text-gray-200">Yangzhou University, 2021</p>
                </div>
              </div>
              <div class="text-accent-yellow mb-2">★★★★★</div>
              <p class="italic mb-4">
                "I couldn't afford private medical colleges in Pakistan charging 2-3 crore. GEC helped me get into Yangzhou University. Now I'm a practicing doctor in Lahore earning excellent salary. Best decision ever!"
              </p>
              <div class="text-sm font-semibold">✓ Cleared PMC exam - 82% score (First attempt)</div>
            </div>

            <div class="bg-gradient-to-br from-secondary to-accent-purple/70 text-white p-8 rounded-xl">
              <div class="flex items-center mb-4">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">SA</div>
                <div>
                  <h3 class="text-xl font-bold">Dr. Sarah Ahmed</h3>
                  <p class="text-sm text-gray-200">Wuhan University, 2022</p>
                </div>
              </div>
              <div class="text-accent-yellow mb-2">★★★★★</div>
              <p class="italic mb-4">
                "The clinical training was exceptional. I treated hundreds of patients and gained real confidence. GEC supported me from day one. Now I run my own dental clinic in DHA Lahore!"
              </p>
              <div class="text-sm font-semibold">✓ Own clinic within 2 years of returning</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">Simple 6-Step Process</h2>
            <p class="text-xl text-gray-600">From application to becoming a doctor</p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">1</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-primary">Free Assessment</h3>
                <p class="text-gray-600">Fill our form. Get free eligibility assessment and university recommendations within 24 hours.</p>
              </div>
            </div>

            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">2</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-primary">University Selection</h3>
                <p class="text-gray-600">Choose from PMC-recognized universities. We guide you to select the best fit for your goals and budget.</p>
              </div>
            </div>

            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">3</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-secondary">Application Processing</h3>
                <p class="text-gray-600">We handle all paperwork, documentation, and application submission. You just provide us the required documents.</p>
              </div>
            </div>

            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">4</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-secondary">Admission & Visa</h3>
                <p class="text-gray-600">Get admission letter and JW202 form. Our team guides you through visa application with 95% success rate.</p>
              </div>
            </div>

            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-accent-yellow text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">5</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-primary">Pre-Departure & Travel</h3>
                <p class="text-gray-600">Comprehensive pre-departure briefing. We arrange everything - from flight tickets to airport pickup in China.</p>
              </div>
            </div>

            <div class="flex items-start bg-white p-6 rounded-xl shadow-md">
              <div class="flex-shrink-0 w-12 h-12 bg-accent-yellow text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mr-6">6</div>
              <div>
                <h3 class="text-xl font-bold mb-2 text-primary">Start Your MBBS Journey</h3>
                <p class="text-gray-600">University registration, accommodation, residence permit - we help with everything. 24/7 support throughout your 6 years!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- University Highlights -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">Our Partner Medical Universities</h2>
            <p class="text-xl text-gray-600">All PMC & WHO recognized</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gray-50 p-6 rounded-xl border-2 border-primary">
              <h3 class="text-xl font-bold mb-2 text-primary">Yangtze University</h3>
              <p class="text-sm text-gray-600 mb-4">Jingzhou, Hubei Province</p>
              <ul class="text-sm space-y-2 text-gray-700">
                <li>✓ Established: 1951</li>
                <li>✓ 500+ Pakistani students</li>
                <li>✓ Modern campus & hospitals</li>
                <li>✓ High PMC pass rate</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border-2 border-secondary">
              <h3 class="text-xl font-bold mb-2 text-secondary">China Medical University</h3>
              <p class="text-sm text-gray-600 mb-4">Shenyang, Liaoning Province</p>
              <ul class="text-sm space-y-2 text-gray-700">
                <li>✓ Top 50 medical university</li>
                <li>✓ International faculty</li>
                <li>✓ 1,000+ bed hospital</li>
                <li>✓ Research opportunities</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-6 rounded-xl border-2 border-primary">
              <h3 class="text-xl font-bold mb-2 text-primary">Jiangsu University</h3>
              <p class="text-sm text-gray-600 mb-4">Zhenjiang, Jiangsu Province</p>
              <ul class="text-sm space-y-2 text-gray-700">
                <li>✓ Beautiful campus</li>
                <li>✓ Excellent facilities</li>
                <li>✓ Affordable city</li>
                <li>✓ Strong clinical training</li>
              </ul>
            </div>
          </div>

          <p class="text-center mt-8 text-gray-600">
            <strong>+ 20 more PMC-recognized universities</strong> - We help you choose the perfect fit!
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">Frequently Asked Questions</h2>
          </div>

          <div class="space-y-4">
            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <button @click="toggleFaq(1)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-bold text-primary">Is MBBS from China valid in Pakistan?</h3>
                <span class="text-2xl text-primary">{{ openFaq === 1 ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === 1" class="p-6 pt-0 text-gray-700">
                Yes! All our partner universities are recognized by Pakistan Medical Commission (PMC) and WHO. After graduation, you need to clear the PMC licensing exam to practice in Pakistan. Our students have excellent PMC pass rates.
              </div>
            </div>

            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <button @click="toggleFaq(2)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-bold text-primary">Do I need to pass MCAT or NEET for admission?</h3>
                <span class="text-2xl text-primary">{{ openFaq === 2 ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === 2" class="p-6 pt-0 text-gray-700">
                No! You don't need MCAT, NEET, or any entrance test. Admission is based on your FSc/A-Levels marks (minimum 60% in Physics, Chemistry, Biology). This makes the process much simpler and accessible.
              </div>
            </div>

            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <button @click="toggleFaq(3)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-bold text-primary">Is the program taught in English?</h3>
                <span class="text-2xl text-primary">{{ openFaq === 3 ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === 3" class="p-6 pt-0 text-gray-700">
                Yes! The entire MBBS program is taught in English. All lectures, textbooks, and exams are in English. You'll also get free Chinese language classes to help you communicate with local patients during clinical practice, but it's not mandatory for academics.
              </div>
            </div>

            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <button @click="toggleFaq(4)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-bold text-primary">What documents do I need for application?</h3>
                <span class="text-2xl text-primary">{{ openFaq === 4 ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === 4" class="p-6 pt-0 text-gray-700">
                Basic documents needed: FSc/A-Levels certificates and transcripts, passport copy, passport-size photos, and police clearance certificate. We'll guide you through the complete documentation process and help with notarization.
              </div>
            </div>

            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <button @click="toggleFaq(5)" class="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <h3 class="text-lg font-bold text-primary">Is China safe for students?</h3>
                <span class="text-2xl text-primary">{{ openFaq === 5 ? '−' : '+' }}</span>
              </button>
              <div v-show="openFaq === 5" class="p-6 pt-0 text-gray-700">
                China is extremely safe! It has one of the lowest crime rates in the world. Students can walk around safely at any time. There's a large Pakistani student community (28,000+ students), and halal food is widely available. Universities have dedicated international student support offices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">
            🎯 Limited Seats Available for 2025 Intake
          </h2>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Don't miss your chance to become a doctor. Top universities fill up fast!
          </p>

          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div class="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div class="text-4xl font-bold text-accent-yellow mb-2">Step 1</div>
                <p class="text-sm">Fill the form above</p>
              </div>
              <div>
                <div class="text-4xl font-bold text-accent-yellow mb-2">Step 2</div>
                <p class="text-sm">Get free assessment</p>
              </div>
              <div>
                <div class="text-4xl font-bold text-accent-yellow mb-2">Step 3</div>
                <p class="text-sm">Start MBBS in 2025</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 justify-center mb-6">
            <a href="#hero-section" class="bg-accent-yellow text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 inline-block">
              📝 Apply Now - It's FREE
            </a>
            <a href="https://wa.me/923114999954" class="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-block">
              💬 WhatsApp: +86 186 7230 1888
            </a>
          </div>

          <div class="flex items-center justify-center gap-6 text-sm">
            <span>✓ 500+ Students Placed</span>
            <span>✓ 95% Visa Success</span>
            <span>✓ 15+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center">
          <p class="text-gray-600 mb-4">
            <strong>GEC (Global Educational Consultants)</strong> - Your trusted partner for MBBS in China
          </p>
          <p class="text-sm text-gray-500">
            With offices in different countries, based in China | Serving students worldwide since 2010 | 50+ Expert Team Members
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO - Optimized for PPC landing page
useHead({
  title: 'MBBS in China 2025 - Admission Open | PMC Recognized | Apply Now',
  meta: [
    { name: 'description', content: 'Study MBBS in China 2025. PMC & WHO recognized. No entrance exam. Affordable fees. 95% visa success. Apply now for September 2025 intake. Limited seats available!' },
    { name: 'keywords', content: 'mbbs in china, mbbs admission china 2025, study mbbs china, pmc recognized medical universities china, mbbs without neet, affordable mbbs abroad' },
    { name: 'robots', content: 'index, follow' }
  ]
})

// Form handling
const formData = ref({
  name: '',
  whatsapp: '',
  email: '',
  education: '',
  city: ''
})

const isSubmitting = ref(false)
const formSubmitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    formSubmitted.value = true
    isSubmitting.value = false

    // Reset form
    formData.value = {
      name: '',
      whatsapp: '',
      email: '',
      education: '',
      city: ''
    }

    // Track conversion for ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
      })
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false
    }, 5000)
  }, 1500)
}

// FAQ functionality
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Smooth scroll for anchor links */
html {
  scroll-behavior: smooth;
}

/* Form inputs focus effect */
input:focus, select:focus {
  box-shadow: 0 0 0 3px rgba(0, 79, 227, 0.1);
}
</style>
