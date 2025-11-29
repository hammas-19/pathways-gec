<template>
  <section class="relative section bg-gradient-to-br from-slate-100 via-white to-slate-100 overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <!-- Left: Large Text -->
        <div class="lg:col-span-2 scroll-reveal">
          <h2 class="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-br from-brand-ocean via-brand-blue to-brand-purple bg-clip-text text-transparent leading-tight">
            We Got You!
          </h2>
        </div>

        <!-- Right: Content & CTAs -->
        <div class="lg:col-span-3 scroll-reveal animation-delay-200">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 text-brand-ocean">Ready to Start Your Journey?</h3>
          <p class="text-xl text-slate-700 mb-8 leading-relaxed">
            Book your free consultation now. No hidden fees. No obligations. Just honest guidance.
          </p>

          <!-- Trust Badges -->
          <div class="flex flex-wrap gap-4 mb-8">
            <div class="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/40">
              <div class="w-8 h-8 rounded-lg bg-brand-emerald/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="font-semibold text-slate-700">Free Consultation</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/40">
              <div class="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="font-semibold text-slate-700">24-Hour Response</span>
            </div>
            <div class="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-white/40">
              <div class="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="font-semibold text-slate-700">No Obligation</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/86XXXXXXXXXX?text=Hi%20GEC,%20I'm%20ready%20to%20start%20my%20journey!"
              target="_blank"
              class="btn-white group justify-center"
            >
              <svg class="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
              </svg>
              <span>Contact Us on WhatsApp</span>
            </a>
            <NuxtLink to="/contact" class="btn-primary text-center group inline-flex items-center justify-center gap-2">
              Schedule Video Call
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Use scroll reveal composable for animations
useScrollReveal()
</script>
