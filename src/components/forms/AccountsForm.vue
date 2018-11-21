<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form v-model="valid" ref="form">
          <v-select :items="banks" v-model="account.bankName" menu-props="auto" label="Select bank" prepend-icon="account_balance" single-line></v-select>
          <v-text-field prepend-icon="person" v-model="account.accountHolderName" label="Account holder name" type="text" :rules="[rules.required]" hint="Enter account holder's name"></v-text-field>
          <v-text-field prepend-icon="create" v-model="account.NUBAN" label="NUBAN" type="text" :rules="[rules.required, rules.minNUBAN]" hint="Enter NUBAN account number" :mask="rules.maskNUBAN"></v-text-field>
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
const banks = require('./../../utils/common.json').banks

export default {
  name: 'AccountsForm',
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
        bankCode: '',
        bankName: '',
        accountHolderName: '',
        NUBAN: ''
      },
      banks: []
    }
  },
  methods: {
    save() {
      if (this.valid) {
        this.account.bankCode = banks.find(
          item => item.name === this.account.bankName
        ).code
        this.addAccount(this.account)
      }
    },
    exit() {
      this.closeForm()
    }
  },
  created() {
    this.rules = rules
    const banksList = []
    banks.map(item => {
      banksList.push(item.name)
    })
    this.banks = banksList
  }
}
</script>
