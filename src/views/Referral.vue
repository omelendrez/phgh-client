<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 v-if="showForm">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              Signup
            </v-toolbar-title>
            <Logo />
          </v-toolbar>
          <RegisterForm :signup="signup" :referrer="referrer" />
        </v-flex>
        <v-flex v-else xs12 sm8 md4>
          <v-card>
            <v-card-title primary-title class="headline green lighten-3">What's next?
              <Logo />
            </v-card-title>
            <v-card-text>
              <p>
                Your account has been successfuly created. Well done!
              </p>
              <p>
                Now you will receive an email with a link to confirm your account.</p>
              <p>Once you have completed that final step you will be able to login into FITTOC.</p>
              <p>Until that step is not completed you will not be able to login.
              </p>
              <p>See you soon!</p>
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
import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
  name: 'Referral',
  store,
  components: {
    Logo,
    RegisterForm
  },
  data() {
    return {
      showForm: true,
      referrer: ''
    }
  },
  computed: {
    user() {
      return store.getters.user
    }
  },
  watch: {
    user() {
      this.showForm = !this.user
    }
  },
  methods: {
    signup(user) {
      store.dispatch('signup', user)
    }
  },
  mounted() {
    this.referrer = this.$route.params.username
  }
}
</script>

<style>
</style>
