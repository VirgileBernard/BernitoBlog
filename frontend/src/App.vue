<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'

import { useUserStore } from './stores/user'

const userStore = useUserStore()

watch(
  userStore.$state,
  (state) => {
    // persist the whole state to the local storage whenever it changes
    localStorage.setItem('userState', JSON.stringify(state))
  },
  { deep: true },
)

onMounted(() => {
  initFlowbite()
})
</script>
<template>
  <RouterView />
</template>
