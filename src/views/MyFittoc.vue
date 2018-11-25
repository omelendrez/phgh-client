<template>
  <v-container class="my-fittoc">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">My FITTOC</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <MyFittocForm />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import MyFittocForm from '@/components/forms/MyFittocForm'

export default {
  name: 'home',
  store,
  components: {
    Logo,
    MyFittocForm
  },
  computed: {
    user() {
      return store.getters.user
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.my-fittoc {
  margin-top: 32px;
}
</style>
