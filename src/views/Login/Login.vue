<template>

  <div class="login-wrapper">
    
    <v-container class="d-flex flex-column login-container">
      <div class="logo">
        <img src="../../assets/Logo.png" alt="" />
      </div>
      <v-row class="login-form d-flex flex-column align-center">
        <v-form>
          <v-text-field v-model="userName" label="Tên đăng nhập" placeholder="Nhập tên đăng nhập" outlined class="d-block" append-icon="mdi-account"></v-text-field>
          <v-text-field v-model="passWord" type="password" label="Mật khẩu" outlined class="d-block" append-icon="mdi-lock"></v-text-field>
        </v-form>
        <v-btn :disabled="!valid" color="success" class="mr-4 white--text" @click="login">
          Đăng nhập
        </v-btn>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

</template>

<script>
import * as user from "../../api/user/login";
export default {
  data() {
    return {
      valid: false,
      userName: "",
      passWord: "",
      name: "",
      snackbar: false,
      text: "error",
    };
  },
  methods: {
    async login() {
      if (this.userName == "") {
        this.snackbar = true;
        this.text = "Vui lòng nhập thông tin";
        return 0;
      } else {
        var checkLogin = await user.login(this.userName, this.passWord);
        if (!checkLogin) {
          this.snackbar = true;
          this.text = "Tên đăng nhập hoặc mật khẩu không đúng";
        } else {
          this.$router.push({ path: "/" });
        }
        this.userName = "";
        this.passWord = "";
      }
    },
  },
  created() {},
  mounted() {
    const that = this;
    window.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        that.login();
      }
    });
  },
  watch: {
    passWord() {
      if (this.userName != "") {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(239, 239, 247, 1) 0%, rgba(0, 212, 255, 1) 100%);
}
.logo img {
  max-width: 250px;
  display: block;
  margin: 0 auto;
}
.login-form {
  padding: 3rem 0;
  .v-form {
    width: 30%;
  }
}
.login-container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
