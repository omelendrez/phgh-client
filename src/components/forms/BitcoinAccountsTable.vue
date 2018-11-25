<template>
  <v-data-table
    hide-actions
    :items="items"
    :headers="headers"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.bitcoinAddress }}</td>
      <td>{{ props.item.status }}</td>
      <td class="justify-center layout">
        <v-icon small color="error" @click="doDeleteAccount(props.item)">clear</v-icon>
      </td>
    </template>
  </v-data-table>
</template>
<script>
const { status } = require('./../../utils/common.json')

export default {
  name: 'BitcoinAccountsTable',
  props: {
    bitcoinAccounts: {
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
        { text: 'Bitcoin address', sortable: true, value: 'bitcoinAddress' },
        { text: 'Status', sortable: false, value: 'status' },
        { text: 'Actions', value: 'actions', align: 'center' }
      ],
      items: []
    }
  },
  watch: {
    bitcoinAccounts() {
      const items = this.bitcoinAccounts.map(item => {
        item.status = status.find(st => st.status === item.status).description
        return item
      })
      this.items = items
    }
  },
  methods: {
    doDeleteAccount(item) {
      this.deleteAccount(item)
    }
  }
}
</script>
