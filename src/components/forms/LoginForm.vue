<template>
  <v-card class="elevation-12">
    <v-container>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
          <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large color="primary">Login</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn flat>Forgot password?</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'LoginForm'
}
</script>
