<template>
  <v-container class="dashboard">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Dashboard</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <v-alert :value="true" type="error">
          {{message}}
        </v-alert>
        <v-container class="buttons">
          <v-btn large block round color="primary" @click="ph">Provide help</v-btn>
          <v-btn large block round color="primary" @click="rec">Recommit</v-btn>
          <v-btn large block round color="primary" @click="gh">Get help</v-btn>
        </v-container>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline error white--text" primary-title >
          Action
        </v-card-title>
        <v-card-text>
          This button's Action for will be executed once the backend integration is completed
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false" >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    user() {
      return store.getters.user
    }
  },
  data() {
    return {
      message: 'Buttons are not triggering any actions for the time being',
      dialog: false
    }
  },
  methods: {
    ph() {
      this.dialog = true
    },
    rec() {
      this.dialog = true
    },
    gh() {
      this.dialog = true
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: 'Login' })
    }
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
.buttons {
  max-width: 400px;
}
</style>
