<template>
  <section class="rugby">
    <BackButton />
    <h1>Rugby</h1>
    <article class="intro">
      <p>Un sport collectif passionnant qui m'a appris la ténacité, le travail d'équipe et le dépassement de soi. Voici mon parcours et mes souvenirs du rugby.</p>
    </article>

    <article class="gallery-section">
      <h2>Mes Moments & Équipes</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Rugby ${index + 1}`" />
          <p>Image {{ index + 1 }}</p>
        </div>
      </div>
      <p v-if="images.length === 0" class="no-images">Aucune image trouvée. Ajoutez des images au dossier <code>src/assets/gallery/Rugby/</code></p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BackButton from '@/components/BackButton.vue'
import { getGalleryImages } from '@/utils/galleryLoader'

const images = computed(() => getGalleryImages('Rugby'))
</script>

<style scoped>
.rugby {
}

.rugby .intro {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.gallery-section h2 {
  color: #42b983;
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background-color: #f5f5f5;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.gallery-item p {
  padding: 1rem;
  text-align: center;
  color: #333;
  font-weight: 500;
  margin: 0;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(66, 185, 131, 0.3);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>


.no-images {
  text-align: center;
  color: #999;
  padding: 2rem;
  font-style: italic;
}

.no-images code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  color: #333;
}