<template>
  <section class="projects">
    <h1>Mes projets</h1>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p>Date: {{ project.date }}, Durée: {{ project.duration }}, Participants: {{ project.teamSize }}</p>
        <a :href="project.github" target="_blank" rel="noopener">Voir sur GitHub</a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  name: string
  date: string
  duration: string
  teamSize: number
  github: string
}

const projects = ref<Project[]>([
  {
    name: 'Exemple',
    date: '2025-01',
    duration: '2 mois',
    teamSize: 3,
    github: 'https://github.com/exemple'
  }
])
</script>

<style scoped>
.projects {
  padding: 2rem;
}
.projects ul {
  list-style: none;
  padding: 0;
}
.projects li {
  margin-bottom: 1.5rem;
}
</style>
