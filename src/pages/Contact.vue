<template>
  <div class="bg-[#FFF8F0]">
    <!-- ═══ HERO ═══ -->
    <section class="relative h-56 md:h-72 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1400&q=80"
        alt="Table de restaurant avec café et déjeuner"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-[#2C1810]/65 flex flex-col items-center justify-center text-center px-4">
        <span class="text-[#C47B2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">On est là pour vous</span>
        <h1 class="font-serif text-4xl md:text-5xl text-white font-bold mb-2">Contact & réservations</h1>
        <p class="text-white/70 font-serif italic">On est là pour vous accueillir.</p>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- ═══ INFOS ═══ -->
      <div class="space-y-8">
        <div>
          <h2 class="font-serif text-2xl text-[#3E2723] font-bold mb-6">Informations</h2>

          <div class="space-y-5">
            <div class="flex gap-4 items-start">
              <div class="w-11 h-11 bg-[#C47B2B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-[#3E2723] text-sm mb-0.5">Adresse</p>
                <address class="not-italic text-[#2C1810]/65 text-sm leading-relaxed">
                  1110 Boulevard de Sainte-Adèle<br>Sainte-Adèle, QC J8B 2N3
                </address>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-11 h-11 bg-[#C47B2B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-[#3E2723] text-sm mb-0.5">Téléphone</p>
                <a href="tel:4502299678" class="text-[#C47B2B] hover:text-[#B54A32] transition-colors font-semibold text-sm">450-229-9678</a>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-11 h-11 bg-[#C47B2B] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-[#3E2723] text-sm mb-0.5">Horaires</p>
                <p class="text-[#2C1810]/65 text-sm">Mardi au dimanche : 7h00 à 14h00</p>
                <p class="text-[#2C1810]/40 text-sm">Fermé le lundi</p>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="w-11 h-11 bg-[#1877F2] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <p class="font-semibold text-[#3E2723] text-sm mb-0.5">Facebook</p>
                <a href="https://www.facebook.com/profile.php?id=61577080607047" target="_blank" rel="noopener noreferrer" class="text-[#C47B2B] hover:text-[#B54A32] transition-colors text-sm">
                  Suivez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA appel -->
        <a href="tel:4502299678" class="flex items-center justify-center gap-2.5 bg-[#B54A32] text-white font-semibold px-6 py-4 rounded-xl hover:bg-[#C47B2B] transition-all shadow-md hover:shadow-lg w-full">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
          </svg>
          Appeler maintenant — 450-229-9678
        </a>

        <!-- Note groupes -->
        <div class="flex gap-3 bg-[#C47B2B]/10 border border-[#C47B2B]/25 rounded-xl p-4">
          <svg class="w-5 h-5 text-[#C47B2B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <p class="text-sm text-[#3E2723]">
            Pour les groupes de 8 personnes et plus, appelez-nous directement pour qu'on puisse vous accueillir dans les meilleures conditions.
          </p>
        </div>

        <!-- Carte -->
        <div class="rounded-2xl overflow-hidden shadow-md border border-[#C47B2B]/10">
          <iframe
            title="Localisation Au Petit Chaudron"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d-74.1317!3d45.9497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf5b0000000001%3A0x1!2s1110+Boulevard+de+Sainte-Ad%C3%A8le%2C+Sainte-Ad%C3%A8le%2C+QC!5e0!3m2!1sfr!2sca!4v1"
            width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- ═══ FORMULAIRE ═══ -->
      <div>
        <h2 class="font-serif text-2xl text-[#3E2723] font-bold mb-6">Demande de réservation</h2>

        <!-- Succès -->
        <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-2xl p-8 text-center" role="alert">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-serif text-xl font-semibold text-green-800 mb-2">Demande envoyée !</h3>
          <p class="text-green-700 text-sm leading-relaxed">
            Merci ! On vous confirme votre place par téléphone dans les plus brefs délais.
          </p>
          <button @click="submitted = false" class="mt-5 text-sm text-green-600 underline hover:no-underline">
            Faire une autre demande
          </button>
        </div>

        <form v-else @submit.prevent="soumettre" class="space-y-4 bg-white rounded-2xl p-6 shadow-sm border border-[#C47B2B]/10" novalidate>
          <div>
            <label for="nom" class="block text-sm font-medium text-[#3E2723] mb-1.5">
              Nom complet <span class="text-[#B54A32]" aria-hidden="true">*</span>
            </label>
            <input
              id="nom" v-model="form.nom" type="text" required autocomplete="name" placeholder="Votre nom"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5] transition-shadow"
              :class="errors.nom ? 'border-[#B54A32]' : 'border-[#C47B2B]/25'"
            />
            <p v-if="errors.nom" class="text-[#B54A32] text-xs mt-1">{{ errors.nom }}</p>
          </div>

          <div>
            <label for="telephone" class="block text-sm font-medium text-[#3E2723] mb-1.5">
              Téléphone <span class="text-[#B54A32]" aria-hidden="true">*</span>
            </label>
            <input
              id="telephone" v-model="form.telephone" type="tel" required autocomplete="tel" placeholder="450-000-0000"
              class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5] transition-shadow"
              :class="errors.telephone ? 'border-[#B54A32]' : 'border-[#C47B2B]/25'"
            />
            <p v-if="errors.telephone" class="text-[#B54A32] text-xs mt-1">{{ errors.telephone }}</p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label for="nb_personnes" class="block text-sm font-medium text-[#3E2723] mb-1.5">
                Personnes <span class="text-[#B54A32]" aria-hidden="true">*</span>
              </label>
              <select
                id="nb_personnes" v-model="form.nb_personnes" required
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5]"
                :class="errors.nb_personnes ? 'border-[#B54A32]' : 'border-[#C47B2B]/25'"
              >
                <option value="" disabled>Choisir</option>
                <option v-for="n in 12" :key="n" :value="n">{{ n }} {{ n === 1 ? 'pers.' : 'pers.' }}</option>
                <option value="13+">13+</option>
              </select>
              <p v-if="errors.nb_personnes" class="text-[#B54A32] text-xs mt-1">{{ errors.nb_personnes }}</p>
            </div>
            <div>
              <label for="date_souhaitee" class="block text-sm font-medium text-[#3E2723] mb-1.5">
                Date <span class="text-[#B54A32]" aria-hidden="true">*</span>
              </label>
              <input
                id="date_souhaitee" v-model="form.date_souhaitee" type="date" required :min="dateMin"
                class="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5]"
                :class="errors.date_souhaitee ? 'border-[#B54A32]' : 'border-[#C47B2B]/25'"
              />
              <p v-if="errors.date_souhaitee" class="text-[#B54A32] text-xs mt-1">{{ errors.date_souhaitee }}</p>
            </div>
          </div>

          <div>
            <label for="heure" class="block text-sm font-medium text-[#3E2723] mb-1.5">Heure souhaitée</label>
            <select id="heure" v-model="form.heure" class="w-full border border-[#C47B2B]/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5]">
              <option value="">Pas de préférence</option>
              <option v-for="h in heures" :key="h" :value="h">{{ h }}</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-[#3E2723] mb-1.5">Message (optionnel)</label>
            <textarea
              id="message" v-model="form.message" rows="3"
              placeholder="Allergies, occasion spéciale, chaise haute..."
              class="w-full border border-[#C47B2B]/25 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C47B2B] bg-[#FFFDF5] resize-none"
            ></textarea>
          </div>

          <div v-if="erreurGlobale" class="bg-red-50 border border-red-200 rounded-lg p-3" role="alert">
            <p class="text-red-700 text-sm">{{ erreurGlobale }}</p>
          </div>

          <button
            type="submit" :disabled="loading"
            class="w-full bg-[#C47B2B] text-white font-semibold py-4 rounded-xl hover:bg-[#B54A32] transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg v-if="loading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ loading ? 'Envoi en cours...' : 'Envoyer la demande' }}
          </button>

          <p class="text-xs text-[#2C1810]/45 text-center">
            Nous vous confirmons votre réservation par téléphone.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { getSupabase } from '../lib/supabase.js'

const submitted = ref(false)
const loading = ref(false)
const erreurGlobale = ref('')

const form = reactive({ nom: '', telephone: '', nb_personnes: '', date_souhaitee: '', heure: '', message: '' })
const errors = reactive({ nom: '', telephone: '', nb_personnes: '', date_souhaitee: '' })

const heures = ['7h00','7h30','8h00','8h30','9h00','9h30','10h00','10h30','11h00','11h30','12h00','12h30','13h00']

const dateMin = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
})

function valider() {
  let ok = true
  Object.keys(errors).forEach(k => errors[k] = '')
  if (!form.nom.trim()) { errors.nom = 'Le nom est requis.'; ok = false }
  if (!form.telephone.trim()) { errors.telephone = 'Le téléphone est requis.'; ok = false }
  if (!form.nb_personnes) { errors.nb_personnes = 'Requis.'; ok = false }
  if (!form.date_souhaitee) { errors.date_souhaitee = 'Requise.'; ok = false }
  return ok
}

async function soumettre() {
  if (!valider()) return
  loading.value = true
  erreurGlobale.value = ''
  try {
    const supabase = getSupabase()
    const { error } = await supabase.from('reservations').insert({
      nom: form.nom.trim(),
      telephone: form.telephone.trim(),
      nb_personnes: String(form.nb_personnes),
      date_souhaitee: form.heure ? `${form.date_souhaitee} ${form.heure}` : form.date_souhaitee,
      message: form.message.trim() || null,
      lu: false,
    })
    if (error) throw error
    submitted.value = true
    Object.assign(form, { nom: '', telephone: '', nb_personnes: '', date_souhaitee: '', heure: '', message: '' })
  } catch (err) {
    console.error(err)
    erreurGlobale.value = 'Une erreur est survenue. Veuillez réessayer ou nous appeler au 450-229-9678.'
  } finally {
    loading.value = false
  }
}
</script>
