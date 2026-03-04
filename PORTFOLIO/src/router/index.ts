import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import professionel from '../views/Professionnel.vue'
import Video from '../views/Video.vue'
import Cv from '../views/Cv.vue'
import Contact from '../views/Contact.vue'
import Gaming from '../views/Gaming.vue'
import Cartography from '../views/Cartography.vue'
import Rugby from '../views/Rugby.vue'
import Cards from '../views/Cards.vue'

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/professionel', name: 'professionel', component: professionel },
  { path: '/video', name: 'Video', component: Video },
  { path: '/cv', name: 'Cv', component: Cv },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/gaming', name: 'Gaming', component: Gaming },
  { path: '/cartography', name: 'Cartography', component: Cartography },
  { path: '/rugby', name: 'Rugby', component: Rugby },
  { path: '/cards', name: 'Cards', component: Cards },
  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
