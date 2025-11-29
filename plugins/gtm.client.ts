export default defineNuxtPlugin((nuxtApp) => {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []

  // Helper function to push events to dataLayer
  const gtmPush = (data: any) => {
    window.dataLayer.push(data)
  }

  // Track page views on route change
  nuxtApp.hook('page:finish', () => {
    const route = useRoute()

    gtmPush({
      event: 'pageview',
      page: {
        path: route.path,
        title: document.title,
        url: window.location.href,
        referrer: document.referrer
      },
      timestamp: new Date().toISOString()
    })
  })

  // Provide global GTM functions
  return {
    provide: {
      gtm: {
        push: gtmPush,

        // Track form submissions
        trackFormSubmit: (formName: string, formData: any) => {
          gtmPush({
            event: 'form_submit',
            form_name: formName,
            form_data: formData,
            timestamp: new Date().toISOString()
          })
        },

        // Track button clicks
        trackClick: (elementName: string, elementType: string, destination?: string) => {
          gtmPush({
            event: 'click',
            element_name: elementName,
            element_type: elementType,
            destination: destination || '',
            timestamp: new Date().toISOString()
          })
        },

        // Track scroll depth
        trackScroll: (scrollDepth: number) => {
          gtmPush({
            event: 'scroll',
            scroll_depth: scrollDepth,
            page_path: window.location.pathname,
            timestamp: new Date().toISOString()
          })
        },

        // Track video interactions
        trackVideo: (action: string, videoName: string) => {
          gtmPush({
            event: 'video_interaction',
            video_action: action,
            video_name: videoName,
            timestamp: new Date().toISOString()
          })
        },

        // Track outbound links
        trackOutbound: (url: string, linkText: string) => {
          gtmPush({
            event: 'outbound_click',
            outbound_url: url,
            link_text: linkText,
            timestamp: new Date().toISOString()
          })
        },

        // Track user engagement
        trackEngagement: (action: string, category: string, label?: string) => {
          gtmPush({
            event: 'user_engagement',
            engagement_action: action,
            engagement_category: category,
            engagement_label: label || '',
            timestamp: new Date().toISOString()
          })
        },

        // Track search queries
        trackSearch: (searchTerm: string, resultsCount?: number) => {
          gtmPush({
            event: 'search',
            search_term: searchTerm,
            results_count: resultsCount || 0,
            timestamp: new Date().toISOString()
          })
        },

        // Track lead generation
        trackLead: (leadData: any) => {
          gtmPush({
            event: 'generate_lead',
            lead_source: leadData.source || 'website',
            lead_type: leadData.type || 'contact_form',
            lead_value: leadData.value || '',
            timestamp: new Date().toISOString()
          })
        }
      }
    }
  }
})

// TypeScript declaration
declare global {
  interface Window {
    dataLayer: any[]
  }
}
