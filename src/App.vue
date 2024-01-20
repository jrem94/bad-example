<template>
  <v-container id="app-container">
    <AppToolbar />
    <router-view></router-view>
  </v-container>
</template>

<script setup lang="ts">
import AppToolbar from '@/components/shared/AppToolbar.vue'

</script>

<style scoped>
#app-container {
  min-height: 100vh;
}
</style>
