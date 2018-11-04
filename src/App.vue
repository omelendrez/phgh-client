<template>
  <v-app>
    <v-navigation-drawer stateles value="true" fixed clipped v-if="drawer" class="hidden-lg-and-up">
      <v-list dense>
        <v-list-tile @click="route(option)" v-for="(option, index) in options" :key="index" v-if="option.title !== '[separator]'">
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
      <v-toolbar-title>
        <v-avatar size="32px">
          <v-img :src="logo" contain height="32px" width="32px" alt="FITTOC"></v-img>
        </v-avatar>
        FITTOC
      </v-toolbar-title>
      <v-toolbar-items v-if="option.title!=='[separator]'" v-for="(option, index) in options" :key="index" class="hidden-md-and-down">
        <v-btn small flat class="white--text" @click="route(option)">
          <v-icon small class="white--text menu-icon">{{option.icon}}</v-icon>
          {{option.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer v-else :key="option.index"></v-spacer>
      <span v-if="username">{{username}}</span>
    </v-toolbar>
    <router-view />
    <Alert />
    <Notification />
  </v-app>
</template>
<script>
import store from '@/store'
import options from '@/options'
import logo from '@/assets/icon.png'
import Alert from '@/components/common/Alert'
import Notification from '@/components/common/Notification'

export default {
  name: 'app',
  store,
  components: {
    Alert,
    Notification
  },
  data () {
    return {
      options: [],
      drawer: false,
      selected: null,
      logo: null,
      username: ''
    }
  },
  computed: {
    user () {
      return store.getters.user
    }
  },
  watch: {
    user () {
      if (this.user) {
        this.username = this.user.username
        const opt = this.options.filter(item => item.route !== 'Login' && item.route !== 'Signup')
        opt.push({
          title: 'Logout',
          route: 'Logout',
          icon: 'power_settings_new'
        })
        this.options = opt
      } else {
        this.username = ''
        this.options = options
      }
    }
  },
  created () {
    this.options = options
    this.logo = logo
  },
  methods: {
    route (option) {
      if (option.route === 'Logout') {
        this.logout()
      } else {
        this.$router.push({ name: option.route })
      }
      this.drawer = false
    },
    logout () {
      store.dispatch('logout')
    }
  }
}
</script>

<style>
body {
  font-family: Roboto;
}

.menu-icon {
  margin-right: 6px;
}

#app {
  background-image: url(./assets/background2.jpg);
  background-size: cover;
  background-position: center;
}
.selected {
  color: red;
}
</style>
