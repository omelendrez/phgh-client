<template>
  <v-card flat>
    <v-card-text>
      <span class="title">MY REFERRAL LINK</span>
      <div class="user-data">
        <div class="label">Link</div>
        <span class="value" @click="copy">
          {{referralLink}}
        <v-alert :value="showAlert" type="success">Your referral link has been copied</v-alert>
        </span>
      </div>
      <v-btn small color="primary" dark @click="copy">Copy link</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ReferralsForm',
  props: {
    referralLink: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showAlert: false
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.referralLink)
      this.showAlert = true
    }
  }
}
</script>
<style scoped>
.title {
  color: #356859;
}
.user-data {
  display: block;
  margin: 14px;
}
.label {
  display: block;
  color: #888;
}
.value {
  max-width: 100%;
  overflow: hidden;
  display: inline-block;
}
</style>

