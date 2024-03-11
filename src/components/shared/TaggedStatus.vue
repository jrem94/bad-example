<template>
  <v-chip :color="statusColor">
    {{ status }}
  </v-chip>
  <v-chip v-if="tag" :color="tagColor">
    {{ tag }}
  </v-chip>
</template>

<script setup lang="ts">
import { LetterOfAgreement } from '@/models/LetterOfAgreement'
import { computed } from 'vue'

const props = defineProps<{ document: LetterOfAgreement | undefined }>()

/*
  Status
*/

const status = computed(() => props.document?.status)

const statusColor = computed(() => {
  if (!status.value)  return 'black'

  switch (status.value.toLowerCase()) {
    case 'committed':
      return 'blue'
    case 'pending supplier approval':
      return 'blue-darken-4'
    case 'denied':
      return 'red'
    default:
      return 'black'
  }
})

/*
  Tag
*/

const tag = computed(() => props.document?.tag)

const tagColor = computed(() => {
  if (!tag.value)  return 'black'

  switch (tag.value.toLowerCase()) {
    case 'pending changes':
      return 'amber'
    default:
      return 'black'
  }
})

</script>

<style scoped>

</style>