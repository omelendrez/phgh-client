<template>
  <v-data-table hide-actions :items="items" :headers="headers" :search="search">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.username }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.phone }}</td>
    </template>
    <v-alert
      slot="no-results"
      :value="true"
      color="info"
      icon="warning"
    >Your search for "{{ search }}" found no results.</v-alert>
  </v-data-table>
</template>
<script>
export default {
  name: "ReferralsTable",
  props: {
    referrals: {
      type: Array,
      default: []
    },
    search: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      headers: [
        { text: "Username", sortable: true, value: "username" },
        { text: "Email", sortable: true, value: "email" },
        { text: "Phone", sortable: true, value: "phone" }
      ],
      items: []
    };
  },
  watch: {
    referrals() {
      this.items = this.referrals;
    }
  }
};
</script>
