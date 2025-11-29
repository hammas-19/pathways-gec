<template>
  <div>
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- About Us Section -->
    <AboutUsSection />

    <!-- Trust Stats Bar -->
    <TrustStats />

    <!-- We Understand Your Fears -->
    <FearsSection />

    <!-- Programs Overview -->
    <ProgramsOverview />

    <!-- Your Country Gateway -->
    <CountriesSection />

    <!-- Why Study in China -->
    <WhyChinaSection />

    <!-- Success Stories Showcase -->
    <SuccessStoriesShowcase />

    <!-- Services Overview -->
    <ServicesOverview />

    <!-- Scholarships Teaser -->
    <ScholarshipsTeaser />

    <!-- Blog Preview -->
    <BlogPreview />

    <!-- Final CTA -->
    <FinalCTA />
  </div>
</template>

<script setup>
// SEO and Meta Tags
useHead({
  title: 'GEC - Study in China | MBBS & More | Expert Education Consultancy',
  meta: [
    {
      name: 'description',
      content: 'Study in China with GEC. Expert education consultancy with 5000+ successful students, 95% visa success rate. MBBS, Engineering, Business programs available.'
    },
    {
      name: 'keywords',
      content: 'study in china, mbbs in china, education consultancy, chinese universities, study abroad, pakistan students china, medical degree china'
    },
    {
      property: 'og:title',
      content: 'GEC - Your Gateway to Studying in China'
    },
    {
      property: 'og:description',
      content: 'Expert guidance from professional team. 5000+ successful students. 95% visa success rate. With offices in different countries, based in China.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Global Educational Consultants (GEC)',
        description: 'Expert education consultancy for international students studying in China',
        url: 'https://gec.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CN'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+86-XXX-XXXX-XXXX',
          contactType: 'Customer Service',
          availableLanguage: ['English', 'Urdu', 'Arabic', 'Chinese']
        }
      })
    }
  ]
})
</script>
