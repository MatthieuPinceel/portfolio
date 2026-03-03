<template>
  <section class="contact">
    <h1>Contact</h1>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="lastName">Nom:</label>
        <input id="lastName" v-model="form.lastName" required />
      </div>
      <div>
        <label for="firstName">Prénom:</label>
        <input id="firstName" v-model="form.firstName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script setup lang="ts">
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
  padding: 2rem;
}
.contact form > div {
  margin-bottom: 1rem;
}
.contact label {
  display: block;
  font-weight: bold;
}
.contact input,
.contact textarea {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
</style>
