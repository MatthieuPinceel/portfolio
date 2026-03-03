# PORTFOLIO

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Nouvelle structure du portfolio

Le projet utilise maintenant **vue-router** pour naviguer entre plusieurs pages :

- `À propos` (présentation, passions, parcours)
- `Projets` (liste des projets avec dates, durée, équipe et lien GitHub)
- `CV` (aperçu/téléchargement du CV)
- `Contact` (formulaire qui ouvre un `mailto:` vers *matthieu1.pinceel@gmail.com*)

La page a été stylisée pour donner une apparence plus professionnelle :

- un en‑tête sombre avec le titre et le menu
- mise en page responsive des sections
- cartes pour les projets, formulaire amélioré, etc.

Installez la dépendance avec :

```sh
npm install vue-router@4
```

Déposez votre CV (`CV_2026-03-03_Matthieu_Pinceel.pdf` ou autre) dans `public/`.

La navigation se trouve dans `src/App.vue` et la configuration du routeur dans `src/router/index.ts`.

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
