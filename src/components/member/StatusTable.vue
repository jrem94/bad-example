<template>
  <h2>Status</h2>
<v-card variant="outlined">
  <v-data-table
    :headers="headers"
    :items="lettersOfAgreement"
  >
    <template v-slot:[`item.status`]="{ item }">
      <TaggedStatus :document="item"/>
    </template>
  </v-data-table>
</v-card>
</template>

<script setup lang="ts">
import LetterOfAgreement from '@/models/LetterOfAgreement'
import TaggedStatus from '@/components/shared/TaggedStatus.vue'

const headers: { title: string, key: string }[] = [
  { title: 'Status', key: 'status' },
  { title: 'Location', key: 'locationId' },
  { title: 'Contract Number', key: 'contractNumber' },
  { title: 'Group Id', key: 'groupId' },
  { title: 'Tier', key: 'tierNumber' }
]

const lettersOfAgreement: LetterOfAgreement[] = [
  new LetterOfAgreement('1', 100, 1, 'G-ABC-123-000', 'A123', 'A123', 'Committed'),
  new LetterOfAgreement('2', 100, 1, 'G-ABC-123-000', 'A123', 'A123', 'Committed', 'Pending Changes'),
  new LetterOfAgreement('3', 100, 1, 'G-ABC-123-000', 'B123', 'A123', 'Denied'),
  new LetterOfAgreement('4', 100, 1, 'G-ABC-123-000', 'C123', 'A123', 'Obsolete'),
  new LetterOfAgreement('5', 100, 2, '', 'C123', 'A123', 'Pending Supplier Approval')
]

</script>

<style scoped>

</style>