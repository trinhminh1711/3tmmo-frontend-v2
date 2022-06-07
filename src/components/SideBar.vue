<template>
  <div class="side__bar">
    <div class="el-scrollbar__view">
      <div class="logo pa-3">
        <img src="../assets/Logo.png" alt="" srcset="" />
        <div class="permision">
          <p>
            Tài khoản : <span class="permission-info">{{ getPermission }}</span>
          </p>
          <p class="time"><i class="fas fa-clock"></i> {{ timestamp }}</p>
        </div>
      </div>
      <ul class="menu">
        <li class="item">
          <router-link to="/overview">
            <i class="fas fa-tachometer-alt"></i>
            Tổng quan
          </router-link>
        </li>
        <li v-if="showAdmin" class="item">
          <router-link :to="{ name: 'account' }">
            <v-icon color="white">mdi-account-key</v-icon>
            Quản lý Account
          </router-link>
        </li>
        <li class="item">
          <router-link to="/partner">
            <i class="far fa-handshake"></i>
            Đối tác
          </router-link>
        </li>
        <li class="item">
          <router-link to="/about">
            <i class="fas fa-tachometer-alt"></i>
            Thông tin cá nhân
          </router-link>
        </li>
        <li class="item">
          <router-link to="/listuser">
            <i class="fas fa-user-friends"></i>
            Danh sách user
          </router-link>
        </li>
        <li class="item">
          <router-link to="/advertising">
            <i class="fas fa-share-alt-square"></i>
            Hệ thống giới thiệu
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'order' }">
            <i class="fas fa-indent"></i>
            Thống kê
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'notification' }">
            <i class="fas fa-bullhorn"></i>
            Hệ thống thông báo
          </router-link>
        </li>
        <li @click="logout" class="item">
          <i class="fas fa-sign-out-alt"></i> Đăng xuất
        </li>
        <div class="contact d-flex align-center fixed b-0">
          <div>
            <p>Liên hệ:</p>
          </div>
          <div class="d-flex align-center">
            <img src="../assets/icon/phone.png" alt="" srcset="" />
            <img src="../assets/icon/gmail.png" alt="" srcset="" />
            <img src="../assets/icon/messenger.png" alt="" srcset="" />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import * as permission from "../permission/checkPermission";
export default {
  components: {},
  data() {
    return {
      isShow: false,
      isShow2: false,
      isActive: false,
      timestamp: "",
      getPermission: "",
      showAdmin: false,
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  async mounted() {
    const permision = await permission.checkPermission();
    if (permision == 0) {
      this.getPermission = "admin";
      this.showAdmin = true;
    } else {
      this.getPermission = "user";
      this.showAdmin = false;
    }
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    logout: function() {
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
}
.b-0 {
  bottom: 30px;
}
.sub-menu {
  margin-top: 0 !important;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #bfcbd9 !important;
}
.router-link-active {
  color: red !important;
}
.sub-menu li,
.sub-menu i {
  font-size: 0.8rem;
}
@import "./SideBar";
</style>
