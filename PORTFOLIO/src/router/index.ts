import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Cv from '../views/Cv.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
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
