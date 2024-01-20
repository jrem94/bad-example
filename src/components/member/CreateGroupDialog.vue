<template>
  <teleport to="#dialogTarget">
    <v-dialog v-model="active" width="1000px">
      <v-stepper :items="['Contract', 'Tier', 'Participants']">
        <template v-slot:item.1>
          <v-card title="Select a Contract" flat>
            ...
          </v-card>
        </template>

        <template v-slot:item.2>
          <v-card title="Choose a Tier" flat>
            ...
          </v-card>
        </template>

        <template v-slot:item.3>
          <v-card title="Add Participants" flat>
            ...
          </v-card>
        </template>
      </v-stepper>
    </v-dialog>
  </teleport>
</template>

<script setup lang="ts">
import { ActivatableDialogs, useDialogStore } from '@/stores/useDialogStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const dialogStore = useDialogStore()
const { currentActiveDialog } = storeToRefs(dialogStore)
const { closeActiveDialog } = dialogStore

const active = computed(() => currentActiveDialog.value === ActivatableDialogs.CreateGroupDialog)

const close = () => closeActiveDialog()

</script>


<style scoped>

</style>