<template>
  <v-content class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-tabs dark color="primary">
            <v-tab>
              Login
            </v-tab>
            <v-tab-item>
              <LoginForm />
            </v-tab-item>
            <v-tab>
              Register
            </v-tab>
            <v-tab-item>
              <RegisterForm />
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue'
import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    RegisterForm
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
