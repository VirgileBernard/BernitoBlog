<template>
  <!-- Contenu principal -->
  <Searchbar class="mb-5" />

  <!-- … autres sections de ta page … -->
  <section class="mainContent">

    <div role="status" class="p-4 border border-gray-200 rounded-sm shadow-sm  md:p-6 dark:border-gray-700">
      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 16 20">
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <p class="mb-2">Lorem, ipsum.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, amet. Blanditiis rerum suscipit ex velit
        consequatur optio voluptates expedita deleniti?</p>


      <!-- img du profil -->
      <div class="flex items-center mt-4">
        <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div>
          <p>Virgile B.</p>
          <p>CEO BernitoCorporation</p>
        </div>
      </div>
      <span class="sr-only">Loading...</span>



      <!-- Groupe d’actions -->
      <div class="actionBtn flex items-center gap-2">
        <!-- Bouton Like -->
        <button type="button" @click="liked = !liked" :class="`
      ${likeBtnClasses}
      border border-gray-700
      focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 inline-flex items-center

    `">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 18 18">
            <path
              d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
          </svg>
        </button>

        <!-- Bouton Commentaire -->
        <button type="button" @click="showComments = !showComments"
          class="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-500 font-medium rounded-lg text-sm p-2.5 inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800 dark:hover:bg-gray-500">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
              clip-rule="evenodd" />
            <path fill-rule="evenodd"
              d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Zone de commentaires : seulement si showComments === true -->
      <div v-if="showComments" class="commentairePart mt-3">
        <form>
          <textarea id="message" rows="4" placeholder="Écrire un commentaire..."
            class="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" />
        </form>
      </div>

    </div>




  </section>
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



<script setup lang="ts">
import { ref, computed } from 'vue'
import { FwbModal, FwbButton } from 'flowbite-vue'

import Searchbar from '@/components/Searchbar.vue'
import Navbar from '@/components/Navbar.vue'
import Newpost from '@/components/Newpost.vue'



/* Affichage / masquage de la modale */
const showModal = ref(false)
const closeModal = () => { showModal.value = false }


/* état du like et de l’aire de commentaires */
const liked = ref(false)
const showComments = ref(false)

/* classes dynamiques Tailwind pour le bouton Like */
const likeBtnClasses = computed(() =>
  liked.value
    ? 'text-white fill-white bg-gray-700'
    : 'text-gray-700 hover:bg-gray-700 hover:text-white hover:fill-white'
)
</script>



<style scoped>
.mainContent {
  background-color: #a6a6a6;
  max-width: 40vw;
  margin: 0 auto;
}
</style>
