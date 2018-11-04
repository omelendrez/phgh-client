<template>
  <v-card class="elevation-12">
    <v-container>

      <v-card-text>
        <v-form v-model="valid" ref="form">

          <v-text-field prepend-icon="person" v-model="user.username" label="Username" type="text" :rules="[rules.required, rules.min]" hint="At least 8 characters" append-icon="autorenew" @click:append="getName"></v-text-field>

          <v-text-field prepend-icon="mail" v-model="user.email" label="Email" type="email" :rules="[rules.required, rules.isEmail]" hint="Enter your email address"></v-text-field>

          <v-text-field prepend-icon="phone" v-model="user.phone" label="Phone" type="phone" :rules="[rules.required, rules.isPhone]" hint="Enter your phone number" mask="(###) ###-#####"></v-text-field>

          <v-text-field prepend-icon="lock" v-model="user.password" label="Password" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" :rules="[rules.required, rules.min]" :append-icon="showPassword ? 'visibility_off' : 'visibility'" hint="At least 8 characters"> </v-text-field>

          <v-text-field prepend-icon="lock" v-model="retype" label="Confirm password" :append-icon="showRetype ? 'visibility_off' : 'visibility'" hint="Must match the password" :type="showRetype ? 'text' : 'password'" :rules="[rules.required, rules.min, rules.equal(user.password, retype)]" @click:append="showRetype = !showRetype">
          </v-text-field>

        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click.native="doSignup">Register</v-btn>
      </v-card-actions>

    </v-container>
  </v-card>
</template>
<script>
import { rules } from '@/utils/validation'
import { generateName } from '@/utils/usernames'

export default {
  name: 'RegisterForm',
  props: {
    signup: Function
  },
  data () {
    return {
      user: {
        username: '',
        email: '',
        phone: '',
        password: ''
      },
      valid: false,
      retype: '',
      rules: null,
      showPassword: false,
      showRetype: false
    }
  },
  created () {
    this.rules = rules
  },
  methods: {
    doSignup () {
      if (this.valid) {
        this.signup(this.user)
      }
    },
    getName () {
      this.user.username = generateName().split(' ').join('')
    }
  }
}
</script>
