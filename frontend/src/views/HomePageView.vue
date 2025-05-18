<template>
  <!-- Contenu principal -->
  <Searchbar class="mb-5" />


  <div class="articleContainer">
    <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
  </div>


  <!-- Barre de navigation fixe en bas -->
  <Navbar @open-newpost="showModal = true" />

  <!-- Modale « Créer un nouveau post » -->
  <fwb-modal v-if="showModal" size="2xl" @close="closeModal">

    <!-- Header -->
    <template #header>
      Créer un nouveau post
    </template>

    <!-- Body -->
    <template #body>
      <Newpost />
    </template>

    <!-- Footer -->
    <template #footer>
      <FwbButton color="green" @click="closeModal">Publier</FwbButton>
      <FwbButton color="alternative" @click="closeModal">Annuler</FwbButton>
    </template>

  </fwb-modal>

  <Footer />

</template>



<script setup lang="ts">
import { ref } from 'vue'
import { FwbModal, FwbButton } from 'flowbite-vue'

import Searchbar from '@/components/Searchbar.vue'
import Navbar from '../components/Navbar.vue'
import Newpost from '../components/Newpost.vue'
import ArticleCard from "../components/ArticleCard.vue";
import Footer from '@/components/Footer.vue'




/* Affichage / masquage de la modale */
const showModal = ref(false)
const closeModal = () => { showModal.value = false }





const articles = [
  { id: 1, title: "Update BernitoStore", content: "La boutique Bernito offre une expérience immersive, où la navigation fluide de son site, construit avec Vue 3 et sa Composition API la plus récente, reflète la disposition intuitive des produits. En arrière-plan, le serveur Nest, à jour selon la documentation officielle 10.X, gère les paiements, notifications et analytiques rapides. Avec un barista servant des lattés au caramel salé et des enfants créant des badges, c'est un lieu où se mêlent technologie et convivialité, transformant chaque visite en un moment chaleureux.", author: "Virgile B.", job: "CEO BernitoCorporation" },
  { id: 2, title: "Market Trends Analysis", content: "Cet article explore les tendances actuelles du marché technologique, soulignant l'importance de l'adaptation rapide aux innovations et l'essor du télétravail qui redéfinit les méthodes de production et de collaboration.", author: "John Doe", job: "Développeur" },
  { id: 3, title: "Vue 3: Advanced Techniques", content: "Découvrez des techniques avancées avec Vue 3, incluant l'utilisation optimale de la Composition API et des stratégies pour gérer des applications complexes et performantes.", author: "Alice M.", job: "Senior Frontend Developer" },
  { id: 4, title: "Building Scalable Applications", content: "Un guide pratique sur la création d'applications évolutives en combinant Vue 3 avec des architectures modernes, mettant l'accent sur la performance, la sécurité et la maintenabilité du code.", author: "Bob S.", job: "Software Architect" }
];
</script>



<style scoped>
.articleCard {
  width: 75%;
  margin: 5vh auto;
  background-color: var(--WhiteGlass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(99, 99, 99, 0.3);
  padding: 1rem;
}
</style>
