<template>
  <v-card class="elevation-12">
    <v-container>

      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field prepend-icon="lock" v-model="data.password" label="Enter new password" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" :rules="[rules.required, rules.minPass]" :append-icon="showPassword ? 'visibility_off' : 'visibility'" hint="At least 8 characters"> </v-text-field>
          <v-text-field prepend-icon="lock" v-model="retype" label="Confirm password" :append-icon="showRetype ? 'visibility_off' : 'visibility'" hint="Must match the password" :type="showRetype ? 'text' : 'password'" :rules="[rules.required, rules.equal(data.password, retype)]" @click:append="showRetype = !showRetype">
          </v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click.native="doReset">Reset</v-btn>
      </v-card-actions>

    </v-container>
  </v-card>
</template>
<script>
import { rules } from '@/utils/validation'

export default {
  name: 'ResetPasswordForm',
  props: {
    resetPassword: {
      type: Function,
      default: undefined
    },
    uid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: {
        uid: null,
        password: ''
      },
      valid: false,
      retype: '',
      rules: null,
      showPassword: false,
      showRetype: false
    }
  },
  created() {
    this.rules = rules
    this.data.uid = this.uid
  },
  methods: {
    doReset() {
      if (this.valid) {
        this.resetPassword(this.data)
      }
    }
  }
}
</script>
