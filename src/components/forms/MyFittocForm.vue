<template>
  <v-card flat>

    <v-card-text>
      <span class="title">MY INFO</span>
      <div class="user-data">
        <div class="label">User name</div>
        <span class="value">{{user.username}}</span>
      </div>
      <div class="user-data">
        <span class="label">Email:</span>
        <span class="value">{{user.email}}</span>
      </div>
      <div class="user-data">
        <span class="label">Phone:</span>
        <span class="value">{{user.phone}}</span>
      </div>
      <div class="user-data">
        <div class="label">Referral link</div>
        <span class="value" @click="copy">
          {{referralLink}}
          <v-alert :value="showAlert" type="success">Your referral link has been copied</v-alert>
        </span>
      </div>
      <v-btn small color="primary" dark @click="copy">Copy link</v-btn>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <span class="title">MY REFEREE</span>
      <div class="user-data">
        <div class="label">User name</div>
        <span class="value"></span>
      </div>
      <div class="user-data">
        <span class="label">Email:</span>
        <span class="value"></span>
      </div>
      <div class="user-data">
        <span class="label">Phone:</span>
        <span class="value"></span>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <span class="title">MY GUIDER</span>
      <div class="user-data">
        <div class="label">User name</div>
        <span class="value"></span>
      </div>
      <div class="user-data">
        <span class="label">Email:</span>
        <span class="value"></span>
      </div>
      <div class="user-data">
        <span class="label">Phone:</span>
        <span class="value"></span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MyFittocForm',
  props: {
    user: {
      type: Object,
      default: undefined
    },
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
  display: inline-block;
  font-weight: bold;
}
</style>

