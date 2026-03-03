<template>
  <section class="cv">
    <h1>Mon CV</h1>
    <p>Voici un aperçu de mon CV professionnel. Vous pouvez le télécharger ou le visualiser directement ci-dessous.</p>
    <a class="download-btn" href="/CV_2026-03-03_Matthieu_Pinceel.pdf" target="_blank">Télécharger le PDF</a>
    <iframe
      src="/CV_2026-03-03_Matthieu_Pinceel.pdf"
      class="cv-frame"
      title="CV"
    ></iframe>
  </section>
</template>

<style scoped>
.cv {
  /* global section padding applies */
  text-align: center;
}
.download-btn {
  display: inline-block;
  margin: 1rem 0;
  background: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
}
.cv-frame {
  width: 100%;
  height: 800px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
