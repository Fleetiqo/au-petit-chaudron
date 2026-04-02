<template>
  <div class="bg-[#FFF8F0]">
    <!-- ═══ HERO ═══ -->
    <section class="relative h-72 md:h-96 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80"
        alt="Intérieur chaleureux d'un restaurant de quartier"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#2C1810]/50 to-[#2C1810]/80 flex flex-col items-center justify-center text-center px-4">
        <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">Sainte-Adèle, Québec</span>
        <h1 class="font-serif text-4xl md:text-6xl text-white font-bold mb-3 drop-shadow-lg">Notre histoire</h1>
        <p class="font-serif text-lg md:text-xl text-white/80 italic max-w-xl">
          Un restaurant qui fait partie de l'histoire de Sainte-Adèle.
        </p>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4 py-16 space-y-20">

      <!-- ═══ SECTION 1 : ORIGINES ═══ -->
      <section class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Les origines</span>
          <h2 class="font-serif text-2xl md:text-3xl text-[#3E2723] font-bold mt-3 mb-5 leading-snug">
            Une institution locale depuis des générations
          </h2>
          <p class="text-[#2C1810]/65 leading-relaxed mb-4">
            Au Petit Chaudron, c'est bien plus qu'un restaurant. C'est un endroit où les gens de Sainte-Adèle se retrouvent depuis des années pour commencer leur journée du bon pied.
          </p>
          <p class="text-[#2C1810]/65 leading-relaxed">
            Fondé par la famille Aveline, le restaurant est rapidement devenu un pilier de la communauté. Des générations de familles y ont pris leur déjeuner du dimanche, des habitués y ont leur table attitrée, et le personnel connaît les commandes par coeur avant même que vous ouvriez la bouche.
          </p>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
            alt="Salle à manger chaleureuse d'un restaurant de quartier"
            class="rounded-2xl w-full h-72 object-cover shadow-xl"
          />
          <div class="absolute -bottom-4 -left-4 bg-[#C47B2B] text-white rounded-xl px-4 py-3 shadow-lg">
            <p class="font-serif text-sm font-semibold">Institution locale</p>
            <p class="text-xs text-white/80">Depuis des générations</p>
          </div>
        </div>
      </section>

      <!-- ═══ SÉPARATEUR ═══ -->
      <div class="flex items-center gap-4">
        <div class="flex-1 h-px bg-[#C47B2B]/20"></div>
        <svg class="w-9 h-9 text-[#C47B2B]" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <ellipse cx="32" cy="44" rx="22" ry="12" fill="currentColor"/>
          <rect x="10" y="28" width="44" height="18" rx="4" fill="currentColor"/>
          <ellipse cx="32" cy="28" rx="22" ry="6" fill="#E8952A"/>
          <rect x="4" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
          <rect x="52" y="26" width="8" height="5" rx="2.5" fill="#FFF8F0"/>
        </svg>
        <div class="flex-1 h-px bg-[#C47B2B]/20"></div>
      </div>

      <!-- ═══ SECTION 2 : REPRISE ═══ -->
      <section class="grid md:grid-cols-2 gap-10 items-center">
        <div class="relative order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
            alt="Chef en cuisine préparant le déjeuner"
            class="rounded-2xl w-full h-72 object-cover shadow-xl"
          />
          <div class="absolute -bottom-4 -right-4 bg-[#3E2723] text-white rounded-xl px-4 py-3 shadow-lg">
            <p class="font-serif text-sm font-semibold">Alexandre Boudrias</p>
            <p class="text-xs text-white/70">Propriétaire depuis juillet 2024</p>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Juillet 2024</span>
          <h2 class="font-serif text-2xl md:text-3xl text-[#3E2723] font-bold mt-3 mb-5 leading-snug">
            Alexandre reprend le flambeau
          </h2>
          <p class="text-[#2C1810]/65 leading-relaxed mb-4">
            En juillet 2024, Alexandre Boudrias reprend Au Petit Chaudron avec une mission claire : préserver ce qui fait l'âme du restaurant tout en lui donnant un nouveau souffle.
          </p>
          <p class="text-[#2C1810]/65 leading-relaxed">
            Sa première décision ? Rappeler une bonne partie de l'équipe originale. Des visages que vous connaissez déjà, des mains qui savent exactement comment faire les choses comme dans le temps. Parce que certaines recettes, ça ne s'improvise pas.
          </p>
        </div>
      </section>

      <!-- ═══ SECTION 3 : ÉQUIPE ═══ -->
      <section class="relative rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
          alt="Ambiance chaleureuse du restaurant"
          class="w-full h-80 object-cover"
        />
        <div class="absolute inset-0 bg-[#2C1810]/75 flex flex-col items-center justify-center text-center px-8 py-10">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">L'équipe</span>
          <h2 class="font-serif text-2xl md:text-3xl text-white font-bold mb-4">
            Des visages que vous connaissez déjà
          </h2>
          <p class="text-white/75 leading-relaxed max-w-xl mb-3">
            Nathalie, Julie, Madeleine, Diane, Mylaine, Manon, Raymonde, Linda, Robert, Mathieu, Karine — une équipe d'une dizaine de personnes qui mettent du coeur dans chaque assiette.
          </p>
          <p class="text-white/75 italic font-serif text-lg">
            "Venez pour le déjeuner, restez pour l'accueil."
          </p>
        </div>
      </section>

      <!-- ═══ VALEURS ═══ -->
      <section>
        <div class="text-center mb-10">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Ce en quoi on croit</span>
          <h2 class="font-serif text-2xl md:text-3xl text-[#3E2723] font-bold mt-3">Nos valeurs</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div v-for="valeur in valeurs" :key="valeur.titre" class="bg-white rounded-2xl p-6 shadow-sm border border-[#C47B2B]/10 flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl" :style="{ backgroundColor: valeur.bg }">
              {{ valeur.icone }}
            </div>
            <div>
              <h3 class="font-serif font-semibold text-[#3E2723] mb-1.5">{{ valeur.titre }}</h3>
              <p class="text-sm text-[#2C1810]/60 leading-relaxed">{{ valeur.texte }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ CTA ═══ -->
      <div class="text-center py-4">
        <p class="font-serif text-xl md:text-2xl text-[#3E2723] italic mb-8 leading-relaxed">
          "Des déjeuners généreux, faits maison, comme dans le temps."
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/menu" class="bg-[#C47B2B] text-white font-semibold px-9 py-3.5 rounded-full hover:bg-[#B54A32] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center">
            Voir le menu
          </RouterLink>
          <RouterLink to="/contact" class="border-2 border-[#C47B2B] text-[#C47B2B] font-semibold px-9 py-3.5 rounded-full hover:bg-[#C47B2B] hover:text-white transition-all text-center">
            Nous contacter
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const valeurs = [
  {
    icone: '🏠',
    titre: 'Cuisine maison',
    texte: 'Tout est préparé sur place, chaque matin. Pas de raccourcis, pas de compromis.',
    bg: '#FFF3E0',
  },
  {
    icone: '💰',
    titre: 'Prix accessibles',
    texte: 'Déjeuner complet à partir de 3,99$. Parce que bien manger ne devrait pas coûter une fortune.',
    bg: '#F3E5D0',
  },
  {
    icone: '🤝',
    titre: 'Accueil chaleureux',
    texte: 'On vous accueille comme si vous étiez de la famille. C\'est dans notre nature.',
    bg: '#FBE9E7',
  },
  {
    icone: '📜',
    titre: 'Tradition',
    texte: 'On perpétue ce qui a fait la réputation du Petit Chaudron depuis des générations.',
    bg: '#F3E5D0',
  },
]
</script>
