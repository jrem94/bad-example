<template>
  <v-row id="app-toolbar">
    <v-col class="v-col-3">
      <v-select
        id="role-select"
        v-if="isAuthenticated && roles?.length"
        label="Viewing as"
        :model-value="currentRole"
        :items="roles"
        density="compact"
        variant="outlined"
        @update:model-value="onRoleValueChange"
      ></v-select>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/useAuthStore'

const authStore = useAuthStore()
const { roles, isAuthenticated, currentRole } = storeToRefs(authStore)

/*
  Role Select
*/

const onRoleValueChange = (selectedRole: string) => {
  authStore.updateCurrentRole(selectedRole)
}

</script>

<style scoped>

</style>