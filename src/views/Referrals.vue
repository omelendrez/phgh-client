<template>
  <v-container class="referrals">
    <v-card>
      <v-card-title primary-title class="headline green lighten-3">
        <h1 class="headline">Referrals</h1>
        <Logo/>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
        <v-container>
          <ReferralsTable :referrals="items" :search="search"/>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import store from "@/store";
import Logo from "@/components/common/Logo";
import ReferralsTable from "@/components/forms/ReferralsTable";

export default {
  name: "Referrals",
  store,
  components: {
    Logo,
    ReferralsTable
  },
  data() {
    return {
      items: [],
      search: ""
    };
  },
  computed: {
    user() {
      return store.getters.user;
    },
    referrals() {
      return store.getters.referrals;
    }
  },
  watch: {
    referrals() {
      this.items = this.referrals;
    }
  },
  created() {
    if (!this.user) {
      this.$router.push({ name: "Login" });
    }
  },
  mounted() {
    store.dispatch("loadReferrals", this.user);
  }
};
</script>

<style scoped>
.referrals {
  margin-top: 32px;
}
</style>
