<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-text-field prepend-icon="create" v-model="account.bitcoinAddress" label="Bitcoin address" type="text" :rules="[rules.required]" hint="Enter Bitcoin address"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn large  @click.native="exit">Exit</v-btn>
        <v-spacer></v-spacer>
        <v-btn large color="primary" @click.native="save">Save</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
import { rules } from '@/utils/validation'

export default {
  name: 'BitcoinAccountsForm',
  props: {
    addAccount: {
      type: Function,
      default: undefined
    },
    closeForm: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      valid: false,
      rules: null,
      account: {
        bitcoinAddress: ''
      }
    }
  },
  methods: {
    save() {
      if (this.valid) {
        this.addAccount(this.account)
      }
    },
    exit() {
      this.closeForm()
    }
  },
  created() {
    this.rules = rules
  }
}
</script>
