<template>
  <v-layout>
    <v-img :src="logo" :height="48" position="right" contain></v-img>
  </v-layout>
</template>

<script>
import logo from '@/assets/logo.jpg'
export default {
  name: 'Logo',
  data () {
    return {
      logo: null
    }
  },
  created () {
    this.logo = logo
  }
}
</script>

<style scoped>
</style>
