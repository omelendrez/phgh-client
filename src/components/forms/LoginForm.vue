<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" v-model="username" label="Username" hint="At least 8 characters" type="text" :rules="[rules.required, rules.min]">
          </v-text-field>

          <v-text-field prepend-icon="lock" v-model="password" label="Password" hint="At least 8 characters" :append-icon="showPassword ? 'visibility_off' : 'visibility'" :type="showPassword ? 'text' : 'password'" :rules="[rules.required, rules.min]" @click:append="showPassword = !showPassword">
          </v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary">Login</v-btn>
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
      username: null,
      password: null,
      showPassword: false,
      rules: null
    }
  },
  created() {
    this.rules = rules
  }
}
</script>
