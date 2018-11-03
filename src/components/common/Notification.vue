<template>
  <v-snackbar v-model="active" color="cyan darken-2" auto-height top multi-line :timeout="timeout">
    {{ message }}
    <v-btn flat @click="active = false">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import store from '@/store'
export default {
  name: 'Notification',
  computed: {
    apiMessage () {
      return store.getters.apiMessage
    }
  },
  watch: {
    apiMessage () {
      console.log(this.apiMessage)
      this.message = this.apiMessage
      this.active = true
    }
  },
  data () {
    return {
      active: false,
      message: '',
      timeout: 5000
    }
  }
}
</script>

<style scoped>
</style>
