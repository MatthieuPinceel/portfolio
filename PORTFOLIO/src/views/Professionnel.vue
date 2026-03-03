<template>
  <section class="professionel">
    <h1>Mon parcours</h1>

    <!-- Accordion 1: Formation et Expérience -->
    <div class="accordion">
      <button class="accordion-btn" @click="toggleFormation">
        <span class="accordion-title">Mes Formations & Expériences</span>
        <span class="accordion-icon">{{ showFormation ? '▼' : '▶' }}</span>
      </button>
      <div v-show="showFormation" class="accordion-content">
        <article class="section-part">
          <h3>Parcours scolaire</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="education in educations" :key="education.school">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ education.diploma }}</h4>
                <p><strong>{{ education.school }}</strong></p>
                <p class="year">{{ education.year }}</p>
              </div>
            </div>
          </div>
        </article>

        <article class="section-part">
          <h3>Expériences professionnelles</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="experience in experiences" :key="experience.company">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ experience.position }}</h4>
                <p><strong>{{ experience.company }}</strong></p>
                <p class="year">{{ experience.period }}</p>
                <p>{{ experience.description }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Accordion 2: Projets -->
    <div class="accordion">
      <button class="accordion-btn" @click="toggleProjects">
        <span class="accordion-title">Mes Projets</span>
        <span class="accordion-icon">{{ showProjects ? '▼' : '▶' }}</span>
      </button>
      <div v-show="showProjects" class="accordion-content">
        <div class="card-list">
          <div class="card" v-for="project in projects" :key="project.name">
            <h3>{{ project.name }}</h3>
            <p><strong>Période :</strong> {{ project.date }}</p>
            <p><strong>Durée :</strong> {{ project.duration }}</p>
            <p><strong>Équipe :</strong> {{ project.teamSize }} personne(s)</p>
            <p class="description"><strong>Description :</strong> {{ project.description }}</p>
            <a :href="project.github" target="_blank" rel="noopener" class="github-link">Voir sur GitHub →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  diploma: string
  school: string
  year: string
}

interface Experience {
  position: string
  company: string
  period: string
  description: string
}

interface Project {
  name: string
  date: string
  duration: string
  teamSize: number
  description: string
  github: string
}

const showFormation = ref(true)
const showProjects = ref(true)

const toggleFormation = () => {
  showFormation.value = !showFormation.value
}

const toggleProjects = () => {
  showProjects.value = !showProjects.value
}

const educations = ref<Education[]>([
  {
    diploma: 'Bachelor/Licence – Informatique',
    school: 'Université de …',
    year: '2020 – 2023'
  },
  {
    diploma: 'BTS Services Informatiques aux Organisations',
    school: 'Lycée de …',
    year: '2018 – 2020'
  }
])

const experiences = ref<Experience[]>([
  {
    position: 'Développeur Full-Stack',
    company: 'Entreprise X',
    period: '2023 – Présent',
    description: 'Réalisation d\'applications web modernes, gestion de projets et refonte d\'anciens systèmes.'
  },
  {
    position: 'Développeur Frontend (Stage)',
    company: 'Entreprise Y',
    period: '2022 – 2023',
    description: 'Contribution sur des interfaces React, amélioration de l\'UX/UI et collaboration avec l\'équipe design.'
  }
])

const projects = ref<Project[]>([
  {
    name: 'Application de gestion de tâches',
    date: '2024-11 à 2025-02',
    duration: '4 mois',
    teamSize: 4,
    description: 'Application web permettant de créer, organiser et suivre des tâches en équipe avec système de notifications.',
    github: 'https://github.com/matthieu/tasks-app'
  },
  {
    name: 'Site vitrine pour un photographe',
    date: '2025-05',
    duration: '1 mois',
    teamSize: 1,
    description: 'Portfolio en ligne mettant en valeur les travaux photographiques avec galerie responsive et formulaire de contact.',
    github: 'https://github.com/matthieu/photographer-portfolio'
  }
])
</script>

<style scoped>
.professionel {
  /* global section padding applies */
}

.accordion {
  margin-bottom: 2rem;
}

.accordion-btn {
  width: 100%;
  padding: 1rem;
  background-color: #f5f5f5;
  border: 2px solid #42b983;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.accordion-btn:hover {
  background-color: #42b983;
  color: white;
}

.accordion-title {
  color: #333;
  font-size: 1.1rem;
}

.accordion-btn:hover .accordion-title {
  color: white;
}

.accordion-icon {
  transition: transform 0.3s;
}

.accordion-content {
  padding: 1.5rem;
  background-color: #fafafa;
  border-radius: 0 0 4px 4px;
  border-left: 2px solid #42b983;
  border-right: 2px solid #42b983;
  border-bottom: 2px solid #42b983;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
}

.section-part {
  margin-bottom: 2rem;
}

.section-part h3 {
  color: #42b983;
  margin-bottom: 1rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #42b983, #d4f1e4);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -2.75rem;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #42b983;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #42b983;
}

.timeline-content h4 {
  margin: 0 0 0.25rem;
  color: #333;
  font-size: 1rem;
}

.timeline-content p {
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.95rem;
}

.timeline-content .year {
  font-weight: bold;
  color: #42b983;
}

/* Card list for projects */
.card-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: white;
}

.card h3 {
  margin: 0 0 1rem;
  color: #333;
  font-size: 1.1rem;
}

.card p {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
}

.card .description {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #555;
}

.github-link {
  display: inline-block;
  margin-top: 1rem;
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.github-link:hover {
  color: #369a6c;
}
</style>

