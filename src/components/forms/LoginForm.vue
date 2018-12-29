<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form v-model="valid" ref="form">
        <v-tabs slider-color="primary" icons-and-text glow centered v-model="currentTab">
          <v-tab>
            <v-icon>person</v-icon>
          </v-tab>
          <v-tab-item>
            <v-text-field
              prepend-icon="person"
              v-model="user.username"
              label="Username"
              type="text"
            ></v-text-field>
          </v-tab-item>

          <v-tab>
            <v-icon>mail</v-icon>
          </v-tab>
          <v-tab-item>
            <v-text-field prepend-icon="mail" v-model="user.email" label="Email" type="email"></v-text-field>
          </v-tab-item>

          <v-tab>
            <v-icon>phone</v-icon>
          </v-tab>
          <v-tab-item>
            <v-text-field
              prepend-icon="phone"
              v-model="user.phone"
              label="Phone"
              type="phone"
              :mask="rules.maskPhone"
            ></v-text-field>
          </v-tab-item>
        </v-tabs>

        <v-text-field
          ref="pass"
          prepend-icon="lock"
          v-model="user.password"
          label="Password"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :type="showPassword ? 'text' : 'password'"
          :rules="[rules.required, rules.minPass]"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn large color="primary" @click.native="doLogin">Login</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn flat @click.native="doForgotPassword">Forgot password?</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { rules } from "@/utils/validation";
export default {
  name: "LoginForm",
  props: {
    login: {
      type: Function,
      default: undefined
    },
    forgotPassword: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      valid: false,
      currentTab: null,
      user: {
        username: "",
        email: "",
        phone: "",
        password: ""
      },
      showPassword: false,
      rules: null
    };
  },
  methods: {
    doLogin() {
      if (this.valid) {
        const user = {};
        localStorage.setItem("currentTab", this.currentTab);
        switch (this.currentTab) {
          case 1:
            user.email = this.user.email;
            localStorage.setItem("user", this.user.email);
            break;
          case 2:
            user.phone = this.user.phone;
            localStorage.setItem("user", this.user.phone);
            break;
          default:
            user.username = this.user.username;
            localStorage.setItem("user", this.user.username);
        }
        user.password = this.user.password;
        this.login(user);
      } else {
        if (!this.password) {
          this.$refs.pass.focus();
        }
      }
    },
    doForgotPassword() {
      const user = {};
      switch (this.currentTab) {
        case 1:
          user.email = this.user.email;
          break;
        case 2:
          user.phone = this.user.phone;
          break;
        default:
          user.username = this.user.username;
      }
      this.forgotPassword(user);
    }
  },
  created() {
    this.rules = rules;
    this.currentTab = parseInt(localStorage.getItem("currentTab"));
    switch (this.currentTab) {
      case 1:
        this.user.email = localStorage.getItem("user");
        break;
      case 2:
        this.user.phone = localStorage.getItem("user");
        break;
      default:
        this.user.username = localStorage.getItem("user");
    }
  }
};
</script>
