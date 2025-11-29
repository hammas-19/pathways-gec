<template>
  <div class="news-ticker-wrapper bg-brand-blue py-2 overflow-hidden">
    <div class="news-ticker flex gap-16">
      <span v-for="i in 3" :key="i" class="ticker-content flex gap-16 whitespace-nowrap">
        <span class="ticker-item text-white font-medium flex items-center gap-2">
          <span class="text-xl">🎓</span>
          March Intake 2026 is NOW OPEN for MBBS & All Programs — Hurry Up & Secure Your Spot!
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.news-ticker {
  animation: scroll-left 30s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.news-ticker:hover {
  animation-play-state: paused;
}
</style>
