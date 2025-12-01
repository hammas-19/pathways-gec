<template>
  <footer class="relative bg-gradient-to-br from-brand-ocean via-slate-900 to-brand-ocean text-white">
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0"
        style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;">
      </div>
    </div>

    <div class="container-custom relative z-10">
      <div class="py-16">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Column 1: About -->
          <div class="space-y-6">
            <NuxtLink to="/" class="flex items-end gap-2 sm:gap-3 flex-shrink-0">
              <NuxtImg src="/LogoWhite.png" class="mb-0.5 w-6 h-9 sm:w-7 sm:h-10 lg:w-8 lg:h-12"
                alt="GEC Pathways Logo" />
              <p class="text-white font-black text-xs sm:text-sm uppercase leading-3 sm:leading-4">Pathways &
                <br>Consultants
              </p>
            </NuxtLink>
            <p class="text-slate-300 leading-relaxed">
              Global Educational Consultants - Your trusted partner for studying in China. With offices in different
              countries across the globe.
            </p>
            <!-- Social Icons -->
            <div class="flex gap-3">
              <a href="https://www.tiktok.com/@gecpathways" class="social-icon group" aria-label="TikTok"
                target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://wa.me/923114999954" class="social-icon group" aria-label="WhatsApp" target="_blank">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.46-.01z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/gecpathways" class="social-icon group" aria-label="Facebook"
                target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/gecpathways" class="social-icon group" aria-label="Instagram"
                target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@gecpathways" class="social-icon group" aria-label="YouTube"
                target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.10-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/" class="footer-link">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="footer-link">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/programs/mbbs" class="footer-link">Programs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="footer-link">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/scholarships" class="footer-link">Scholarships</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="footer-link">Blog</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 3: Programs -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-white">Popular Programs</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/programs/mbbs" class="footer-link">🩺 MBBS in China</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/programs/engineering" class="footer-link">⚙️ Engineering</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/programs/computer-science" class="footer-link">💻 Computer Science</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/programs/language" class="footer-link">🗣️ Language Courses</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/scholarships" class="footer-link">💰 Scholarships</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Column 4: Contact -->
          <div>
            <h3 class="font-bold text-lg mb-6 text-white">Get In Touch</h3>
            <ul class="space-y-4">
              <li class="flex gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <span class="text-slate-300 text-sm leading-relaxed">Offices in different countries, based in
                  China</span>
              </li>
              <li class="flex gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="https://wa.me/923114999954"
                  class="text-slate-300 hover:text-white transition-colors text-sm">+92 311 4999954</a>
              </li>
              <li class="flex gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:information@gecpathways.com"
                  class="text-slate-300 hover:text-white transition-colors text-sm break-all">information@gecpathways.com</a>
              </li>
              <li class="flex gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-slate-300 text-sm">Mon-Sat, 9AM-6PM (CST)</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <div class="mt-6">
              <NuxtLink to="/contact" class="btn-white w-full justify-center text-sm">
                Apply Now
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 mb-8">
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-br from-brand-blue to-[#0d4a88] bg-clip-text text-transparent mb-1">
              5000+</div>
            <div class="text-slate-400 text-sm">Students Placed</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-brand-emerald to-brand-teal bg-clip-text text-transparent mb-1">
              95%</div>
            <div class="text-slate-400 text-sm">Visa Success</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-brand-orange to-brand-amber bg-clip-text text-transparent mb-1">
              10+</div>
            <div class="text-slate-400 text-sm">Universities</div>
          </div>
          <div class="text-center">
            <div
              class="text-3xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent mb-1">
              24/7</div>
            <div class="text-slate-400 text-sm">Support</div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p class="text-slate-400 text-sm text-center md:text-left">
            © 2025 <span class="text-white font-semibold">GEC</span> - Global Educational Consultants. All rights
            reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-slate-400 hover:text-white transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="text-slate-400 hover:text-white transition-colors">Terms of Service</NuxtLink>
            <NuxtLink to="/sitemap" class="text-slate-400 hover:text-white transition-colors">Sitemap</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2 text-sm;
}

.social-icon {
  @apply w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-purple transition-all hover:scale-110 hover:-translate-y-1;
}
</style>
