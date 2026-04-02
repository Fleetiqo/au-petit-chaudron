<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterSite />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSite from './components/FooterSite.vue'
import { RouterView } from 'vue-router'
</script>
