<template>
  <h2>Contracts</h2>
<v-card variant="outlined">
  <v-data-table
    :show-select="true"
    :headers="headers"
    :items="lettersOfAgreement"
  >
    <template v-slot:[`item.status`]="{ item }">
      <TaggedStatus :document="item"/>
    </template>

    <template v-slot:top>
      <v-toolbar :flat="true">
        <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="createContract"
        >
          Create New
        </v-btn>
      </v-toolbar>
    </template>
  </v-data-table>
</v-card>
</template>

<script setup lang="ts">
import { LetterOfAgreement } from '@/models/LetterOfAgreement'
import TaggedStatus from '@/components/shared/TaggedStatus.vue'
import { ActivatableDialogs, useDialogStore } from '@/stores/useDialogStore'

const headers: { title: string, key: string }[] = [
  { title: 'Contract Number', key: 'contractNumber' },
  { title: 'Amendment Number', key: 'amendmentNumber' },
  { title: 'Status', key: 'amendmentStatus' }
]

const lettersOfAgreement: LetterOfAgreement[] = []

const createContract = () => {
  console.log('Create New')
  useDialogStore().activateDialog(ActivatableDialogs.CreateAdminContractDialog)
}

</script>

<style scoped>

</style>