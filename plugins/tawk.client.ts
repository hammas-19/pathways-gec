import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  if (document.getElementById('tawk-script')) return

  // Initialize Tawk API globals
  ;(window as any).Tawk_API = (window as any).Tawk_API || {}
  ;(window as any).Tawk_LoadStart = new Date()

  const s1 = document.createElement('script')
  const s0 = document.getElementsByTagName('script')[0]
  s1.async = true
  s1.src = 'https://embed.tawk.to/693fbe787bdcd2197d981ed6/1jcgg025s'
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  s1.id = 'tawk-script'
  s0.parentNode?.insertBefore(s1, s0)
})

declare global {
  interface Window {
    Tawk_API: any
    Tawk_LoadStart: Date
  }
}
