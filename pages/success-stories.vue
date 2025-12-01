<template>
  <div class="success-stories-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 font-display">
            Success Stories
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100">
            Real stories from real students who achieved their dreams with GEC. Over 500 students successfully placed in top Chinese universities.
          </p>
          <div class="flex flex-wrap gap-6 justify-center text-left">
            <div class="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl">
              <div class="text-3xl font-bold text-accent-yellow">500+</div>
              <div class="text-sm">Successful Students</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl">
              <div class="text-3xl font-bold text-accent-yellow">95%</div>
              <div class="text-sm">Visa Success Rate</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl">
              <div class="text-3xl font-bold text-accent-yellow">15+</div>
              <div class="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-12 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            @click="selectedFilter = 'all'"
            :class="{'bg-primary text-white': selectedFilter === 'all', 'bg-gray-200 text-gray-700': selectedFilter !== 'all'}"
            class="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
          >
            All Stories
          </button>
          <button
            @click="selectedFilter = 'mbbs'"
            :class="{'bg-primary text-white': selectedFilter === 'mbbs', 'bg-gray-200 text-gray-700': selectedFilter !== 'mbbs'}"
            class="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
          >
            MBBS
          </button>
          <button
            @click="selectedFilter = 'engineering'"
            :class="{'bg-primary text-white': selectedFilter === 'engineering', 'bg-gray-200 text-gray-700': selectedFilter !== 'engineering'}"
            class="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
          >
            Engineering
          </button>
          <button
            @click="selectedFilter = 'business'"
            :class="{'bg-primary text-white': selectedFilter === 'business', 'bg-gray-200 text-gray-700': selectedFilter !== 'business'}"
            class="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
          >
            Business
          </button>
          <button
            @click="selectedFilter = 'other'"
            :class="{'bg-primary text-white': selectedFilter === 'other', 'bg-gray-200 text-gray-700': selectedFilter !== 'other'}"
            class="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
          >
            Other Programs
          </button>
        </div>
      </div>
    </section>

    <!-- Success Stories Grid -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto space-y-16">

          <!-- Story 1: Dr. Ahmed - MBBS -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'mbbs'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  AM
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Dr. Ahmed Malik</h3>
                <p class="text-xl mb-4 text-center text-gray-200">MBBS Graduate</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Yangzhou University</p>
                  <p class="text-gray-200">Class of 2021</p>
                  <p class="text-accent-yellow font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-primary mb-4">From Struggling Student to Successful Doctor</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "I come from a middle-class family in Lahore. After failing to get into a Pakistani medical college despite good grades, I was devastated. The private medical colleges in Pakistan were asking for 2-3 crore rupees - money my family simply didn't have."
                  </p>
                  <p>
                    "That's when a friend told me about GEC and studying MBBS in China. I was skeptical at first, but after meeting with the GEC team, everything changed. They explained the entire process, showed me the universities, and most importantly - the cost was less than 1/5th of what private colleges in Pakistan were charging!"
                  </p>
                  <p>
                    "The GEC team handled my application, got me admission to Yangzhou University, and helped with my visa. The whole process was smooth. When I arrived in China, they picked me up from the airport and helped me settle in."
                  </p>
                  <p>
                    "The five years in China were the best years of my life. The education quality was exceptional - modern hospitals, experienced professors, and plenty of hands-on clinical practice. I treated hundreds of patients under supervision and gained confidence."
                  </p>
                  <p>
                    "After graduation, I returned to Pakistan and cleared my PMC licensing exam on the first attempt with a score of 82%. I'm now working at a top hospital in Lahore and also run evening clinics. My salary is excellent, and I'm helping my younger siblings with their education."
                  </p>
                  <p class="font-semibold text-primary">
                    "GEC didn't just help me get admission - they transformed my entire life. I'm forever grateful to the team for believing in me when I had almost given up on my dream of becoming a doctor."
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Medical Officer at Shaukat Khanum Hospital, Lahore + Private Practice</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> PMC Exam Score: 82% (First Attempt)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 2: Fatima - Business -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'business'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-accent-yellow/90 to-secondary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  FN
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Fatima Noor</h3>
                <p class="text-xl mb-4 text-center text-gray-100">Business Graduate</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Zhejiang University</p>
                  <p class="text-gray-100">Class of 2022</p>
                  <p class="text-primary font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-secondary mb-4">Breaking Barriers: From Karachi to Global Business Leader</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "As a woman from Pakistan, I faced doubts from everyone when I said I wanted to study business abroad. 'Why not just study locally and get married?' people would ask. But I had bigger dreams."
                  </p>
                  <p>
                    "I chose China because of CPEC and the growing Pakistan-China business ties. GEC helped me get into Zhejiang University in Hangzhou - the city where Alibaba is headquartered. It was like studying business in the heart of global e-commerce!"
                  </p>
                  <p>
                    "Beyond academics, I learned Mandarin Chinese. I knew this would be my competitive advantage. The GEC team in China was always available when I needed help - whether it was course selection, finding halal food, or even just someone to talk to when I felt homesick."
                  </p>
                  <p>
                    "During my final year, I interned at a Chinese tech company in Hangzhou. They were so impressed that they offered me a position in their Pakistan office after graduation. I couldn't believe it!"
                  </p>
                  <p>
                    "Now I'm 25 years old and working as Business Development Manager for a major Chinese tech company in Karachi. I handle partnerships between Pakistani and Chinese businesses. My starting salary was PKR 250,000 per month - three times what my classmates who studied locally are earning!"
                  </p>
                  <p class="font-semibold text-secondary">
                    "To all the young women out there: Don't let anyone limit your dreams. GEC gave me the opportunity to prove that Pakistani women can compete and excel on the global stage."
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Business Development Manager, Leading Chinese Tech Company in Pakistan</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> Negotiated PKR 500M+ in partnership deals in first year</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 3: Usman - Engineering -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'engineering'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-accent-purple/80 to-primary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  UK
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Usman Khan</h3>
                <p class="text-xl mb-4 text-center text-gray-200">Civil Engineer</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Tsinghua University</p>
                  <p class="text-gray-200">Class of 2020</p>
                  <p class="text-accent-yellow font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-primary mb-4">Building Pakistan's Future Through CPEC</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "I always wanted to be an engineer who builds things - roads, bridges, buildings. When GEC told me I could study at Tsinghua University (China's MIT), I thought it was too good to be true. But they made it happen!"
                  </p>
                  <p>
                    "Tsinghua was incredible. I studied alongside some of the brightest minds in Asia. The professors had worked on China's high-speed rail, massive dams, and skyscrapers. Every day was inspiring."
                  </p>
                  <p>
                    "What really changed my trajectory was when GEC connected me with a CPEC project during my summer break. I did a 3-month internship on a highway construction project in Pakistan. The Chinese engineers were impressed that I could communicate in both Mandarin and Urdu."
                  </p>
                  <p>
                    "After graduation, that same company hired me as a Project Engineer for CPEC infrastructure projects in Balochistan. At 26 years old, I'm supervising teams, working on projects worth billions of rupees, and contributing to Pakistan's development."
                  </p>
                  <p>
                    "I travel between Pakistan and China frequently for work. My Chinese education isn't just a degree - it's opened doors to opportunities I never imagined. I'm earning more than senior engineers with 10+ years of experience."
                  </p>
                  <p class="font-semibold text-primary">
                    "GEC saw potential in me when I was just an average student from Rawalpindi. They guided me to Tsinghua, supported me throughout, and now I'm literally building the future of my country. That's the GEC difference."
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Senior Project Engineer, CPEC Infrastructure Development</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> Supervised construction of 50+ km highway sections in Balochistan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 4: Sarah - Dentistry -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'mbbs'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-accent-peach/80 to-secondary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  SA
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Dr. Sarah Ahmed</h3>
                <p class="text-xl mb-4 text-center text-gray-100">Dentist (BDS)</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Wuhan University</p>
                  <p class="text-gray-100">Class of 2022</p>
                  <p class="text-white font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-secondary mb-4">From Student to Running My Own Dental Clinic</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "I wanted to be a dentist, but BDS programs in Pakistan were extremely expensive and competitive. My parents were worried about my future. That's when we discovered GEC."
                  </p>
                  <p>
                    "The GEC team was professional and transparent. They explained everything about Wuhan University, the curriculum, the costs, and career prospects. Within 3 months, I had my admission letter and was preparing for China."
                  </p>
                  <p>
                    "Wuhan University's dental school is among the best in Asia. The facilities were mind-blowing - we had access to the latest dental equipment, digital X-rays, CAD/CAM systems, and thousands of patients for practice."
                  </p>
                  <p>
                    "I spent my third, fourth, and fifth years treating real patients every day. By the time I graduated, I had performed hundreds of procedures - fillings, root canals, extractions, crowns, you name it. I was confident and skilled."
                  </p>
                  <p>
                    "I returned to Lahore, cleared my PMC exam, and started working at a dental clinic. Within a year, I saved enough to open my own small clinic in DHA Lahore. Now, two years later, I have 3 dental chairs, employ 2 assistants, and see 15-20 patients daily."
                  </p>
                  <p class="font-semibold text-secondary">
                    "My parents invested in my China education, and it's paying back many times over. At 27, I own my clinic, earn well, and help other young girls from my community pursue their dreams. Thank you GEC for making this possible!"
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Owner, Sarah Dental Clinic, DHA Lahore</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> Built successful dental practice within 2 years of returning</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 5: Ali - Computer Science -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'other'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-primary via-accent-purple/70 to-secondary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  AH
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Ali Hassan</h3>
                <p class="text-xl mb-4 text-center text-gray-200">Software Engineer</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Shanghai Jiao Tong University</p>
                  <p class="text-gray-200">Class of 2021</p>
                  <p class="text-accent-yellow font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-primary mb-4">From Karachi to Silicon Valley via China</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "I was a computer science enthusiast from Karachi with big dreams but limited resources. I wanted to study at a top university abroad, but my family couldn't afford US or UK fees."
                  </p>
                  <p>
                    "GEC introduced me to Shanghai Jiao Tong University's computer science program. Shanghai is like the Silicon Valley of China - all the major tech companies are there. It was perfect for what I wanted."
                  </p>
                  <p>
                    "The education was world-class. We learned AI, machine learning, big data, cloud computing - all the cutting-edge technologies. More importantly, I did internships at Alibaba and Tencent during summer breaks."
                  </p>
                  <p>
                    "During my final year, I applied for jobs globally. My Chinese degree from a top university, combined with internships at Alibaba and Tencent, made my resume stand out. I received offers from companies in Dubai, Singapore, and even the USA."
                  </p>
                  <p>
                    "I chose to join a tech startup in Dubai that was expanding into Pakistan and China markets. They needed someone who understood both markets - and that was me! After two years, I moved to San Francisco and now work for a major tech company."
                  </p>
                  <p class="font-semibold text-primary">
                    "My parents spent less than $30,000 on my entire 4-year education in China. That investment got me a career where I now earn $120,000 annually. GEC made it all possible by guiding us through the process."
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Senior Software Engineer, Major Tech Company, San Francisco</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> Working in Silicon Valley, earning $120K+ annually</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Story 6: Ayesha - Nursing -->
          <div v-if="selectedFilter === 'all' || selectedFilter === 'other'" class="story-card bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="grid md:grid-cols-5 gap-0">
              <div class="md:col-span-2 bg-gradient-to-br from-accent-green/80 to-primary p-12 text-white flex flex-col justify-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-5xl font-bold mb-6 mx-auto">
                  AF
                </div>
                <h3 class="text-3xl font-bold mb-2 text-center">Ayesha Fatima</h3>
                <p class="text-xl mb-4 text-center text-gray-200">Registered Nurse</p>
                <div class="space-y-2 text-center">
                  <p class="font-semibold">Capital Medical University</p>
                  <p class="text-gray-200">Class of 2023</p>
                  <p class="text-white font-bold">🇵🇰 Pakistan</p>
                </div>
              </div>
              <div class="md:col-span-3 p-12">
                <div class="mb-6">
                  <div class="text-accent-yellow text-2xl mb-2">★★★★★</div>
                  <h4 class="text-2xl font-bold text-secondary mb-4">Caring for Others, Building My Future</h4>
                </div>
                <div class="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    "Coming from a small town in Punjab, I always wanted to work in healthcare and help people. Nursing seemed like the perfect career, but quality nursing programs were hard to find and afford in Pakistan."
                  </p>
                  <p>
                    "My cousin had studied with GEC's help, and she recommended them. The team was so helpful - they explained that nursing is highly respected in China and the training is world-class. I got admission to Capital Medical University in Beijing."
                  </p>
                  <p>
                    "The four years in Beijing transformed me. I learned modern nursing practices, worked in high-tech hospitals, and gained hands-on experience that nursing students in Pakistan rarely get. We used advanced medical equipment and learned from international faculty."
                  </p>
                  <p>
                    "After graduation, I had multiple options. I could work in China, go to the Middle East where nurses from Chinese universities are highly valued, or return to Pakistan. I chose Dubai, where a major hospital group was recruiting nurses."
                  </p>
                  <p>
                    "I now work at one of Dubai's premium hospitals, earning AED 12,000 per month (PKR 900,000). I send money home to support my family and my younger sisters' education. My parents are so proud."
                  </p>
                  <p class="font-semibold text-secondary">
                    "GEC didn't just help me get a degree - they gave me a passport to work anywhere in the world. I'm financially independent, helping my family, and doing what I love. What more could I ask for?"
                  </p>
                </div>
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <p class="text-sm text-gray-600"><strong>Current Position:</strong> Registered Nurse, Premium Hospital Group, Dubai, UAE</p>
                  <p class="text-sm text-gray-600"><strong>Achievement:</strong> Earning AED 12K/month, supporting family back home</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Our Track Record</h2>
          <p class="text-xl text-gray-600">Numbers that speak for themselves</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="text-5xl font-bold text-primary mb-3">500+</div>
            <div class="text-gray-600 font-semibold">Students Placed</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-secondary mb-3">95%</div>
            <div class="text-gray-600 font-semibold">Visa Success Rate</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-primary mb-3">50+</div>
            <div class="text-gray-600 font-semibold">Expert Team Members</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-secondary mb-3">15+</div>
            <div class="text-gray-600 font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Documents & Achievements Gallery -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Real Documents, Real Success</h2>
            <p class="text-xl text-gray-600">
              Admission notices, visas, HSK certificates, and more from our successful students
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center">
              <div class="text-6xl mb-4">📜</div>
              <h3 class="text-2xl font-bold mb-3 text-primary">Admission Notices</h3>
              <p class="text-gray-600 mb-4">
                Official admission letters from top Chinese universities including Tsinghua, Peking University, Fudan, and more.
              </p>
              <div class="text-sm text-gray-500">500+ admission letters secured</div>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center">
              <div class="text-6xl mb-4">✈️</div>
              <h3 class="text-2xl font-bold mb-3 text-secondary">Student Visas</h3>
              <p class="text-gray-600 mb-4">
                X1 student visas and JW202 forms successfully obtained. Our 95% visa success rate speaks for itself.
              </p>
              <div class="text-sm text-gray-500">95% visa approval rate</div>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center">
              <div class="text-6xl mb-4">🎓</div>
              <h3 class="text-2xl font-bold mb-3 text-primary">HSK Certificates</h3>
              <p class="text-gray-600 mb-4">
                Students achieving HSK Level 3, 4, 5, and 6 certifications. Chinese language proficiency opens more opportunities.
              </p>
              <div class="text-sm text-gray-500">100+ HSK certified students</div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl">
            <div class="text-center">
              <h3 class="text-2xl md:text-3xl font-bold mb-4">📸 Document Verification Available</h3>
              <p class="text-lg mb-4">
                We can show you real admission notices, JW202 forms, visa stamps, and HSK certificates from our students. Everything is authentic and verifiable. Visit our office or request copies during your assessment.
              </p>
              <p class="text-accent-yellow font-semibold">
                Transparency and trust are the foundation of our relationship with students and families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ceremonies & Recognition -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-4 font-display">Celebrating Student Success</h2>
            <p class="text-xl text-gray-600">
              We host ceremonies and events to recognize and encourage our students
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="text-5xl mb-4">🎉</div>
              <h3 class="text-2xl font-bold mb-4 text-primary">Welcome Ceremonies</h3>
              <p class="text-gray-600 mb-4">
                Every year, we organize welcome ceremonies for new students arriving in China. Meet fellow students, get orientation, receive welcome kits, and start your journey with confidence.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• Campus orientation tours</li>
                <li>• Meet senior students from your country</li>
                <li>• Cultural adaptation workshops</li>
                <li>• Welcome dinner and networking</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="text-5xl mb-4">🏆</div>
              <h3 class="text-2xl font-bold mb-4 text-secondary">Excellence Awards</h3>
              <p class="text-gray-600 mb-4">
                GEC recognizes and rewards students who achieve top positions in their classes. We celebrate academic excellence and hard work!
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Gold Medal:</strong> Top position in class</li>
                <li>• <strong>Silver Medal:</strong> Top 3 in class</li>
                <li>• <strong>Bronze Medal:</strong> Top 5 in class</li>
                <li>• <strong>Merit Certificates:</strong> GPA above 85%</li>
                <li>• <strong>Cash Awards:</strong> For outstanding performance</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="text-5xl mb-4">🎊</div>
              <h3 class="text-2xl font-bold mb-4 text-primary">Cultural Events</h3>
              <p class="text-gray-600 mb-4">
                Regular events to celebrate festivals, achievements, and build community among GEC students studying across different Chinese cities.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• Independence Day celebrations</li>
                <li>• Eid gatherings for Muslim students</li>
                <li>• Spring Festival events</li>
                <li>• Sports tournaments</li>
                <li>• Talent shows and competitions</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-8 rounded-xl">
              <div class="text-5xl mb-4">👨‍🎓</div>
              <h3 class="text-2xl font-bold mb-4 text-secondary">Graduation Celebrations</h3>
              <p class="text-gray-600 mb-4">
                When you graduate, we celebrate your success! Special graduation ceremonies where we honor our students who successfully completed their degrees.
              </p>
              <ul class="space-y-2 text-gray-700">
                <li>• Graduation ceremony attendance</li>
                <li>• Success story documentation</li>
                <li>• Career guidance sessions</li>
                <li>• Alumni network introduction</li>
                <li>• Lifetime support and mentorship</li>
              </ul>
            </div>
          </div>

          <div class="mt-12 bg-gradient-to-r from-accent-yellow/90 to-secondary text-white p-8 rounded-xl text-center">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">You're Not Just a Student Number to Us</h3>
            <p class="text-lg">
              At GEC, every student is part of our family. We celebrate your wins, support you through challenges, encourage your growth, and take pride in your achievements. Your success is our success, and we're with you every step of the way!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary via-secondary to-accent-purple/70 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 font-display">Write Your Own Success Story</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
          Join hundreds of successful students who achieved their dreams with GEC. Your journey starts here.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/contact" class="bg-accent-yellow text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all">
            Start Your Journey Today
          </NuxtLink>
          <a href="https://wa.me/8618672301888" class="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
            WhatsApp: +86 186 7230 1888
          </a>
        </div>
        <p class="mt-6 text-gray-200">
          With offices in different countries, based in China - Supporting students worldwide
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO
useHead({
  title: 'Success Stories - Real Student Experiences | Study in China with GEC',
  meta: [
    { name: 'description', content: '500+ success stories from students who studied in China with GEC. Real experiences from MBBS, Engineering, Business graduates. 95% visa success rate. Read how they achieved their dreams.' },
    { name: 'keywords', content: 'study china success stories, mbbs china students, pakistan students china, gec testimonials, student reviews china, study abroad success' }
  ]
})

// Filter state
const selectedFilter = ref('all')
</script>

<style scoped>
.btn-primary, .btn-secondary {
  display: inline-block;
  text-align: center;
}

.story-card {
  transition: all 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.prose {
  max-width: none;
}
</style>
