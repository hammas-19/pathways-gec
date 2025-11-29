<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
</template>

<script setup>
// This is the default layout for all pages
</script>
