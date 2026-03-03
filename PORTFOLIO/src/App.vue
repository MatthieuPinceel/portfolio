<script setup lang="ts">
// la navigation est gérée par vue-router
</script>

<template>
  <nav>
    <router-link to="/">À propos</router-link> |
    <router-link to="/projects">Projets</router-link> |
    <router-link to="/cv">CV</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style>
/* simple navigation */
nav {
  padding: 1rem;
  background: #f9f9f9;
}

nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-active {
  font-weight: bold;
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
