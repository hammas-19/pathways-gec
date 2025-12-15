import { onMounted, onUnmounted } from 'vue'

export const useScrollReveal = () => {
  if (!process.client) {
    return { refresh: () => {} }
  }

  let observer: MutationObserver | null = null

  const applyReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)')
    elements.forEach((el) => el.classList.add('revealed'))
  }

  onMounted(() => {
    applyReveal()

    // Keep new nodes visible when toggling v-if content (e.g., tabs)
    observer = new MutationObserver(() => applyReveal())
    observer.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { refresh: applyReveal }
}
