import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";
import excel from "vue-excel-export";
import { VueEditor } from "vue2-editor";
import VCalendar from "v-calendar";
import axios from "axios";
import urls from "./urls";
import { Service } from "axios-middleware";
const service = new Service(axios);

service.register({

  onRequest(config) {
    const token = sessionStorage.getItem("token");
    console.log(localStorage.getItem("payloadData"));
    if (token) {
      const tokenReq = "Token " + sessionStorage.getItem("token");
      config.headers.Authorization = tokenReq;
    }
    return config;
  },

  onResponse(response) {
    if (response.data=='permission denied') {
      if (!refreshToken()) {
        sessionStorage.clear();
        window.location.href = "http://localhost:1024/403";
      } else {
        localStorage.setItem("token", response.data.accessToken);
      }
    }
    return response;
  },

});

async function refreshToken() {
  console.log(localStorage.getItem("payloadData"));
  const refreshResult = await axios.get(urls.Token.refreshToken, {
    params: {
      refreshtoken: localStorage.getItem("refreshToken"),
      payload: localStorage.getItem("payloadData"),
    },
  });
  return refreshResult;
}

Vue.config.productionTip = false;
Vue.use(excel);
Vue.use(VCalendar, {
  componentPrefix: "vc",
});
new Vue({
  router,
  vuetify,
  store,
  VueEditor,
  render: (h) => h(App),
}).$mount("#app");
