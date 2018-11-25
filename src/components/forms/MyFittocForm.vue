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
    </v-card-text>
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
import store from '@/store'
export default {
  name: 'MyFittocForm',
  store,
  computed: {
    user() {
      return store.getters.user
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

