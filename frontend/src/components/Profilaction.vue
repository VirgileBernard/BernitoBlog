<template>
  <div class="profilaction">
    <button @click="changePassword">Modifier mon mot de passe <svg class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
      </svg>
    </button>

    <button @click="showComments">Mes commentaires <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
      </svg>
    </button>


    <button @click="showArticles">Mes articles <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
      </svg>
    </button>

  </div>
</template>

<script>
export default {
  name: 'Profilaction',
  methods: {
    changePassword() {
      // Code to trigger password modification
    },
    showArticles() {
      // Code to display user's articles
    },
    showComments() {
      // Code to display user's comments
    }
  }
}
</script>

<style scoped>
.profilaction {
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 0 auto 2vh;
  align-items: center;
  gap: 2vh;
}

button {
  /* background: red; */
  display: flex;
}

svg {
  color: black;
}
</style>
