import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const _currentActiveDialog = ref<ActivatableDialogs>(ActivatableDialogs.None)
  const currentActiveDialog = computed(() => _currentActiveDialog.value)

  const activateDialog = (dialog: ActivatableDialogs) => {
    _currentActiveDialog.value = dialog
  }

  const closeActiveDialog = () => {
    _currentActiveDialog.value = ActivatableDialogs.None
  }

  return {
    currentActiveDialog,
    activateDialog,
    closeActiveDialog
  }
})

export enum ActivatableDialogs {
  None,
  CreateGroupDialog
}