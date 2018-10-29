<template>
  <v-app>
    <v-navigation-drawer stateles value="true" fixed clipped v-if="drawer" class="hidden-lg-and-up">
      <v-list dense>
        <v-list-tile @click="route(option.route)" v-for="(option, index) in options" :key="index" v-if="option.title !== '[separator]'">
          <v-list-tile-action>
            <v-icon>{{option.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{option.title}}</v-list-tile-title>
        </v-list-tile>
        <v-divider v-else :key="option.index" dark class="my-3"></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense fixed color="primary" class="white--text">
      <v-toolbar-side-icon class="white--text hidden-lg-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>FITTOC</v-toolbar-title>
      <v-toolbar-items v-if="option.title!=='[separator]'" v-for="(option, index) in options" :key="index" class="hidden-md-and-down">
        <v-btn flat class="white--text" @click="route(option.route)">
          <v-icon class="white--text menu-icon">{{option.icon}}</v-icon>
          {{option.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-else :key="option.index"></v-spacer>
    </v-toolbar>
    <router-view />
  </v-app>
</template>
<script>
import store from '@/store'
import options from '@/config'

export default {
  name: 'app',
  store,
  data() {
    return {
      options: [],
      drawer: false
    }
  },
  created() {
    this.options = options
  },
  methods: {
    route(route) {
      this.drawer = false
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

.menu-icon {
  margin-right: 6px;
}
</style>
