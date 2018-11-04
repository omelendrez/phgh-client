<template>
  <v-container class="confirm">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Confirm email</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p v-if="isVerified">
          Your email address has been confirmed. You can login now
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Logo from '@/components/common/Logo'
import store from '@/store'

export default {
  name: 'Confirm',
  store,
  components: {
    Logo
  },
  data () {
    return {
      isVerified: false
    }
  },
  computed: {
    user () {
      return store.getters.user
    }
  },
  watch: {
    user () {
      this.$router.push({ name: 'Login' })
    }
  },
  created () {
    const uid = this.$route.params.uid
    store.dispatch('confirmEmail', uid)
  }
}
</script>

<style  scoped>
.charity {
  margin-top: 32px;
}
p {
  text-align: justify;
}
</style>
