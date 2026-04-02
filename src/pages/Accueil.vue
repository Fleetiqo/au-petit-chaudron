<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1600&q=80"
        alt="Assiette de déjeuner généreuse au Petit Chaudron"
        class="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      <div class="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <!-- Badge Google -->
        <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 mb-8">
          <div class="flex gap-0.5" aria-label="4.5 étoiles sur 5">
            <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5" :class="i <= 4 ? 'text-yellow-400' : 'text-yellow-400/50'" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <span class="text-white/90 text-sm font-medium">4.5/5 sur Google &nbsp;·&nbsp; 153 avis</span>
        </div>

        <h1 class="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-5 drop-shadow-lg">
          Au Petit Chaudron
        </h1>
        <p class="font-serif text-xl md:text-2xl text-[#E8952A] italic mb-4 drop-shadow">
          Le déjeuner qui fait partie de l'histoire de Sainte-Adèle
        </p>
        <p class="text-white/75 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Cuisine maison, portions généreuses, prix doux. Depuis des générations.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink to="/menu" class="bg-[#C47B2B] text-white font-semibold px-9 py-3.5 rounded-full hover:bg-[#E8952A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
            Voir le menu
          </RouterLink>
          <RouterLink to="/contact" class="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-9 py-3.5 rounded-full hover:bg-white/25 transition-all text-center">
            Nous trouver
          </RouterLink>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce" aria-hidden="true">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- ═══ BANDEAU HORAIRES ═══ -->
    <div class="bg-[#C47B2B]">
      <div class="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-white text-sm font-medium">
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Mardi au dimanche, 7h à 14h
        </span>
        <span class="hidden sm:block opacity-40">|</span>
        <span class="opacity-80">Fermé le lundi</span>
        <span class="hidden sm:block opacity-40">|</span>
        <a href="tel:4502299678" class="underline underline-offset-2 hover:no-underline font-semibold">450-229-9678</a>
      </div>
    </div>

    <!-- ═══ INTRO CHALEUREUSE ═══ -->
    <section class="bg-[#FFF8F0] py-20 px-4">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Sainte-Adèle, Québec</span>
          <h2 class="font-serif text-3xl md:text-4xl text-[#3E2723] font-bold mt-3 mb-5 leading-snug">
            Un restaurant qui fait chaud au coeur depuis des générations
          </h2>
          <p class="text-[#2C1810]/65 leading-relaxed mb-4">
            Au Petit Chaudron, c'est l'endroit où les habitués ont leur table, où le personnel connaît votre commande avant que vous ouvriez la bouche, et où chaque assiette sort de la cuisine avec le même soin qu'à la maison.
          </p>
          <p class="text-[#2C1810]/65 leading-relaxed mb-8">
            Déjeuner complet à partir de 3,99$. Oui, oui, pour vrai.
          </p>
          <RouterLink to="/notre-histoire" class="inline-flex items-center gap-2 text-[#C47B2B] font-semibold hover:gap-3 transition-all">
            Notre histoire
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </RouterLink>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
            alt="Crêpes maison dorées"
            class="rounded-2xl w-full h-48 object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80"
            alt="Déjeuner complet avec oeufs et bacon"
            class="rounded-2xl w-full h-48 object-cover shadow-md mt-6"
          />
          <img
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80"
            alt="Café chaud du matin"
            class="rounded-2xl w-full h-48 object-cover shadow-md -mt-6"
          />
          <img
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80"
            alt="Pain doré au sirop d'érable"
            class="rounded-2xl w-full h-48 object-cover shadow-md"
          />
        </div>
      </div>
    </section>

    <!-- ═══ SPÉCIALITÉS ═══ -->
    <section class="bg-[#3E2723] py-20 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Ce qu'on fait le mieux</span>
          <h2 class="font-serif text-3xl md:text-4xl text-[#FFF8F0] font-bold mt-3">
            Nos spécialités
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="s in specialites" :key="s.nom" class="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            <img
              :src="s.image"
              :alt="s.alt"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <span v-if="s.vedette" class="inline-block bg-[#C47B2B] text-white text-xs font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">Signature</span>
              <h3 class="font-serif text-xl text-white font-bold mb-1">{{ s.nom }}</h3>
              <p class="text-white/70 text-sm leading-snug mb-2">{{ s.description }}</p>
              <span class="text-[#E8952A] font-bold">{{ s.prix }}</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <RouterLink to="/menu" class="inline-block border-2 border-[#C47B2B] text-[#C47B2B] font-semibold px-9 py-3.5 rounded-full hover:bg-[#C47B2B] hover:text-white transition-all">
            Voir le menu complet
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══ AMBIANCE PHOTO PLEINE LARGEUR ═══ -->
    <section class="relative h-72 md:h-96 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
        alt="Ambiance chaleureuse d'un restaurant de quartier"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-[#2C1810]/60 flex items-center justify-center">
        <p class="font-serif text-2xl md:text-4xl text-white italic text-center px-4 max-w-2xl leading-relaxed drop-shadow-lg">
          "Venez pour le déjeuner, restez pour l'accueil."
        </p>
      </div>
    </section>

    <!-- ═══ TÉMOIGNAGES ═══ -->
    <section class="bg-[#FFF8F0] py-20 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Avis clients</span>
          <h2 class="font-serif text-3xl md:text-4xl text-[#3E2723] font-bold mt-3 mb-2">Ce que les gens disent</h2>
          <div class="flex justify-center items-center gap-1.5 mt-3">
            <div class="flex gap-0.5" aria-label="4.5 étoiles sur 5">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= 4 ? 'text-yellow-400' : 'text-yellow-300/60'" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="text-[#2C1810]/50 text-sm ml-1">4.5/5 — 153 avis Google</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <blockquote v-for="avis in temoignages" :key="avis.auteur" class="bg-white rounded-2xl p-6 shadow-sm border border-[#C47B2B]/10 flex flex-col">
            <div class="flex gap-0.5 mb-4" :aria-label="`${avis.note} étoiles`">
              <svg v-for="i in avis.note" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-[#2C1810]/70 text-sm leading-relaxed italic flex-1 mb-5">"{{ avis.texte }}"</p>
            <footer class="text-[#C47B2B] text-sm font-semibold">— {{ avis.auteur }}</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ═══ CARTE ═══ -->
    <section class="bg-[#FFFDF5] py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em]">Où nous trouver</span>
          <h2 class="font-serif text-2xl text-[#3E2723] font-bold mt-2">1110 Boul. de Sainte-Adèle, Sainte-Adèle QC</h2>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg border border-[#C47B2B]/10">
          <iframe
            title="Localisation Au Petit Chaudron sur Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d-74.1317!3d45.9497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf5b0000000001%3A0x1!2s1110+Boulevard+de+Sainte-Ad%C3%A8le%2C+Sainte-Ad%C3%A8le%2C+QC!5e0!3m2!1sfr!2sca!4v1"
            width="100%" height="380" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const specialites = [
  {
    nom: 'Crêpe Dubaï',
    description: 'Pistaches, chocolat blanc, kadaïf croustillant et sirop de rose.',
    prix: '12,99$',
    vedette: true,
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
    alt: 'Crêpe Dubaï garnie de pistaches et chocolat blanc',
  },
  {
    nom: 'Déjeuner complet',
    description: 'Oeufs, bacon, saucisse, rôties, fèves au lard. Portions généreuses.',
    prix: 'À partir de 3,99$',
    vedette: false,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    alt: 'Assiette de déjeuner complet avec oeufs et bacon',
  },
  {
    nom: 'Crêpe Biscoff',
    description: 'Tartinade Biscoff, banane tranchée, chantilly maison.',
    prix: '11,49$',
    vedette: true,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Crêpe Biscoff avec banane et chantilly',
  },
]

const temoignages = [
  {
    texte: 'Les crêpes sont absolument incroyables. La crêpe Dubaï, c\'est quelque chose de spécial. Le personnel est aux petits soins et les portions sont vraiment généreuses. On y retourne chaque semaine.',
    auteur: 'Marie-Claude T.',
    note: 5,
  },
  {
    texte: 'Un vrai restaurant de quartier comme on n\'en fait plus. Prix imbattables, ambiance chaleureuse, staff qui vous accueille comme si vous étiez de la famille. Le déjeuner complet à 3,99$, c\'est incroyable.',
    auteur: 'Jean-François L.',
    note: 5,
  },
  {
    texte: 'On vient de loin pour déjeuner ici. L\'équipe est fantastique, la nourriture est faite maison et les portions sont énormes. Un endroit qui fait chaud au coeur.',
    auteur: 'Sylvie B.',
    note: 5,
  },
]
</script>
