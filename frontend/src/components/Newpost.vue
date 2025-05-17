<template>
  <div class="modalOverlay">
    <div class="modalContent">
      <form>
        <div class="postContainer">
          <div class="postHeader">
            <h2>Ecrire un nouvel article</h2>
            <button @click="$emit('close')" class="closeBtn">×</button>
          </div>

          <!-- Outils de mise en forme -->
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">



            <!-- Zone de texte -->
            <div class="px-4 py-2">
              <!-- Champ titre -->
              <input type="text" v-model="title" placeholder="Titre de l'article..." class="titleInput" required />

              <textarea id="editor" rows="8" v-model="content" placeholder="Écrire un article..." required></textarea>




            </div>

            <!-- Outils de mise en forme -->
            <div class="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-gray-600">
                <div
                  class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <button type="button" class="editorButton">
                      <i class="fa-solid fa-file-import editorIcon"></i>
                      <span class="sr-only">Attach file</span>
                    </button>

                    <button type="button" class="editorButton">
                      <i class="fa-regular fa-image editorIcon"></i>
                      <span class="sr-only">Upload image</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>


          </div>

          <button type="submit" class="publishBtn">Publier</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineEmits(["close"]);

const title = ref("");
const content = ref("");
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContent {
  background: var(--WhiteGlass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 80%;
}

.postHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1vh 0;
  font-weight: medium;
}



.titleInput,
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: var(--GreyInput);
  color: var(--TextBlack);
  margin: 1rem 0;
  font-style: italic;
  font-size: medium;
}

.actionButton {
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.2rem;
}

.publishBtn {
  width: 100%;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  background: var(--BlueNavy);
  /* Même bleu que la modal */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: var(--TextWhite);
  transition: 0.3s;
  border: 1px solid var(--BlueNavy);
}

.publishBtn:hover {
  background: transparent;
  color: var(--BlueNavy);
  border: 1px solid var(--BlueNavy);
}


.editorIcon {
  margin-right: 1rem;
  font-size: 1.4rem;
  /* Grossir un peu les icônes */
  color: var(--Icone);
  /* Couleur de base */
  transition: color 0.3s ease, transform 0.3s ease;
  /* Animation fluide */
}

.editorIcon:hover {
  color: var(--IconeHover);
  /* Autre gris au survol */
  transform: scale(1.12);
  /* Effet léger d'agrandissement */
}


.closeBtn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--color-primary);
  cursor: pointer;
  transition: transform 0.35s ease;
  z-index: 101;
}

.closeBtn:hover {
  transform: rotate(90deg);
}
</style>
