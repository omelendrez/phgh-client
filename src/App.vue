<template>
  <v-app>
    <v-toolbar dense fixed color="primary" class="white--text">
      <v-toolbar-title>FITTOC</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat class="white--text" @click="route('Home')">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="white--text" @click="route('Login')">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <transition name="fade">
      <router-view />
    </transition>
  </v-app>
</template>
<script>
import store from '@/store'

export default {
  name: 'app',
  store,
  data() {
    return {

    }
  },
  created() {

  },
  methods: {
    route(route) {
      this.$router.push({ name: route })
    }

  }
}
</script>

<style>
body {
  font-family: Roboto;
}
#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
