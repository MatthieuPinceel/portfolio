<template>
  <section class="projects">
    <h1>Mes projets</h1>
        <div class="card-list">
      <div class="card" v-for="project in projects" :key="project.name">
        <h2>{{ project.name }}</h2>
        <p><strong>Période :</strong> {{ project.date }}</p>
        <p><strong>Durée :</strong> {{ project.duration }} • <strong>Équipe :</strong> {{ project.teamSize }} personnes</p>
        <a :href="project.github" target="_blank" rel="noopener" class="github-link">Voir sur GitHub</a>
      </div>
    </div>
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
    name: 'Application de gestion de tâches',
    date: '2024-11 à 2025-02',
    duration: '4 mois',
    teamSize: 4,
    github: 'https://github.com/matthieu/tasks-app'
  },
  {
    name: 'Site vitrine pour un photographe',
    date: '2025-05',
    duration: '1 mois',
    teamSize: 1,
    github: 'https://github.com/matthieu/photographer-portfolio'
  }
])
</script>

<style scoped>
.github-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #42b983;
}
</style>
