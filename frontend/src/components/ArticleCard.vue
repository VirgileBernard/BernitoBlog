<template>
  <div class="articleCard">
    <div class="placeholderImage">
      <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 16 20">
        <path
          d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
      </svg>
    </div>

    <!-- Contenu de l'article -->
    <div class="articleContent">
      <h2 class="articleTitle">{{ article.title }}</h2>
      <p class="articleText">{{ article.content }}</p>

      <!-- Infos de l'auteur + Tooltip -->
      <div class="authorContainer" @mouseover="showProfile = true" @mouseleave="showProfile = false">
        <div class="authorInfo">
          <img src="../assets/img/pp.jpg" alt="photo_de_profil" class="profilPic">
          <div>
            <p class="authorName">{{ article.author }}</p>
            <p class="authorJob">{{ article.job }}</p>
          </div>
        </div>

        <!-- Affichage conditionnel du profil perso -->
        <Profilperso v-if="showProfile" :user="article.user" class="profileTooltip" />
      </div>
    </div>

    <!-- Actions -->
    <div class="actionBtns">
      <button @click="liked = !liked" :class="{ liked: liked }">❤️ {{ liked ? "J'aime" : "Like" }}</button>
      <button @click="showComments = !showComments">
        💬 {{ showComments ? "Masquer" : "Commenter" }}
      </button>
    </div>

    <!-- Zone de commentaires -->
    <div v-if="showComments" class="commentSection">
      <form @submit.prevent="postComment">
        <textarea v-model="newComment" rows="4" placeholder="Écrire un commentaire..."
          class="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Publier</button>
      </form>
    </div>

    <!-- Affichage des commentaires postés -->
    <div v-if="comments.length > 0" class="postedComments">
      <div v-for="(comment, index) in comments" :key="index" class="commentItem">
        <p>{{ comment.text }}</p>
        <button @click="likeComment(index)" class="likeBtn">❤️ {{ comment.likes }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Profilperso from "@/components/Profilperso.vue";

defineProps({ article: Object });

const liked = ref(false);
const showComments = ref(false);
const showProfile = ref(false);

const newComment = ref("");
const comments = ref([]);

const postComment = () => {
  if (newComment.value.trim() !== "") {
    comments.value.push({ text: newComment.value, likes: 0 });
    newComment.value = "";
  }
};

const likeComment = (index) => {
  comments.value[index].likes++;
};
</script>

<style scoped>
.articleCard {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.articleContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.articleContent h2 {
  margin-top: 1rem;
  text-align: left;
}

.placeholderImage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #ccc;
  border-radius: 8px;
}

.authorInfo {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.profilPic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.actionBtns {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.liked {
  color: red;
  font-weight: bold;
}

.commentItem {
  padding: 0.5rem;
  background: #f4f4f4;
  border-radius: 5px;
  margin-top: 5px;
}

.likeBtn {
  background: transparent;
  border: none;
  color: red;
  cursor: pointer;
  margin-top: 5px;
}

.profileTooltip {
  position: absolute;
  bottom: 20%;
  left: 100px;
  transform: translateX(-50%);
  z-index: 10;
  background: var(--BlueNavy);
  color: var(--TextWhite);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
