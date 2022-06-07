<template>
  <body>
    <div class="content">
      <h2>403 Forbidden</h2>
      <img
        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/282319267_294637362788248_8782221208792741867_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6rmnzSfdEiEAX_kOHvG&tn=9ezFahRKe56wcozk&_nc_ht=scontent.fhan2-3.fna&oh=03_AVJJbgeKnDZgySPYykKRFkUceh4u2hbnwRWLJ51G8vl3uA&oe=62BB1C2A"
      />
      <p>Không có quyền truy cập vào tài nguyên . Vui lòng thử lại</p>
      <v-btn
      class="ma-2"
      outlined
      color="indigo"
      style=" text-transform: capitalize;"
      @click="loginRedirect"
    >
      Đăng nhập lại <v-icon style="margin-left:10px">mdi-cached</v-icon>
    </v-btn>
    </div>
  </body>
</template>

<script>
export default {
  methods:{
    loginRedirect: function () {
         window.location.href = 'http://localhost:1024/login';
    }
  }
}
</script>

  <style scoped>
  
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 44px;
      line-height: 52px;
      /* identical to box height */

      text-align: center;

      color: #8d8e92;
    }
    .content {
      width: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      /* or 160% */
      margin-top: 2rem;
      text-align: center;

      color: #8d8e92;
    }
  </style>