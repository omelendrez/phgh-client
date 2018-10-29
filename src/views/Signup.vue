<template>
  <v-content class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Signup
            </v-toolbar-title>
          </v-toolbar>
          <RegisterForm />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
  name: 'Signup',
  components: {
    RegisterForm
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
.login {
  background-image: url(./../assets/background2.jpg);
  background-size: cover;
  background-position: center;
}
</style>
