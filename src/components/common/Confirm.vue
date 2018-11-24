<template>
  <v-dialog v-model="active" max-width="400">
    <v-card>
      <v-card-title class="white--text headline error">{{title}}</v-card-title>
      <v-card-text>
        {{message}}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="doConfirm(true)">
          Yes
        </v-btn>
        <v-btn color="primary" @click="doConfirm(false)">
          No
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Confirm',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    confirm: {
      type: Function,
      default: undefined
    }
  },
  methods: {
    doConfirm(value) {
      this.confirm(value)
    }
  }
}
</script>

<style scoped>
</style>
