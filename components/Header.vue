<template>
  <!-- News Ticker -->
  <NewsTicker />

  <!-- Main Header -->
  <header :class="[
      'sticky top-0 z-50 transition-all duration-300 bg-white border-b border-slate-100',
      scrolled ? 'shadow-lg' : ''
    ]">
    <nav class="container-custom">
      <div class="flex items-center justify-between py-3">
        <!-- Logo - Just GEC -->
        <NuxtLink to="/" class="flex items-end gap-2 sm:gap-3 flex-shrink-0">
          <NuxtImg src="/logoOriginal.png" class="mb-0.5 w-6 h-9 sm:w-7 sm:h-10 lg:w-8 lg:h-12"
            alt="GEC Pathways Logo" />
          <p class="text-brand-blue font-black text-xs sm:text-sm uppercase leading-3 sm:leading-4">Pathways &
            <br>Consultants</p>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <NuxtLink to="/" class="nav-link group">
            <span>Home</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>

          <!-- Programs Mega Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Programs
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 shadow-2xl border border-slate-200 transform group-hover:translate-y-0 translate-y-2">
              <div class="grid grid-cols-4 gap-6">
                <!-- Bachelor Programs -->
                <div>
                  <div class="font-bold text-sm text-brand-blue mb-3 flex items-center gap-2">
                    <span class="text-lg">🎓</span> Bachelor
                  </div>
                  <div class="flex flex-col gap-2">
                    <NuxtLink to="/programs/mbbs"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>🩺</span> MBBS
                    </NuxtLink>
                    <NuxtLink to="/programs/bds"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>🦷</span> BDS
                    </NuxtLink>
                    <NuxtLink to="/programs/computer-science"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💻</span> Computer Science
                    </NuxtLink>
                    <NuxtLink to="/programs/engineering"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>⚙️</span> Engineering
                    </NuxtLink>
                    <NuxtLink to="/programs/business"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💼</span> Business
                    </NuxtLink>
                    <NuxtLink to="/programs/artificial-intelligence"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>🤖</span> Artificial Intelligence
                    </NuxtLink>
                    <NuxtLink to="/programs/nursing"
                      class="text-sm text-slate-700 hover:text-brand-blue hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>👩‍⚕️</span> Nursing
                    </NuxtLink>
                  </div>
                </div>

                <!-- Master Programs -->
                <div>
                  <div class="font-bold text-sm text-brand-purple mb-3 flex items-center gap-2">
                    <span class="text-lg">📚</span> Master's
                  </div>
                  <div class="flex flex-col gap-2">
                    <NuxtLink to="/programs/mba"
                      class="text-sm text-slate-700 hover:text-brand-purple hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💼</span> MBA
                    </NuxtLink>
                    <NuxtLink to="/programs/masters-cs"
                      class="text-sm text-slate-700 hover:text-brand-purple hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💻</span> M.Sc Computer Science
                    </NuxtLink>
                    <NuxtLink to="/programs/masters-engineering"
                      class="text-sm text-slate-700 hover:text-brand-purple hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>⚙️</span> M.Eng Engineering
                    </NuxtLink>
                    <NuxtLink to="/programs/masters-ir"
                      class="text-sm text-slate-700 hover:text-brand-purple hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>🌐</span> M.A Int'l Relations
                    </NuxtLink>
                  </div>
                </div>

                <!-- PhD Programs -->
                <div>
                  <div class="font-bold text-sm text-brand-emerald mb-3 flex items-center gap-2">
                    <span class="text-lg">🔬</span> PhD
                  </div>
                  <div class="flex flex-col gap-2">
                    <NuxtLink to="/programs/phd-cs"
                      class="text-sm text-slate-700 hover:text-brand-emerald hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💻</span> PhD Computer Science
                    </NuxtLink>
                    <NuxtLink to="/programs/phd-engineering"
                      class="text-sm text-slate-700 hover:text-brand-emerald hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>⚙️</span> PhD Engineering
                    </NuxtLink>
                    <NuxtLink to="/programs/phd-medicine"
                      class="text-sm text-slate-700 hover:text-brand-emerald hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>🩺</span> PhD Medicine
                    </NuxtLink>
                    <NuxtLink to="/programs/phd-business"
                      class="text-sm text-slate-700 hover:text-brand-emerald hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💼</span> PhD Business
                    </NuxtLink>
                  </div>
                </div>

                <!-- Short Courses -->
                <div>
                  <div class="font-bold text-sm text-brand-amber mb-3 flex items-center gap-2">
                    <span class="text-lg">⚡</span> Short Courses
                  </div>
                  <div class="flex flex-col gap-2">
                    <NuxtLink to="/programs/language"
                      class="text-sm text-slate-700 hover:text-brand-amber hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>📚</span> Chinese Language (1Y)
                    </NuxtLink>
                    <NuxtLink to="/programs/language-6months"
                      class="text-sm text-slate-700 hover:text-brand-amber hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>📖</span> Chinese Language (6M)
                    </NuxtLink>
                    <NuxtLink to="/programs/business-chinese"
                      class="text-sm text-slate-700 hover:text-brand-amber hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>💼</span> Business Chinese
                    </NuxtLink>
                    <NuxtLink to="/programs/summer-programs"
                      class="text-sm text-slate-700 hover:text-brand-amber hover:translate-x-1 transition-all flex items-center gap-2">
                      <span>☀️</span> Summer Programs
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Countries Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Countries
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              class="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-2xl border border-slate-200 transform group-hover:translate-y-0 translate-y-2">
              <NuxtLink to="/countries/pakistan" class="dropdown-link">
                <span class="text-3xl">🇵🇰</span>
                <div>
                  <div class="font-semibold text-slate-900">Pakistan</div>
                  <div class="text-xs text-slate-500">500+ Students</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/countries/saudi-arabia" class="dropdown-link">
                <span class="text-3xl">🇸🇦</span>
                <div>
                  <div class="font-semibold text-slate-900">Saudi Arabia</div>
                  <div class="text-xs text-slate-500">Growing Community</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/countries/yemen" class="dropdown-link">
                <span class="text-3xl">🇾🇪</span>
                <div>
                  <div class="font-semibold text-slate-900">Yemen</div>
                  <div class="text-xs text-slate-500">Active Programs</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/countries/iran" class="dropdown-link">
                <span class="text-3xl">🇮🇷</span>
                <div>
                  <div class="font-semibold text-slate-900">Iran</div>
                  <div class="text-xs text-slate-500">New Opportunities</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/countries/india" class="dropdown-link">
                <span class="text-3xl">🇮🇳</span>
                <div>
                  <div class="font-semibold text-slate-900">India</div>
                  <div class="text-xs text-slate-500">Expanding Soon</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/countries/bangladesh" class="dropdown-link">
                <span class="text-3xl">🇧🇩</span>
                <div>
                  <div class="font-semibold text-slate-900">Bangladesh</div>
                  <div class="text-xs text-slate-500">Expanding Soon</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/services" class="nav-link group">
            <span>Services</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/scholarships" class="nav-link group">
            <span>Scholarships</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>

          <!-- Student Life Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1">
              Student Life
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              class="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 shadow-2xl border border-slate-200 transform group-hover:translate-y-0 translate-y-2">
              <NuxtLink to="/success-stories" class="dropdown-link">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-emerald to-brand-teal flex items-center justify-center text-white text-xl">
                  ⭐</div>
                <div>
                  <div class="font-semibold text-slate-900">Success Stories</div>
                  <div class="text-xs text-slate-500">Student Testimonials</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/gallery" class="dropdown-link">
                <div
                  class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white text-xl">
                  📸</div>
                <div>
                  <div class="font-semibold text-slate-900">Gallery</div>
                  <div class="text-xs text-slate-500">Photos & Videos</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/blog" class="nav-link group">
            <span>Blog</span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>

          <!-- Apply Now Button -->
          <NuxtLink to="/contact"
            class="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
            Apply Now
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden relative w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors group">
          <div class="relative w-6 h-5 flex flex-col justify-between">
            <span :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              ]"></span>
            <span :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              ]"></span>
            <span :class="[
                'block h-0.5 w-full bg-brand-ocean transition-all duration-300 rounded-full',
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              ]"></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div :class="[
          'lg:hidden overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-screen py-6 border-t border-slate-100' : 'max-h-0'
        ]">
        <div class="flex flex-col gap-4">
          <NuxtLink to="/" class="mobile-link" @click="mobileMenuOpen = false">🏠 Home</NuxtLink>

          <!-- Mobile Programs -->
          <div>
            <button @click="programsOpen = !programsOpen" class="mobile-link w-full flex items-center justify-between">
              <span>📚 Programs</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{'rotate-180': programsOpen}" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="programsOpen" class="pl-4 mt-3 flex flex-col gap-3 animate-fade-in-down">
              <!-- Bachelor -->
              <div>
                <button @click="bachelorOpen = !bachelorOpen"
                  class="mobile-link text-sm w-full flex items-center justify-between font-semibold text-brand-blue">
                  <span>🎓 Bachelor</span>
                  <svg class="w-3 h-3" :class="{'rotate-180': bachelorOpen}" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="bachelorOpen" class="pl-4 mt-2 flex flex-col gap-2">
                  <NuxtLink to="/programs/mbbs" class="mobile-link text-xs" @click="mobileMenuOpen = false">🩺 MBBS
                  </NuxtLink>
                  <NuxtLink to="/programs/bds" class="mobile-link text-xs" @click="mobileMenuOpen = false">🦷 BDS
                  </NuxtLink>
                  <NuxtLink to="/programs/computer-science" class="mobile-link text-xs" @click="mobileMenuOpen = false">
                    💻 Computer Science</NuxtLink>
                  <NuxtLink to="/programs/engineering" class="mobile-link text-xs" @click="mobileMenuOpen = false">⚙️
                    Engineering</NuxtLink>
                  <NuxtLink to="/programs/business" class="mobile-link text-xs" @click="mobileMenuOpen = false">💼
                    Business</NuxtLink>
                  <NuxtLink to="/programs/artificial-intelligence" class="mobile-link text-xs"
                    @click="mobileMenuOpen = false">🤖 AI</NuxtLink>
                  <NuxtLink to="/programs/nursing" class="mobile-link text-xs" @click="mobileMenuOpen = false">👩‍⚕️
                    Nursing</NuxtLink>
                </div>
              </div>

              <!-- Master -->
              <div>
                <button @click="mastersOpen = !mastersOpen"
                  class="mobile-link text-sm w-full flex items-center justify-between font-semibold text-brand-purple">
                  <span>📚 Master's</span>
                  <svg class="w-3 h-3" :class="{'rotate-180': mastersOpen}" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="mastersOpen" class="pl-4 mt-2 flex flex-col gap-2">
                  <NuxtLink to="/programs/mba" class="mobile-link text-xs" @click="mobileMenuOpen = false">💼 MBA
                  </NuxtLink>
                  <NuxtLink to="/programs/masters-cs" class="mobile-link text-xs" @click="mobileMenuOpen = false">💻
                    M.Sc CS</NuxtLink>
                  <NuxtLink to="/programs/masters-engineering" class="mobile-link text-xs"
                    @click="mobileMenuOpen = false">⚙️ M.Eng</NuxtLink>
                  <NuxtLink to="/programs/masters-ir" class="mobile-link text-xs" @click="mobileMenuOpen = false">🌐 M.A
                    IR</NuxtLink>
                </div>
              </div>

              <!-- PhD -->
              <div>
                <button @click="phdOpen = !phdOpen"
                  class="mobile-link text-sm w-full flex items-center justify-between font-semibold text-brand-emerald">
                  <span>🔬 PhD</span>
                  <svg class="w-3 h-3" :class="{'rotate-180': phdOpen}" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="phdOpen" class="pl-4 mt-2 flex flex-col gap-2">
                  <NuxtLink to="/programs/phd-cs" class="mobile-link text-xs" @click="mobileMenuOpen = false">💻 PhD CS
                  </NuxtLink>
                  <NuxtLink to="/programs/phd-engineering" class="mobile-link text-xs" @click="mobileMenuOpen = false">
                    ⚙️ PhD Engineering</NuxtLink>
                  <NuxtLink to="/programs/phd-medicine" class="mobile-link text-xs" @click="mobileMenuOpen = false">🩺
                    PhD Medicine</NuxtLink>
                  <NuxtLink to="/programs/phd-business" class="mobile-link text-xs" @click="mobileMenuOpen = false">💼
                    PhD Business</NuxtLink>
                </div>
              </div>

              <!-- Short Courses -->
              <div>
                <button @click="shortCoursesOpen = !shortCoursesOpen"
                  class="mobile-link text-sm w-full flex items-center justify-between font-semibold text-brand-amber">
                  <span>⚡ Short Courses</span>
                  <svg class="w-3 h-3" :class="{'rotate-180': shortCoursesOpen}" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="shortCoursesOpen" class="pl-4 mt-2 flex flex-col gap-2">
                  <NuxtLink to="/programs/language" class="mobile-link text-xs" @click="mobileMenuOpen = false">📚
                    Chinese Language (1Y)</NuxtLink>
                  <NuxtLink to="/programs/language-6months" class="mobile-link text-xs" @click="mobileMenuOpen = false">
                    📖 Chinese Language (6M)</NuxtLink>
                  <NuxtLink to="/programs/business-chinese" class="mobile-link text-xs" @click="mobileMenuOpen = false">
                    💼 Business Chinese</NuxtLink>
                  <NuxtLink to="/programs/summer-programs" class="mobile-link text-xs" @click="mobileMenuOpen = false">
                    ☀️ Summer Programs</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Countries -->
          <div>
            <button @click="countriesOpen = !countriesOpen"
              class="mobile-link w-full flex items-center justify-between">
              <span>🌍 Countries</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{'rotate-180': countriesOpen}" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="countriesOpen" class="pl-6 mt-3 flex flex-col gap-3 animate-fade-in-down">
              <NuxtLink to="/countries/pakistan" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇵🇰 Pakistan
              </NuxtLink>
              <NuxtLink to="/countries/saudi-arabia" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇸🇦 Saudi Arabia
              </NuxtLink>
              <NuxtLink to="/countries/yemen" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇾🇪 Yemen
              </NuxtLink>
              <NuxtLink to="/countries/iran" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇮🇷 Iran
              </NuxtLink>
              <NuxtLink to="/countries/india" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇮🇳 India
              </NuxtLink>
              <NuxtLink to="/countries/bangladesh" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                🇧🇩 Bangladesh
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/services" class="mobile-link" @click="mobileMenuOpen = false">🎯 Services</NuxtLink>
          <NuxtLink to="/scholarships" class="mobile-link" @click="mobileMenuOpen = false">💰 Scholarships</NuxtLink>

          <!-- Mobile Student Life -->
          <div>
            <button @click="successOpen = !successOpen" class="mobile-link w-full flex items-center justify-between">
              <span>⭐ Student Life</span>
              <svg class="w-4 h-4 transition-transform duration-300" :class="{'rotate-180': successOpen}" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="successOpen" class="pl-6 mt-3 flex flex-col gap-3 animate-fade-in-down">
              <NuxtLink to="/success-stories" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                ⭐ Success Stories
              </NuxtLink>
              <NuxtLink to="/gallery" class="mobile-link text-sm flex items-center gap-2"
                @click="mobileMenuOpen = false">
                📸 Gallery
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/blog" class="mobile-link" @click="mobileMenuOpen = false">📝 Blog</NuxtLink>

          <!-- Apply Now Button for Mobile -->
          <NuxtLink to="/contact"
            class="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mt-4"
            @click="mobileMenuOpen = false">
            Apply Now
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const programsOpen = ref(false)
const bachelorOpen = ref(false)
const mastersOpen = ref(false)
const phdOpen = ref(false)
const shortCoursesOpen = ref(false)
const countriesOpen = ref(false)
const successOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply relative text-slate-700 hover:text-brand-blue font-medium transition-colors cursor-pointer;
}

.dropdown-link {
  @apply flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-brand-blue/5 hover:to-brand-purple/5 transition-all cursor-pointer rounded-xl mx-2;
}

.mobile-link {
  @apply text-slate-700 hover:text-brand-blue font-medium transition-colors py-2;
}
</style>
