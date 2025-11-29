export const useScrollReveal = () => {
  if (process.client) {
    onMounted(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Optionally unobserve after reveal
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Observe all elements with scroll-reveal class
      const elements = document.querySelectorAll('.scroll-reveal')
      elements.forEach((el) => observer.observe(el))

      // Cleanup
      onUnmounted(() => {
        elements.forEach((el) => observer.unobserve(el))
      })
    })
  }
}
