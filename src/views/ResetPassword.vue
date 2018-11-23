<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 v-if="showForm">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Reset your password
            </v-toolbar-title>
            <Logo />
          </v-toolbar>
          <ResetPasswordForm :resetPassword="resetPassword" :uid="uid" />
        </v-flex>
        <v-flex v-else xs12 sm8 md4>
          <v-card>
            <v-card-title primary-title class="headline green lighten-3">Password changed
              <Logo />
            </v-card-title>
            <v-card-text>
              <p>
                Your password has been successfuly changed. Well done!
              </p>
              <p><strong>FITTOC Staff</strong></p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import ResetPasswordForm from '@/components/forms/ResetPasswordForm.vue'

export default {
  name: 'ResetPassword',
  store,
  components: {
    Logo,
    ResetPasswordForm
  },
  data() {
    return {
      showForm: true,
      uid: null
    }
  },
  computed: {
    passwordResetted() {
      return store.getters.passwordResetted
    }
  },
  watch: {
    passwordResetted() {
      this.showForm = !this.passwordResetted
    }
  },
  methods: {
    resetPassword(data) {
      store.dispatch('resetPassword', data)
    }
  },
  created() {
    const uid = this.$route.params.uid
    this.uid = uid
  }
}
</script>

<style>
</style>
