<template>
  <div class="content">
    <div class="profileDisplay">
      <Profilperso />

      <Profilaction />
    </div>

    <!-- Barre de navigation fixe en bas -->
    <Navbar />
  </div>

</template>


<script setup lang="ts">

import Profilperso from '@/components/Profilperso.vue'
import Navbar from '@/components/Navbar.vue';
import Profilaction from '../components/Profilaction.vue';

</script>


<style scoped>
.content {
  margin-top: 15vh;
}

.profileDisplay {
  border: 1px solid black;
  max-width: 60%;
  margin: 0 auto;
}
</style>
