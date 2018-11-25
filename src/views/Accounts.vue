<template>
  <v-container class="accounts">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Accounts</h1>
        <Logo />
      </v-card-title>
      <v-card-text>
          <v-container v-show="!showForm">
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
                <AccountsForm :addAccount="addAccount" :item="item" :closeForm="closeForm" />
              </v-flex>
            </v-layout>
          </v-container>
          <Confirm :confirm="confirm" :title="title" :message="message" :active="showConfirm" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import AccountsTable from '@/components/forms/AccountsTable.vue'
import AccountsForm from '@/components/forms/AccountsForm.vue'
import Confirm from '@/components/common/Confirm.vue'

export default {
  name: 'Accounts',
  store,
  components: {
    Logo,
    AccountsForm,
    AccountsTable,
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
    }
  },
  watch: {
    accounts() {
      this.items = this.accounts
    },
    account() {
      this.showForm = false
      store.dispatch('loadUserAccounts', this.user)
    }
  },
  methods: {
    addAccount(user) {
      user.participantId = this.user.id
      store.dispatch('addAccount', user)
    },
    deleteAccount(account) {
      this.showConfirm = true
      this.delAccount = account
    },
    closeForm() {
      this.showForm = false
    },
    confirm(deleteAccount) {
      this.showConfirm = false
      if (deleteAccount) {
        store.dispatch('deleteAccount', this.delAccount)
      }
    }
  },
  data() {
    return {
      showForm: false,
      items: [],
      showConfirm: false,
      delAccount: {},
      title: 'Delete account',
      message: 'Are you sure you want to delete this account?'
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: 'Login' })
      return
    }
    store.dispatch('loadUserAccounts', this.user)
  }
}
</script>

<style scoped>
.accounts {
  margin-top: 32px;
}
</style>
