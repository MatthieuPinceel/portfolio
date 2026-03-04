<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
</script>

<template>
  <section class="about">
    <BackButton />
    <h1>À propos de moi</h1>
    <article class="intro">
      <p>Bonjour, je m'appelle <strong>Matthieu Pinceel</strong>. Voici un peu plus sur ma personne, mes passions et mes centres d'intérêt.</p>
    </article>
    <article class="details">
      <h2>Qui suis-je ?</h2>
      <p>Je suis quelqu'un de curieux et passionné par l'apprentissage. J'aime découvrir de nouvelles choses et repousser mes limites.</p>

      <h2>Mes passions</h2>
      <div class="passions-grid">
        <router-link to="/rugby" class="passion-card">
          <div class="passion-icon">🏉</div>
          <h3>Rugby</h3>
          <p>Un sport collectif passionnant qui m'a appris la ténacité, le travail d'équipe et le dépassement de soi.</p>
        </router-link>
        <router-link to="/gaming" class="passion-card">
          <div class="passion-icon">🎮</div>
          <h3>Jeux vidéo</h3>
          <p>J'aime explorer différents mondes, relever des défis et découvrir les innovations en game design.</p>
        </router-link>
        <router-link to="/cartography" class="passion-card">
          <div class="passion-icon">🗺️</div>
          <h3>Cartographie</h3>
          <p>Fasciné par la représentation de l'espace, les données géographiques et la création de cartes thématiques.</p>
        </router-link>
        <router-link to="/cards" class="passion-card">
          <div class="passion-icon">🎴</div>
          <h3>Cartes à collectionner</h3>
          <p>Un hobby nostalgique : collectionner, échanger et valoriser des cartes rares de différents univers.</p>
        </router-link>
      </div>
    </article>
  </section>
</template>

<style scoped>
/* padding moved to global section rule */
.about {
}
.about .intro {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.about .details h2 {
  margin-top: 1.5rem;
  color: #42b983;
}

.passions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.passion-card {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  border: 2px solid #42b983;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.passion-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(66, 185, 131, 0.25);
  border-color: #369a6c;
}

.passion-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.passion-card h3 {
  color: #333;
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

.passion-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1rem 0 0;
}

@media (max-width: 768px) {
  .passions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
