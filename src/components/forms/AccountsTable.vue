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
    </template>
  </v-data-table>
</template>
<script>
const banks = require('./../../utils/common.json').banks
const status = require('./../../utils/common.json').status

export default {
  name: 'AccountsTable',
  props: {
    accounts: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      headers: [
        { text: 'Bank Code', sortable: false, value: 'bankCode' },
        { text: 'Account Holder', sortable: false, value: 'accountHolderName' },
        { text: 'NUBAN', sortable: true, value: 'NUBAN' },
        { text: 'Status', sortable: false, value: 'status' }
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
  }
}
</script>
