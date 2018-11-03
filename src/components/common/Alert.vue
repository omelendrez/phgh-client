<template>
  <div class="alert">
    <v-alert :value="active" :type="color" :dismissible="true" transition="scale-transition">
      {{message}}
    </v-alert>
  </div>
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
      this.message = ''
      this.active = false
      this.color = 'success'
      if (this.apiError) {
        this.message = this.apiError.error
        this.active = this.apiError.success === 'false'
        this.color = 'error'
        setTimeout(() => { this.active = false }, 5000)
      }
    }
  },
  data () {
    return {
      active: false,
      color: 'success',
      message: ''
    }
  }
}
</script>

<style scoped>
.alert {
  position: absolute;
}
</style>
