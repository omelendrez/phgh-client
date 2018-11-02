<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Signup
            </v-toolbar-title>
            <Logo />
          </v-toolbar>
          <RegisterForm />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Logo from '@/components/common/Logo'
import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
  name: 'Signup',
  components: {
    Logo,
    RegisterForm
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<style>
</style>
