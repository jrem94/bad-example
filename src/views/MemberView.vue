<template>
  <v-container>
    <router-view></router-view>
    <CreateGroupDialogue />
  </v-container>
</template>

<script setup lang="ts">

import CreateGroupDialogue from '@/components/member/CreateGroupDialog.vue'
</script>

<style scoped>

</style>