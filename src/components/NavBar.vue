<template>
  <header class="sticky top-0 z-50 bg-[#3E2723] shadow-md">
    <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 group">
        <svg class="w-8 h-8 text-[#C47B2B]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <ellipse cx="32" cy="44" rx="22" ry="12" fill="currentColor"/>
          <rect x="10" y="28" width="44" height="18" rx="4" fill="currentColor"/>
          <ellipse cx="32" cy="28" rx="22" ry="6" fill="#E8952A"/>
          <rect x="4" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
          <rect x="52" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
        </svg>
        <span class="font-serif text-[#FFF8F0] text-lg font-semibold leading-tight group-hover:text-[#C47B2B] transition-colors">
          Au Petit Chaudron
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Navigation principale">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-[#FFF8F0]/80 hover:text-[#C47B2B] transition-colors text-sm font-medium"
          active-class="text-[#C47B2B]"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="tel:4502299678"
          class="bg-[#C47B2B] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#B54A32] transition-colors"
        >
          450-229-9678
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-[#FFF8F0] p-2"
        :aria-expanded="menuOpen"
        aria-label="Ouvrir le menu"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-[#2C1810] px-4 pb-4">
      <nav class="flex flex-col gap-1" aria-label="Navigation mobile">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="menuOpen = false"
          class="text-[#FFF8F0]/80 hover:text-[#C47B2B] py-3 border-b border-white/10 text-sm font-medium transition-colors"
          active-class="text-[#C47B2B]"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="tel:4502299678"
          class="mt-3 bg-[#C47B2B] text-white text-sm font-semibold px-4 py-3 rounded-full text-center hover:bg-[#B54A32] transition-colors"
        >
          Appeler : 450-229-9678
        </a>
      </nav>
    </div>
  </header>

  <!-- Sticky call button — mobile only -->
  <a
    href="tel:4502299678"
    class="fixed bottom-5 right-5 z-50 md:hidden bg-[#B54A32] text-white font-semibold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#C47B2B] transition-colors"
    aria-label="Appeler Au Petit Chaudron"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
    </svg>
    Appeler
  </a>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Menu' },
  { to: '/notre-histoire', label: 'Notre histoire' },
  { to: '/contact', label: 'Contact' },
]
</script>
