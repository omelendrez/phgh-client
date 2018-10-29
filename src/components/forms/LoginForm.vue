<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field prepend-icon="person" v-model="user.username" label="Username" hint="At least 8 characters" type="text" :rules="[rules.required, rules.min]">
          </v-text-field>

          <v-text-field prepend-icon="lock" v-model="user.password" label="Password" hint="At least 8 characters" :append-icon="showPassword ? 'visibility_off' : 'visibility'" :type="showPassword ? 'text' : 'password'" :rules="[rules.required, rules.min]" @click:append="showPassword = !showPassword">
          </v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click.native="login">Login</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn flat>Forgot password?</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import { rules } from '@/utils/validation'

export default {
  name: 'LoginForm',
  data() {
    return {
      valid: false,
      user: {
        username: '',
        password: ''
      },
      showPassword: false,
      rules: null
    }
  },
  methods: {
    login() {
      if (this.valid) {
        console.log(this.user)
      }
    }
  },
  created() {
    this.rules = rules
  }
}
</script>
