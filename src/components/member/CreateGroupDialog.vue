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
            <v-card title="Select a Contract" :flat="true">
              ...
            </v-card>
          </template>

          <template v-slot:[`item.2`]>
            <v-card title="Choose a Tier" :flat="true">
              ...
            </v-card>
          </template>

          <template v-slot:[`item.3`]>
            <v-card title="Add Participants" :flat="true">
              <div>...</div>
              <div><v-checkbox label="Make Auto Add" v-model="groupData.isAutoAdd"></v-checkbox></div>
            </v-card>
          </template>

          <template v-slot:[`item.4`]>
            <v-card title="Review and Submit" :flat="true">
              <v-btn :flat="true" variant="outlined" :disabled="!canSubmit" @click="submitGroup">Submit</v-btn>
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

const steps: string[] = ['Contract', 'Tier', 'Participants', 'Review']

const groupData = reactive({
  contractId: null,
  tierId: null,
  participantIds: [],
  isAutoAdd: false
})

const resetGroupValues = () => {
  groupData.contractId = null
  groupData.tierId = null
  groupData.participantIds = []
  groupData.isAutoAdd = false
}

/*
  Dialog
*/

const isDialogActive = computed(() => currentActiveDialog.value === ActivatableDialogs.CreateGroupDialog)

const closeDialog = () => {
  resetGroupValues()
  closeActiveDialog()
}

/*
  Step: Review and Submit
*/

const canSubmit = computed(() => groupData.contractId && groupData.tierId && groupData.participantIds.length)

const submitGroup = () => {
  console.log(groupData)
  closeDialog()
}

</script>


<style scoped>

</style>