export const useScrollTracking = () => {
  if (process.client) {
    const { $gtm } = useNuxtApp()
    let scrollTracked = {
      25: false,
      50: false,
      75: false,
      90: false,
      100: false
    }

    const trackScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100)

      // Track milestones
      Object.keys(scrollTracked).forEach((milestone) => {
        const milestoneNum = parseInt(milestone)
        if (scrollPercentage >= milestoneNum && !scrollTracked[milestoneNum]) {
          scrollTracked[milestoneNum] = true
          $gtm.trackScroll(milestoneNum)
        }
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', trackScroll, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', trackScroll)
    })
  }
}
