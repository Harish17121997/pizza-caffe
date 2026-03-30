<template>
  <div id="cafe-app">

    <!-- Navigation -->
    <TheNav @open-menu="mobileOpen = true" />

    <!-- Mobile Menu Overlay -->
    <MobileMenu :open="mobileOpen" @close="mobileOpen = false" />

    <!-- Page Sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <DeliveryBanner />
      <ContactSection />
      <MapSection />
    </main>

    <!-- Footer -->
    <TheFooter />

    <!-- Back to Top -->
    <Transition name="fade">
      <button v-if="showTop" class="back-top" @click="scrollTop" aria-label="Back to top">
        ↑
      </button>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useIntersection } from './composables/useIntersection.js'

import TheNav        from './components/TheNav.vue'
import MobileMenu    from './components/MobileMenu.vue'
import HeroSection   from './components/HeroSection.vue'
import AboutSection  from './components/AboutSection.vue'
import MenuSection   from './components/MenuSection.vue'
import GallerySection from './components/GallerySection.vue'
import DeliveryBanner from './components/DeliveryBanner.vue'
import ContactSection from './components/ContactSection.vue'
import MapSection    from './components/MapSection.vue'
import TheFooter     from './components/TheFooter.vue'

// Mobile menu state
const mobileOpen = ref(false)

// Back-to-top visibility
const showTop = ref(false)

function onScroll() {
  showTop.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Activate intersection observer for all .fade-up elements
useIntersection('.fade-up')

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style>
/* Global app wrapper */
#cafe-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Back to Top Button */
.back-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 500;
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--dark);
  border: none;
  border-radius: 50%;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(212, 168, 67, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(212, 168, 67, 0.45);
}

/* Back-to-top transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 600px) {
  .back-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>
