<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-ocean via-brand-blue to-brand-purple animated-gradient"></div>

    <!-- Geometric Patterns -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 50px 50px;"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl animate-float animation-delay-300"></div>
      <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-amber/20 rounded-full blur-3xl animate-float animation-delay-500"></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center py-20">
        <!-- Left Content -->
        <div class="text-white space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 glass px-5 py-3 rounded-full animate-fade-in-down">
            <span class="text-2xl animate-bounce-subtle">🎓</span>
            <span class="font-semibold">Global Educational Consultants</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            Your Gateway to
            <span class="block mt-2 bg-gradient-to-r from-brand-amber via-brand-orange to-brand-coral bg-clip-text text-transparent">
              World-Class Education
            </span>
            in China
          </h1>

          <!-- Sub-headline -->
          <p class="text-xl md:text-2xl text-slate-200 leading-relaxed animate-fade-in-up animation-delay-200">
            Expert guidance from 50+ professionals • 5000+ successful students • 95% visa success rate
          </p>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-ocean/90 backdrop-blur-sm text-white border border-white/30 hover:scale-105 transition-transform shadow-lg">
              <svg class="w-5 h-5 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-semibold">PMC Recognized</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-ocean/90 backdrop-blur-sm text-white border border-white/30 hover:scale-105 transition-transform shadow-lg">
              <svg class="w-5 h-5 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span class="font-semibold">Based in China</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-ocean/90 backdrop-blur-sm text-white border border-white/30 hover:scale-105 transition-transform shadow-lg">
              <svg class="w-5 h-5 text-brand-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-semibold">24/7 Support</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-xl group shadow-button-hover">
              Apply Now
              <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <a href="https://wa.me/923114999954?text=Hi%20GEC,%20I'm%20interested%20in%20studying%20in%20China" target="_blank" class="btn-whatsapp px-8 py-4 text-xl group inline-flex items-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-500">
            <div>
              <div class="text-4xl font-bold text-white mb-1">5000+</div>
              <div class="text-slate-300 text-sm">Students Placed</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-white mb-1">95%</div>
              <div class="text-slate-300 text-sm">Visa Success</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-white mb-1">10+</div>
              <div class="text-slate-300 text-sm">Universities</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Floating Cards -->
        <div class="relative hidden lg:block animate-fade-in-right animation-delay-200">
          <!-- Main Card -->
          <div class="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-brand-blue/20 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500">
            <div class="absolute -top-6 -right-6">
              <div class="w-16 h-16 bg-gradient-to-br from-brand-amber to-brand-orange rounded-2xl flex items-center justify-center text-white text-3xl shadow-glow animate-bounce-subtle">
                🎯
              </div>
            </div>

            <h3 class="text-2xl font-bold text-brand-ocean mb-6">Why Choose GEC?</h3>
            <ul class="space-y-4 text-slate-700">
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-emerald flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">Expert counseling from experienced professionals</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">On-ground support in China</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">Complete visa assistance</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="font-medium">Scholarship guidance & financial aid</span>
              </li>
            </ul>
          </div>

          <!-- Floating Stat Card 1 -->
          <div class="absolute bottom-2 -left-12 bg-white rounded-2xl p-5 border-2 border-brand-amber/30 shadow-2xl animate-float z-20">
            <div class="text-center">
              <div class="text-3xl mb-2">⭐</div>
              <div class="text-2xl font-bold text-brand-ocean">4.9/5</div>
              <div class="text-slate-600 text-sm font-medium">Student Rating</div>
            </div>
          </div>

          <!-- Floating Stat Card 2 -->
          <div class="absolute -top-8 -right-8 bg-white rounded-2xl p-5 border-2 border-brand-teal/30 shadow-2xl animate-float animation-delay-300">
            <div class="text-center">
              <div class="text-3xl mb-2">🏆</div>
              <div class="text-2xl font-bold text-brand-ocean">Top</div>
              <div class="text-slate-600 text-sm font-medium">Consultancy</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      <div class="flex flex-col items-center gap-2 text-white/80">
        <span class="text-sm">Scroll to explore</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section is now fully animated with CSS
</script>

<style scoped>
/* Additional custom animations can be added here if needed */
</style>
