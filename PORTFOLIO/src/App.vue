<script setup lang="ts">
import Footer from './components/Footer.vue'
// la navigation est gérée par vue-router
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <img src="/IMG_MAHIEU.png" alt="Matthieu Pinceel" class="header-image" />
      <h1 class="site-title">Portfolio Matthieu Pinceel</h1>
      <nav class="site-nav">
        <router-link to="/">À propos</router-link>
        <router-link to="/professionel">Mes projets et mon parcours</router-link>
        <router-link to="/video">Mon BUT en 180s</router-link>
        <router-link to="/cv">CV</router-link>
        <router-link to="/contact">Contactez-moi</router-link>
      </nav>
    </div>
  </header>

  <main class="site-content">
    <router-view />
  </main>

  <Footer />
</template>

<style scoped>
.site-header {
  background-color: #282c34;
  color: white;
  padding: 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  flex-wrap: wrap;
}

.header-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #61dafb;
  flex-shrink: 0;
}

.site-title {
  margin: 0;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  margin-left: auto;
}

.site-nav a {
  color: #61dafb;
  text-decoration: none;
  font-size: 0.9rem;
  white-space: nowrap;
}

.site-nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #61dafb;
}

.site-content {
  padding: 2rem 1rem;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header-image {
    width: 45px;
    height: 45px;
  }

  .site-title {
    font-size: 1.1rem;
  }

  .site-nav a {
    font-size: 0.8rem;
  }
}
</style>
