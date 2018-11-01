<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Login
            </v-toolbar-title>
          </v-toolbar>
          <LoginForm />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style>
</style>
