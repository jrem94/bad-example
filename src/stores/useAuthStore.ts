import { ref, computed } from 'vue'
import { defineStore, getActivePinia } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  /*
    Is Authenticated
  */

  const _isAuthenticatedLocalStorageKey: string = 'isAuthenticated'
  const _isAuthenticated = ref<boolean>(false)
  const isAuthenticated = computed(() => {
    return _isAuthenticated.value ? _isAuthenticated.value : !!Number(JSON.parse(localStorage.getItem(_isAuthenticatedLocalStorageKey) as string))
  })

  const updateIsAuth = (isAuth: boolean): void => {
    _isAuthenticated.value = isAuth
    localStorage.setItem(_isAuthenticatedLocalStorageKey, JSON.stringify(_isAuthenticated.value ? 1 : 0))
  }

  /*
    Current Role
  */

  const _currentRoleLocalStorageKey: string = 'currentRole'
  const _currentRole = ref<string>('')
  const currentRole = computed(() => {
    return _currentRole.value ? _currentRole.value : localStorage.getItem(_currentRoleLocalStorageKey)
  })

  const updateCurrentRole = (newCurrent: string): void => {
    _currentRole.value = newCurrent
    localStorage.setItem(_currentRoleLocalStorageKey, _currentRole.value)
    router.push(`/${_currentRole.value}`)
  }

  /*
    Roles
  */

  const _rolesLocalStorageKey: string = 'roles'
  const _roles = ref<string[]>([])
  const roles = computed(() => {
    return _roles.value.length ? _roles.value : JSON.parse(localStorage.getItem(_rolesLocalStorageKey) as string)
  })

  const updateRoles = (newRoles: string[]): void => {
    _roles.value = newRoles
    localStorage.setItem(_rolesLocalStorageKey, JSON.stringify(_roles.value))
    if (!_currentRole.value) updateCurrentRole(_roles.value[0])
  }

  /*
    Auth Local Storage
  */

  const clearAndInvalidateAuth = (): void => {
    localStorage.clear()
    _isAuthenticated.value = false
    _roles.value = []
    _currentRole.value = ''
  }

  return {
    isAuthenticated,
    currentRole,
    roles,
    updateIsAuth,
    updateCurrentRole,
    updateRoles,
    clearAndInvalidateAuth
  }
})
