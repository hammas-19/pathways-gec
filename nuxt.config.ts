// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'GEC Pathways - Study in China | Expert Education Consultancy',
      meta: [
        { name: 'description', content: 'Global Educational Consultants - Your trusted partner for studying MBBS and other programs in China. Doctor-led team with 95% visa success rate.' },
        { name: 'keywords', content: 'study in china, mbbs in china, chinese universities, education consultant, study abroad' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },

  image: {
    quality: 80,
    format: ['webp']
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact'
      ],
      crawlLinks: false,
      failOnError: false
    }
  }
})
