<template>
  <v-container class="dashboard">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Dashboard</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
// import icon from '@/assets/icon.png'
// import { requestPermission, nonPersistentNotification, persistentNotification } from '@/utils/notifications'

export default {
  name: 'dashboard',
  store,
  components: {
    Logo
  },
  computed: {
    user () {
      return store.getters.user
    }
  },
  created () {
    /*
    requestPermission()
    const msg = 'Together We Shall Be Financially Free'
    const options = {
      body: msg,
      icon: icon,
      vibrate: [200, 100, 200]
    }
    let result = nonPersistentNotification(options)
    console.log(result)
    result = persistentNotification(options)
    console.log(result)
    */
  }
}
</script>

<style scoped>
.dashboard {
  margin-top: 32px;
}
</style>
