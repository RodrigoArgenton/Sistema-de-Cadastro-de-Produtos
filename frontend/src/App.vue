<script setup lang="ts">
  import Navbar from '@/components/Navbar.vue'
</script>
<template>
  <v-app>
    <header>
      <Navbar />
    </header>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style scoped>

</style>
