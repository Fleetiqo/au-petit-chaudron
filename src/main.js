import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Accueil from './pages/Accueil.vue'
import Menu from './pages/Menu.vue'
import Histoire from './pages/Histoire.vue'
import Contact from './pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Accueil },
    { path: '/menu', component: Menu },
    { path: '/notre-histoire', component: Histoire },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
