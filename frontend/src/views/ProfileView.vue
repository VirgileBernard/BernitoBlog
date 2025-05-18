<template>
  <div class="content">
    <div class="profileDisplay">
      <Profilperso />

      <Profilaction />
    </div>

    <!-- Barre de navigation fixe en bas -->
    <Navbar />

  </div>
  <Footer />

</template>


<script setup lang="ts">

import Profilperso from '@/components/Profilperso.vue'
import Navbar from '@/components/Navbar.vue';
import Profilaction from '../components/Profilaction.vue';
import Footer from '@/components/Footer.vue';

</script>


<style scoped>
.content {
  margin-top: 5vh;
  margin-bottom: 10vh;
}

.profileDisplay {
  margin: 0 auto;
  background-color: var(--BlueNavy);
  color: var(--TextWhite);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(99, 99, 99, 0.3);
}


/* En dessous de 700px : diminution de la taille du texte */
@media (max-width: 700px) {
  .content {
    font-size: 14px;
  }
}

/* Au-dessus de 700px : augmentation de la taille du texte */
@media (min-width: 700px) {
  .content {
    font-size: 20px;
  }
}
</style>
