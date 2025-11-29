<template>
  <div class="fixed bottom-6 right-6 z-50 hidden lg:block">
    <NuxtLink
      to="/contact"
      class="floating-apply-btn bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 hover:scale-110 group"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
      <span class="text-lg">Apply Now</span>
      <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </NuxtLink>
  </div>

  <!-- Mobile version - bottom fixed bar -->
  <div class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-2xl">
    <div class="container-custom py-3">
      <NuxtLink
        to="/contact"
        class="bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3 rounded-full w-full flex items-center justify-center gap-2 transition-all duration-300"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        Apply Now
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.floating-apply-btn {
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
  }
  50% {
    box-shadow: 0 10px 40px rgba(245, 158, 11, 0.6);
  }
}
</style>
