<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 v-if="showLogin">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Login
            </v-toolbar-title>
            <Logo />
          </v-toolbar>
          <LoginForm :login="login" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'Login',
  store,
  components: {
    Logo,
    LoginForm
  },
  data () {
    return {
      showLogin: true
    }
  },
  computed: {
    user () {
      return store.getters.user
    }
  },
  watch: {
    user () {
      this.showLogin = !this.user
    }
  },
  methods: {
    login (user) {
      store.dispatch('login', user)
    }
  },
  created () {
    console.log(this.user)
  }
}
</script>

<style>
</style>
