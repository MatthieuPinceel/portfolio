<script setup lang="ts">
import Footer from './components/Footer.vue'
// la navigation est gérée par vue-router
</script>

<template>
  <header class="site-header">
    <h1 class="site-title">Portfolio Matthieu Pinceel</h1>
    <nav class="site-nav">
      <router-link to="/">À propos</router-link>
      <router-link to="/professionel">Mon parcours</router-link>
      <router-link to="/video">Mon BUT en 180s</router-link>
      <router-link to="/cv">CV</router-link>
      <router-link to="/contact">Contactez-moi</router-link>
    </nav>
  </header>

  <main class="site-content">
    <router-view />
  </main>

  <Footer />
</template>

<style scoped>
.site-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282c34;
  color: white;
  padding: 1rem;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
}

.site-nav {
  margin-top: 0.5rem;
}
.site-nav a {
  margin: 0 0.75rem;
  color: #61dafb;
  text-decoration: none;
}
.site-nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #61dafb;
}

.site-content {
  padding: 2rem 1rem;
}
</style>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
