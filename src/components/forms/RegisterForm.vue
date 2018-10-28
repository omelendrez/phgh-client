<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form>
          <v-text-field name="username" label="Username" type="text"></v-text-field>
          <v-text-field name="email" label="Email" type="text"></v-text-field>
          <v-text-field name="phone" label="Phone" type="text"></v-text-field>
          <v-text-field name="registerPassword" label="Password" id="registerPpassword" type="password"></v-text-field>
          <v-text-field name="confirm" label="Re-type password" id="confirm" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary">Register</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'RegisterForm'
}
</script>
