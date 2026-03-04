<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <h3>Me contacter</h3>
      <div class="social-links">
        <router-link to="/contact" class="social-link contact">
          Contactez-moi
        </router-link>
        <a href="https://www.linkedin.com/in/matthieu-pinceel-585025302" target="_blank" rel="noopener" class="social-link linkedin">
          LinkedIn
        </a>
        <a href="https://github.com/MatthieuPinceel" target="_blank" rel="noopener" class="social-link github">
          GitHub
        </a>
      </div>
      <p class="footer-text">&copy; 2026 Matthieu Pinceel. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #282c34;
  color: white;
  padding: 2rem 1rem;
  margin-top: 3rem;
  text-align: center;
}

.footer-content h3 {
  margin: 0 0 1rem;
  color: #61dafb;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  color: white;
  transition: all 0.3s;
}

.social-link.contact {
  background-color: #42b983;
}

.social-link.contact:hover {
  background-color: #369a6c;
}

.social-link.linkedin {
  background-color: #0077b5;
}

.social-link.linkedin:hover {
  background-color: #005a87;
}

.social-link.github {
  background-color: #333;
}

.social-link.github:hover {
  background-color: #1a1a1a;
}

.footer-text {
  margin: 1rem 0 0;
  font-size: 0.9rem;
  color: #999;
}
</style>
