<template>
  <div class="bg-[#FFF8F0] min-h-screen">
    <!-- ═══ HERO ═══ -->
    <div class="relative h-56 md:h-72 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400&q=80"
        alt="Table de déjeuner avec crêpes et café"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-[#2C1810]/65 flex flex-col items-center justify-center text-center px-4">
        <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">Au Petit Chaudron</span>
        <h1 class="font-serif text-4xl md:text-5xl text-white font-bold mb-2">Notre menu</h1>
        <p class="text-white/70 font-serif italic">Cuisine maison, faite avec soin chaque matin.</p>
      </div>
    </div>

    <!-- ═══ NAV CATÉGORIES ═══ -->
    <div class="sticky top-16 z-30 bg-[#FFF8F0]/95 backdrop-blur-sm border-b border-[#C47B2B]/15 shadow-sm">
      <div class="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto py-3">
        <button
          v-for="cat in menuData.categories"
          :key="cat.id"
          @click="scrollTo(cat.id)"
          class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all flex-shrink-0"
          :class="activeCategory === cat.id
            ? 'bg-[#C47B2B] text-white border-[#C47B2B] shadow-sm'
            : 'border-[#C47B2B]/30 text-[#3E2723] hover:border-[#C47B2B] hover:text-[#C47B2B]'"
        >
          {{ cat.icone }} {{ cat.nom }}
        </button>
      </div>
    </div>

    <!-- ═══ CATÉGORIES ═══ -->
    <div class="max-w-5xl mx-auto px-4 py-12 space-y-16">
      <section
        v-for="cat in menuData.categories"
        :key="cat.id"
        :id="cat.id"
        class="scroll-mt-32"
      >
        <!-- En-tête catégorie avec image -->
        <div class="relative rounded-2xl overflow-hidden mb-8 h-40 md:h-52">
          <img :src="cat.image" :alt="cat.nom" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-[#2C1810]/80 to-transparent flex items-center px-8">
            <div>
              <h2 class="font-serif text-2xl md:text-3xl text-white font-bold">{{ cat.nom }}</h2>
              <p class="text-white/65 text-sm mt-1">{{ cat.description }}</p>
            </div>
          </div>
        </div>

        <!-- Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="item in cat.items"
            :key="item.nom"
            class="bg-white rounded-xl p-5 flex justify-between items-start gap-4 shadow-sm hover:shadow-md transition-shadow border border-transparent"
            :class="item.vedette ? 'border-[#C47B2B]/30 ring-1 ring-[#C47B2B]/20' : ''"
          >
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1 flex-wrap">
                <h3 class="font-serif font-semibold text-[#3E2723] text-lg leading-tight">{{ item.nom }}</h3>
                <span v-if="item.vedette" class="text-xs bg-[#C47B2B] text-white px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                  Signature
                </span>
              </div>
              <p class="text-sm text-[#2C1810]/55 leading-relaxed">{{ item.description }}</p>
            </div>
            <div class="text-right flex-shrink-0 pt-0.5">
              <span class="font-bold text-[#B54A32] text-lg">{{ item.prix }}$</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Note bas de menu -->
      <div class="flex items-start gap-3 bg-[#3E2723]/5 border border-[#C47B2B]/20 rounded-xl p-5">
        <svg class="w-5 h-5 text-[#C47B2B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p class="text-sm text-[#2C1810]/60 italic">
          Menu sujet à changement selon les arrivages et l'inspiration du chef. Les prix sont sujets à changement sans préavis.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import menuDataRaw from '../data/menu.json'

// Ajouter images et icônes aux catégories
const categoryMeta = {
  classiques: {
    icone: '🍳',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=80',
  },
  crepes: {
    icone: '🥞',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1000&q=80',
  },
  assiettes: {
    icone: '🍽️',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1000&q=80',
  },
  accompagnements: {
    icone: '☕',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&q=80',
  },
}

const menuData = {
  categories: menuDataRaw.categories.map(cat => ({
    ...cat,
    ...categoryMeta[cat.id],
  })),
}

const activeCategory = ref(menuData.categories[0]?.id)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeCategory.value = entry.target.id
      })
    },
    { rootMargin: '-30% 0px -60% 0px' }
  )
  menuData.categories.forEach((cat) => {
    const el = document.getElementById(cat.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())
</script>
