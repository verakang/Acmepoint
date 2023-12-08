<script setup>
import { RouterView, RouterLink } from 'vue-router'

</script>

<template>
  <div class="text-center mt-15">
    <v-btn class="ma-2 px-4 py-2 bg-deep-purple-lighten-2 rounded-shaped"><RouterLink to="/" class="text-decoration-none text-white">主選單</RouterLink></v-btn>
    <v-btn class="ma-2 px-4 py-2 bg-deep-purple-lighten-2 rounded-shaped"><RouterLink to="/test1" class="text-decoration-none text-white">練習一</RouterLink></v-btn>
    <v-btn class="ma-2 px-4 py-2 bg-deep-purple-lighten-2 rounded-shaped"><RouterLink to="/test2" class="text-decoration-none text-white">練習二</RouterLink></v-btn>
  </div>
  <RouterView />
</template>

<style scoped></style>
