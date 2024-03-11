<template>
  <h2>Status</h2>
<v-card variant="outlined">
  <v-data-table
    v-model="selected"
    :show-select="true"
    :headers="headers"
    :items="lettersOfAgreement"
  >
    <template v-slot:[`item.status`]="{ item }">
      <TaggedStatus :document="item"/>
    </template>

    <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
      <tr>
        <template v-for="column in columns" :key="column.key">
          <td v-if="column.title">
            <span class="mr-2 cursor-pointer" @click="toggleSort(column)">{{ column.title }}</span>
            <v-icon :icon="getSortIcon(column)" :color="isSorted(column) ? 'blue-grey-darken-4' : 'blue-grey-lighten-4'"/>
          </td>

          <td v-else id="check-box-header">
            <v-checkbox-btn @update:modelValue="toggleSelectAll(Boolean($event))"/>
          </td>
        </template>
      </tr>
    </template>

    <template v-slot:top>
      <v-toolbar :flat="true">
        <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="createGroup"
        >
          Create Group
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
import { ref, watch } from 'vue'

const headers = ref<{ title: string, key: string }[]>([
  { title: 'Status', key: 'status' },
  { title: 'Location', key: 'locationId' },
  { title: 'Contract Number', key: 'contractNumber' },
  { title: 'Tier', key: 'tierNumber' },
  { title: 'Group Id', key: 'groupId' }
])

const lettersOfAgreement: LetterOfAgreement[] = [
  new LetterOfAgreement(111, 1, 1, null, null, 'committed'),
  new LetterOfAgreement(222, 2, 2, null, null, 'committed'),
  new LetterOfAgreement(333, 3, 3, null, null, 'committed'),
  new LetterOfAgreement(444, 4, 4, null, null, 'committed'),
]

const selected = ref<any[]>([])

watch(selected, () => {
  console.log(selected.value)
})

const createGroup = () => {
  useDialogStore().activateDialog(ActivatableDialogs.CreateGroupDialog)
}

const toggleSelectAll = (isChecked: boolean) => {
  selected.value = []
  if (!isChecked) return;
  selected.value = lettersOfAgreement.map(x => x.id)
}

</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}

#check-box-header {
  padding: 0 8px;
}
</style>