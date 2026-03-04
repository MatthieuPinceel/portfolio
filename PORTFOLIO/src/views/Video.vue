<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
</script>

<template>
  <section class="video">
    <BackButton />
    <h1>Mon BUT en 180 secondes</h1>
    <p>Une présentation de mon BUT en moins de 3 minutes.</p>
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="Mon BUT en 180 secondes"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.video {
  /* global section padding applies */
}

.video p {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.video-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.video-container iframe {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}

@media (max-width: 768px) {
  .video-container iframe {
    width: 100%;
  }
}
</style>
