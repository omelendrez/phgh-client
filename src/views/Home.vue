<template>
  <v-container class="home">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Home</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <p>
        FITTOC is a global mutual aid fund, financial social network. FITTOC isn’t a company, an organization or a business project. FITTOC has its own website which connects participants who are willing to provide help directly with those who need help. The participants transfer money directly to each other, acting of their own free will. There aren’t any obligations and guarantees. If you have any other questions, please contact our Guiders/Leaders. They are always ready to help you.
        </p>
        <HowToStart v-if="!user" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import HowToStart from '@/components/application/HowToStart'
// import icon from '@/assets/icon.png'
// import { requestPermission, nonPersistentNotification, persistentNotification } from '@/utils/notifications'

export default {
  name: 'home',
  store,
  components: {
    Logo,
    HowToStart
  },
  computed: {
    user() {
      return store.getters.user
    }
  },
  created() {
    /*
    requestPermission()
    const msg = 'Together We Shall Be Financially Free'
    const options = {
      body: msg,
      icon: icon,
      vibrate: [200, 100, 200]
    }
    let result = nonPersistentNotification(options)
    console.log(result)
    result = persistentNotification(options)
    console.log(result)
    */
  }
}
</script>

<style scoped>
.home {
  margin-top: 32px;
}
</style>
