<template>
  <v-content>
    <v-container v-show="!showForm">
      <AccountsTable :accounts="items" class="accounts" />
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
  </v-content>
</template>

<script>
import store from '@/store'
import Logo from '@/components/common/Logo'
import AccountsTable from '@/components/forms/AccountsTable.vue'
import AccountsForm from '@/components/forms/AccountsForm.vue'

export default {
  name: 'Accounts',
  store,
  components: {
    Logo,
    AccountsForm,
    AccountsTable
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
    closeForm() {
      this.showForm = false
    }
  },
  data() {
    return {
      showForm: false,
      items: []
    }
  },
  created() {
    store.dispatch('loadUserAccounts', this.user)
  }
}
</script>

<style scoped>
.accounts {
  margin-top: 64px;
}
</style>
