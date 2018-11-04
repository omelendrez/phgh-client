<template>
  <v-dialog v-model="active" max-width="400">
    <v-card>
      <v-card-title class="white--text headline error">{{title}}</v-card-title>
      <v-card-text>
        {{message}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat="flat" @click="active = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store'
export default {
  name: 'Alert',
  computed: {
    apiError () {
      return store.getters.apiError
    }
  },
  watch: {
    apiError () {
      if (this.apiError) {
        console.log(this.apiError)
        this.title = 'Error'
        this.message = this.apiError.error
        this.active = !this.apiError.success
      }
    }
  },
  data () {
    return {
      active: false,
      title: '',
      message: ''
    }
  }
}
</script>

<style scoped>
</style>
