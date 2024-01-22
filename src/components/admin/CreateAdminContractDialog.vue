<template>
  <teleport to="#dialogTarget">
    <v-dialog v-model="isDialogActive" width="1000px">
      <v-card :flat="true">
        <v-toolbar>
          <v-btn :icon="true" @click="closeDialog">
            <v-icon icon="$close" />
          </v-btn>
        </v-toolbar>

        <v-stepper :alt-labels="true" :items="steps">
          <template v-slot:[`item.1`]>
            <v-card title="Select a Contract and Amendment" :flat="true">
              ...
            </v-card>
          </template>

          <template v-slot:[`item.2`]>
            <v-card title="Add Attributes" :flat="true">
              ...
            </v-card>
          </template>

          <template v-slot:[`item.3`]>
            <v-card title="Upload Files" :flat="true">
              <div>...</div>
            </v-card>
          </template>

          <template v-slot:[`item.4`]>
            <v-card title="Manage Participant Visibility" :flat="true">
              <div>...</div>
            </v-card>
          </template>

          <template v-slot:[`item.5`]>
            <v-card title="Set Administrative Properties" :flat="true">
              <div>...</div>
            </v-card>
          </template>

          <template v-slot:[`item.6`]>
            <v-card title="Review and Submit" :flat="true">
              <div>...</div>
              <v-btn :flat="true" variant="outlined" :disabled="!canSubmit" @click="submitContract">Submit</v-btn>
            </v-card>
          </template>

        </v-stepper>
      </v-card>
    </v-dialog>
  </teleport>
</template>

<script setup lang="ts">
import { ActivatableDialogs, useDialogStore } from '@/stores/useDialogStore'
import { storeToRefs } from 'pinia'
import { computed, reactive } from 'vue'

const dialogStore = useDialogStore()
const { currentActiveDialog } = storeToRefs(dialogStore)
const { closeActiveDialog } = dialogStore

/*
  Data
*/

const steps: string[] = ['Contract', 'Attributes', 'Uploads', 'Visibility', 'Administration', 'Review']

const contractData = reactive({

})

const resetContractValues = () => {

}

/*
  Dialog
*/

const dialogType: ActivatableDialogs = ActivatableDialogs.CreateAdminContractDialog

const isDialogActive = computed(() => currentActiveDialog.value === dialogType)

const closeDialog = () => {
  resetContractValues()
  closeActiveDialog()
}

/*
  Step: Review and Submit
*/

const canSubmit = computed(() => contractData)

const submitContract = () => {
  console.log(contractData)
  closeDialog()
}

</script>

<style scoped>

</style>