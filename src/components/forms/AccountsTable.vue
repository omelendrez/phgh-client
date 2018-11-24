<template>
  <v-data-table
    hide-actions
    :items="items"
    :headers="headers"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.bankCode }}</td>
      <td>{{ props.item.accountHolderName }}</td>
      <td>{{ props.item.NUBAN }}</td>
      <td>{{ props.item.status }}</td>
      <td class="justify-center layout">
        <v-icon small color="error" @click="doDeleteAccount(props.item)">clear</v-icon>
      </td>
    </template>
  </v-data-table>
</template>
<script>
const { banks, status } = require('./../../utils/common.json')

export default {
  name: 'AccountsTable',
  props: {
    accounts: {
      type: Array,
      default: []
    },
    deleteAccount: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      headers: [
        { text: 'Bank Code', sortable: false, value: 'bankCode' },
        { text: 'Account Holder', sortable: false, value: 'accountHolderName' },
        { text: 'NUBAN', sortable: true, value: 'NUBAN' },
        { text: 'Status', sortable: false, value: 'status' },
        { text: 'Actions', value: 'actions', align: 'center' }
      ],
      items: []
    }
  },
  watch: {
    accounts() {
      if (this.accounts.length) {
        const items = this.accounts.map(item => {
          item.bankCode = banks.find(bank => bank.code === item.bankCode).name
          item.status = status.find(st => st.status === item.status).description
          return item
        })
        this.items = items
      }
    }
  },
  methods: {
    doDeleteAccount(item) {
      this.deleteAccount(item)
    }
  }
}
</script>
