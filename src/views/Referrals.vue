<template>
  <v-container class="referrals">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Referrals</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <ReferralsForm :referralLink="referralLink" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import ReferralsForm from '@/components/forms/ReferralsForm'

export default {
  name: 'Referrals',
  store,
  components: {
    Logo,
    ReferralsForm
  },
  computed: {
    user() {
      return store.getters.user
    },
    referralLink() {
      return store.getters.referralLink
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
.referrals {
  margin-top: 32px;
}
</style>
