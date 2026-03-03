import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import professionel from '../views/Professionnel.vue'
import Video from '../views/Video.vue'
import Cv from '../views/Cv.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/professionel', name: 'professionel', component: professionel },
  { path: '/video', name: 'Video', component: Video },
  { path: '/cv', name: 'Cv', component: Cv },
  { path: '/contact', name: 'Contact', component: Contact },
  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
