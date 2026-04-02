<template>
  <footer class="relative bg-[#2C1810] overflow-hidden">
    <!-- Texture subtile -->
    <div class="absolute inset-0 opacity-5" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=40'); background-size: cover; background-position: center;"></div>

    <div class="relative z-10">
      <div class="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <svg class="w-8 h-8 text-[#C47B2B]" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <ellipse cx="32" cy="44" rx="22" ry="12" fill="currentColor"/>
              <rect x="10" y="28" width="44" height="18" rx="4" fill="currentColor"/>
              <ellipse cx="32" cy="28" rx="22" ry="6" fill="#E8952A"/>
              <rect x="4" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
              <rect x="52" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
            </svg>
            <span class="font-serif text-[#FFF8F0] font-semibold text-lg">Au Petit Chaudron</span>
          </div>
          <p class="text-[#FFF8F0]/55 text-sm leading-relaxed mb-4">
            Restaurant déjeuner et brunch à Sainte-Adèle. Une institution locale depuis des générations.
          </p>
          <div class="flex gap-0.5" aria-label="4.5 étoiles sur 5">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= 4 ? 'text-yellow-400' : 'text-yellow-400/40'" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-[#FFF8F0]/40 text-xs ml-1.5">4.5/5 — 153 avis</span>
          </div>
        </div>

        <!-- Horaires -->
        <div>
          <h3 class="font-serif text-[#C47B2B] font-semibold mb-4 text-lg">Horaires</h3>
          <div class="space-y-1.5 text-sm">
            <div class="flex justify-between text-[#FFF8F0]/70">
              <span>Mardi — Dimanche</span>
              <span class="text-[#FFF8F0] font-medium">7h00 — 14h00</span>
            </div>
            <div class="flex justify-between text-[#FFF8F0]/40">
              <span>Lundi</span>
              <span>Fermé</span>
            </div>
          </div>
          <div class="mt-5 pt-5 border-t border-white/10">
            <a href="tel:4502299678" class="flex items-center gap-2 text-[#C47B2B] hover:text-[#E8952A] transition-colors font-semibold text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
              </svg>
              450-229-9678
            </a>
          </div>
        </div>

        <!-- Adresse + liens -->
        <div>
          <h3 class="font-serif text-[#C47B2B] font-semibold mb-4 text-lg">Nous trouver</h3>
          <address class="not-italic text-[#FFF8F0]/60 text-sm leading-relaxed mb-4">
            1110 Boulevard de Sainte-Adèle<br>Sainte-Adèle, QC J8B 2N3
          </address>
          <nav class="flex flex-col gap-2" aria-label="Liens du pied de page">
            <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="text-[#FFF8F0]/50 hover:text-[#C47B2B] text-sm transition-colors">
              {{ link.label }}
            </RouterLink>
            <a href="https://www.facebook.com/profile.php?id=61577080607047" target="_blank" rel="noopener noreferrer" class="text-[#FFF8F0]/50 hover:text-[#C47B2B] text-sm transition-colors flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </nav>
        </div>
      </div>

      <div class="border-t border-white/10 py-5 text-center text-xs text-[#FFF8F0]/30">
        &copy; {{ new Date().getFullYear() }} Au Petit Chaudron — Sainte-Adèle, Québec
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Menu' },
  { to: '/notre-histoire', label: 'Notre histoire' },
  { to: '/contact', label: 'Contact & réservations' },
]
</script>
