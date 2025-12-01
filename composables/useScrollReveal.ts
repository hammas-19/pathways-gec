import { onMounted } from 'vue'

export const useScrollReveal = () => {
  // Simplified: do not use IntersectionObserver or animations.
  // On client mount, immediately add the `revealed` class to any elements
  // using the `.scroll-reveal` helper so they are visible without animation.
  if (process.client) {
    onMounted(() => {
      const elements = document.querySelectorAll('.scroll-reveal')
      elements.forEach((el) => el.classList.add('revealed'))
    })
  }
}
