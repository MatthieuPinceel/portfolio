<template>
  <section class="contact">
    <h1>Contactez-moi</h1>
    <p>Vous avez un projet ou une question ? Utilisez le formulaire ci-dessous, je vous répondrai rapidement.</p>
    <form @submit.prevent="sendEmail" class="contact-form">
      <div class="field">
        <label for="lastName">Nom</label>
        <input id="lastName" v-model="form.lastName" required />
      </div>
      <div class="field">
        <label for="firstName">Prénom</label>
        <input id="firstName" v-model="form.firstName" required />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="form.email" required />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import { ref } from 'vue'

const form = ref({
  lastName: '',
  firstName: '',
  email: '',
  message: ''
})

function sendEmail() {
  const subject = encodeURIComponent('Message depuis le portfolio')
  const body = encodeURIComponent(
    `Nom: ${form.value.lastName}\nPrénom: ${form.value.firstName}\nEmail: ${form.value.email}\n\n${form.value.message}`
  )
  window.location.href =
    `mailto:matthieu1.pinceel@gmail.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact {
  /* global section padding applies */
  max-width: 600px;
  margin: 0 auto;
}
.contact h1 {
  margin-bottom: 0.5rem;
}
.contact p {
  margin-bottom: 1.5rem;
}
.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.contact-form .field {
  display: flex;
  flex-direction: column;
}
.contact-form .field:nth-child(3),
.contact-form .field:nth-child(4) {
  grid-column: span 2;
}
.contact label {
  font-weight: bold;
  margin-bottom: 0.25rem;
}
.contact input,
.contact textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.contact button {
  grid-column: span 2;
  justify-self: start;
}
</style>
