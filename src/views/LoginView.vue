<template>
  <v-container id="login-view">
    <v-row>
      <v-col align="center">
        <v-card class="login-card" title="Login" variant="outlined">

          <v-text-field
            label="User Name"
            variant="outlined"
            v-model="loginInfo.username">
          </v-text-field>

          <v-text-field
            label="Password"
            variant="outlined"
            type="password"
            v-model="loginInfo.password">
          </v-text-field>

          <v-btn variant="outlined" @click="handleLogin">Login</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import router from '@/router'
import { useAuth } from '@/composables/useAuth'
import { useAuthStore } from '@/stores/useAuthStore'

const authStore = useAuthStore()
const auth = useAuth()

const loginInfo = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  const roles = auth.requestUserAuth(loginInfo.username, loginInfo.password)
  authStore.updateRoles(roles)
  authStore.updateIsAuth(!!authStore.roles.length)
  if (!authStore.isAuthenticated) {
    alert('Login Failed!')
    return
  }
  router.push(`/${roles[0]}`)
}

</script>

<style scoped>
  .login-card {
    width: 400px;
    padding: 24px;
    margin-top: 20%;
  }
</style>