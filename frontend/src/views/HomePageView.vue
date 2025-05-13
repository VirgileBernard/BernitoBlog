<script setup lang="ts">
import { ref } from 'vue'
import { FwbModal, FwbButton } from 'flowbite-vue'

import Searchbar from '@/components/Searchbar.vue'
import Navbar from '@/components/Navbar.vue'
import Newpost from '@/components/Newpost.vue'

/* Affichage / masquage de la modale */
const showModal = ref(false)
const closeModal = () => { showModal.value = false }
</script>

<template>
  <!-- Contenu principal -->
  <Searchbar />

  <!-- … autres sections de ta page … -->

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
</template>
