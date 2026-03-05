<template>
  <section class="professionel">
    <BackButton />
    <h1>Mon parcours et mes projets</h1>

    <!-- Accordion 1: Projets -->
    <div class="accordion">
      <button class="accordion-btn" @click="toggleProjects">
        <span class="accordion-title">Mes Projets</span>
        <span class="accordion-icon">{{ showProjects ? '▼' : '▶' }}</span>
      </button>
      <div v-show="showProjects" class="accordion-content">
        <div class="card-list">
          <div class="card" v-for="project in projects" :key="project.name">
            <div class="card-image">
              <img :src="project.image" :alt="project.name" class="project-image" />
            </div>
            <h3>{{ project.name }}</h3>
            <p class="description">{{ project.description }}</p>
            <p><strong>Équipe :</strong> {{ project.teamSize }} personne(s)</p>
            <div class="technologies">
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">{{
                tech
              }}</span>
            </div>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="github-link"
              >Voir sur GitHub →</a
            >
            <div v-if="project.durée" class="duration">
              <strong>Durée :</strong> {{ project.durée }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Accordion 2: Formation et Expérience -->
    <div class="accordion">
      <button class="accordion-btn" @click="toggleFormation">
        <span class="accordion-title">Mes Formations & Expériences</span>
        <span class="accordion-icon">{{ showFormation ? '▼' : '▶' }}</span>
      </button>
      <div v-show="showFormation" class="accordion-content">
        <article class="section-part">
          <h3>Expériences professionnelles</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="experience in experiences" :key="experience.company">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ experience.position }}</h4>
                <p>
                  <strong>{{ experience.company }}</strong>
                </p>
                <p class="year">{{ experience.period }}</p>
                <p>{{ experience.description }}</p>
              </div>
            </div>
          </div>
        </article>
        <article class="section-part">
          <h3>Parcours scolaire</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="education in educations" :key="education.school">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ education.diploma }}</h4>
                <p>
                  <strong>{{ education.school }}</strong>
                </p>
                <p class="year">{{ education.year }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
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
  description: string
  image: string
  teamSize: number
  github: string | null
  technologies: string[]
  durée: string | null
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
    diploma: 'BUT – Informatique',
    school: 'ULCO, Calais',
    year: '2023 – 2026',
  },
  {
    diploma: 'BAC - Général options NSI et mathématiques',
    school: 'Lycée Alexandre Ribot, Saint-Omer',
    year: '2020 – 2023',
  },
])

const experiences = ref<Experience[]>([
  {
    position: 'STAGE - Développeur Web',
    company: 'Département du Nord',
    period: '2025',
    description: "Réalisation d'un wordpress spécialisé pour le service communication.",
  },
  {
    position: 'Hôte de caisse',
    company: 'Carrefour',
    period: '2025 - Present',
    description:
      "Accueil des clients, gestion des transactions et maintien d'un environnement de travail propre et organisé.",
  },
  {
    position: 'Interimaire - Traveaux publics',
    company: 'Ramery',
    period: '2023 - 2024',
    description: 'Construction de chaussées et de trottoirs.',
  },
])

const projects = ref<Project[]>([
  {
    name: 'Réalité virtuelle',
    description:
      "Jeu VR sur Unreal Engine - thème nettoyage d'un bunker. Implémentation complète d'un environnement VR immersif avec mécaniques de jeu. Optimisation des performances graphiques et de l'expérience utilisateur pour VR. Travail en équipe de 5 personnes : coordination des tâches, programmation et intégration.",
    image: 'src/assets/professionnel/rv.png',
    teamSize: 5,
    github: null,
    technologies: ['Unreal Engine', 'Blueprints'],
    durée: '1 semaine',
  },
  {
    name: 'Portfolio',
    description:
      "Portfolio personnel. Développement d'une application web complète avec Vue.js et TypeScript, intégration multimédia (galeries, vidéos).",
    image: 'src/assets/professionnel/portfolio.png',
    teamSize: 1,
    github: 'https://github.com/MatthieuPinceel/portfolio',
    technologies: ['Vue.js', 'TypeScript', 'Vite'],
    durée: null,
  },
  {
    name: 'Clash of Piglin',
    description:
      "Jeu stratégique en temps réel inspiré de Minecraft. Implémentation du moteur de jeu, système de combat, IA ennemie et mécaniques de base piglin. Équilibrage du gameplay, optimisation de l'IA pour fluidité du jeu. Équipe de 5 : répartition design/gameplay.",
    image: 'src/assets/professionnel/clash.png',
    teamSize: 5,
    github: 'https://github.com/Zwartkat/Clash-of-piglin',
    technologies: ['Python'],
    durée: '3 mois',
  },
  {
    name: 'Jeu basé sur les drapeaux du monde | flagle',
    description:
      'Jeu de reconnaissance des drapeaux mondiaux en Dart. Développement complet en Dart : interface utilisateur, système de quizz, gestion des données. Code léger et performant, optimisation UX pour mobile. Collaboration en équipe de 5 sur un langage moins connu, partage de connaissance.',
    image: 'src/assets/professionnel/flagle.png',
    teamSize: 5,
    github: 'https://github.com/MatthieuPinceel/daltons',
    technologies: ['Dart'],
    durée: '1 mois',
  },
  {
    name: 'Kolonel Krazies',
    description:
      "Projet web interactif Nuit de l'Info 2025 - défi 24h. Conception et développement Web complet en 1 nuit (HTML/CSS/JavaScript). Temps de réalisation faible.",
    image: 'src/assets/professionnel/kolonel-krazies.png',
    teamSize: 5,
    github: 'https://github.com/MatthieuPinceel/Kolonel-Krazies',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    durée: '24h',
  },
  {
    name: 'SAE Maintenance',
    description:
      "Maintenance et mise à niveau technique d'une borne d'arcade. Implémentation de documentation, intégration système. Amélioration des performances, maintenabilité du code. Gestion seul du projet.",
    image: 'src/assets/professionnel/Sae-maintenance.png',
    teamSize: 1,
    github: 'https://github.com/MatthieuPinceel/SAE_Maintenance',
    technologies: ['Python', 'Raspberry Pi', 'shell', 'Java'],
    durée: '2 semaines',
  },
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
}

.card h3 {
  margin: 0 0 1rem;
  color: #333;
  font-size: 1.1rem;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  background-color: #f0f0f0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card p {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
}

.card .description {
  margin-top: 1rem;
  color: #555;
  line-height: 1.5;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-badge {
  display: inline-block;
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
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

.duration {
  margin-top: 0.5rem;
  color: #999;
  font-size: 0.9rem;
}
</style>
