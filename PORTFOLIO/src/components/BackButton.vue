<template>
  <button class="back-button" @click="goBack" title="Retour à la page précédente" aria-label="Retour">
    ← Retour
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.back-button {
  background-color: #61dafb;
  color: #282c34;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all 0.2s ease;
  margin-bottom: 1.5rem;
}

.back-button:hover {
  background-color: #42b983;
  color: white;
}

.back-button:active {
  transform: scale(0.95);
}
</style>
