<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-blue via-primary-green to-accent-purple flex items-center justify-center p-4">
    <div class="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
      <!-- Success Icon -->
      <div class="mb-6 animate-bounce">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <!-- Thank You Message -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Thank You! 🎉
      </h1>

      <p class="text-xl text-gray-700 mb-6">
        Your message has been successfully submitted
      </p>

      <div class="bg-light-grey rounded-xl p-6 mb-8">
        <p class="text-gray-700 mb-4">
          Our team will review your inquiry and get back to you within <strong>24 hours</strong>.
        </p>
        <p class="text-gray-600 text-sm">
          Check your email (including spam folder) for our response.
        </p>
      </div>

      <!-- What's Next -->
      <div class="text-left mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">What happens next?</h2>
        <div class="space-y-3">
          <div class="flex gap-3">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">We Review Your Application</h3>
              <p class="text-sm text-gray-600">Our expert team analyzes your profile and requirements</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Personal Consultation</h3>
              <p class="text-sm text-gray-600">We'll schedule a call to discuss your options</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Customized Plan</h3>
              <p class="text-sm text-gray-600">Receive a tailored roadmap for your education journey</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="bg-gradient-to-r from-primary-blue to-primary-green text-white rounded-xl p-6 mb-8">
        <h3 class="font-semibold text-lg mb-3">Need Immediate Assistance?</h3>
        <div class="space-y-2 text-sm">
          <p>📱 WhatsApp: +86 186 7230 1888</p>
          <p>📧 Email: info@gecpathways.com</p>
          <p>⏰ Available: 9 AM - 8 PM (China Time)</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex gap-4 justify-center flex-wrap">
        <NuxtLink
          to="/"
          class="px-6 py-3 bg-primary-blue text-white rounded-lg font-semibold hover:bg-primary-green transition-colors"
        >
          Back to Home
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Read Our Blog
        </NuxtLink>
      </div>

      <!-- Social Proof -->
      <div class="mt-8 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-600 mb-4">
          Join 500+ students who have successfully started their journey with us
        </p>
        <div class="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/gecpathways"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary-blue transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/gecpathways"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary-blue transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@gecpathways"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-primary-blue transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

useHead({
  title: 'Thank You - GEC Pathways',
  meta: [
    { name: 'description', content: 'Thank you for contacting GEC Pathways. We will get back to you within 24 hours.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})

// Track thank you page view for conversion
onMounted(() => {
  const { $gtm } = useNuxtApp()

  // Push conversion event to dataLayer
  $gtm.push({
    event: 'conversion',
    conversion_type: 'form_submission',
    conversion_value: 'contact_form'
  })
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
