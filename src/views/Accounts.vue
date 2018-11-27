<template>
  <v-container class="accounts">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Bank Accounts</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
        <v-container v-show="!showForm && !showBitcoinForm">
          <AccountsTable :accounts="items" :deleteAccount="deleteAccount" />
          <v-btn color="primary" @click="showForm = !showForm">Add account</v-btn>
        </v-container>
        <v-container fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 v-if="showForm">
              <v-toolbar color="primary" dark>
                <v-toolbar-title>
                  Add Account
                </v-toolbar-title>
                <Logo />
              </v-toolbar>
              <AccountsForm :addAccount="addAccount" :closeForm="closeForm" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Bitcoin Accounts</h1>
      </v-card-title>
      <v-card-text>
          <v-container v-show="!showForm && !showBitcoinForm">
            <BitcoinAccountsTable :bitcoinAccounts="bitcoinItems" :deleteAccount="deleteBitcoinAccount" />
            <v-btn color="primary" @click="showBitcoinForm = !showBitcoinForm">Add account</v-btn>
          </v-container>
          <v-container fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4 v-if="showBitcoinForm">
                <v-toolbar color="primary" dark>
                  <v-toolbar-title>
                    Add Account
                  </v-toolbar-title>
                  <Logo />
                </v-toolbar>
                <BitcoinAccountsForm :addAccount="addBitcoinAccount" :closeForm="closeForm" />
              </v-flex>
            </v-layout>
          </v-container>
      </v-card-text>
    </v-card>
    <Confirm :confirm="confirm" :title="title" :message="message" :active="showConfirm" />
    <Confirm :confirm="confirmBitcoin" :title="title" :message="message" :active="showConfirmBitcoin" />
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import AccountsTable from '@/components/forms/AccountsTable'
import AccountsForm from '@/components/forms/AccountsForm'
import BitcoinAccountsTable from '@/components/forms/BitcoinAccountsTable'
import BitcoinAccountsForm from '@/components/forms/BitcoinAccountsForm'
import Confirm from '@/components/common/Confirm'

export default {
  name: 'Accounts',
  store,
  components: {
    Logo,
    AccountsForm,
    AccountsTable,
    BitcoinAccountsTable,
    BitcoinAccountsForm,
    Confirm
  },
  computed: {
    user() {
      return store.getters.user
    },
    accounts() {
      return store.getters.accounts
    },
    account() {
      return store.getters.account
    },
    bitcoinAccounts() {
      return store.getters.bitcoinAccounts
    },
    bitcoinAccount() {
      return store.getters.bitcoinAccount
    }
  },
  watch: {
    accounts() {
      this.items = this.accounts
    },
    account() {
      this.showForm = false
      store.dispatch('loadUserAccounts', this.user)
    },
    bitcoinAccounts() {
      this.bitcoinItems = this.bitcoinAccounts
    },
    bitcoinAccount() {
      this.showBitcoinForm = false
      store.dispatch('loadUserBitcoinAccounts', this.user)
    }
  },
  methods: {
    addAccount(user) {
      user.participantId = this.user.id
      store.dispatch('addAccount', user)
    },
    deleteAccount(account) {
      this.message = `Are you sure you want to delete account NUBAN ${
        account.NUBAN
      }?`
      this.title = 'Deleting bank account'
      this.showConfirm = true
      this.delAccount = account
    },
    addBitcoinAccount(user) {
      user.participantId = this.user.id
      store.dispatch('addBitcoinAccount', user)
    },
    deleteBitcoinAccount(account) {
      this.message = `Are you sure you want to delete bitcoin account ${
        account.bitcoinAddress
      }?`
      this.title = 'Deleting bitcoin account'
      this.showConfirmBitcoin = true
      this.delBitcoinAccount = account
    },
    closeForm() {
      this.showForm = false
      this.showBitcoinForm = false
    },
    confirm(deleteAccount) {
      this.showConfirm = false
      if (deleteAccount) {
        store.dispatch('deleteAccount', this.delAccount)
      }
    },
    confirmBitcoin(deleteAccount) {
      this.showConfirmBitcoin = false
      if (deleteAccount) {
        store.dispatch('deleteBitcoinAccount', this.delBitcoinAccount)
      }
    }
  },
  data() {
    return {
      showForm: false,
      showBitcoinForm: false,
      items: [],
      bitcoinItems: [],
      showConfirm: false,
      showConfirmBitcoin: false,
      delAccount: {},
      delBitcoinAccount: {},
      title: '',
      message: ''
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: 'Login' })
      return
    }
  },
  mounted() {
    store.dispatch('loadUserAccounts', this.user)
    store.dispatch('loadUserBitcoinAccounts', this.user)
  }
}
</script>

<style scoped>
.accounts {
  margin-top: 32px;
}
</style>
