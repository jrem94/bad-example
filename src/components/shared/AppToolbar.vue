<template>
  <v-row id="app-toolbar">
    <v-col>
      <v-select
        v-if="isAuthenticated && roles?.length"
        label="Viewing as"
        :model-value="currentRole"
        :items="roles"
        density="compact"
        variant="outlined"
        @update:model-value="onValueChange($event)"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/useAuthStore'

const { roles, isAuthenticated, currentRole } = storeToRefs(useAuthStore())

const onValueChange = (event: string) => {
  useAuthStore().updateCurrentRole(event)
}

</script>

<style scoped>

</style>