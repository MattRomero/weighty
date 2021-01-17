import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";
import axios from 'axios'
import VueAxios from 'vue-axios'

firebase.initializeApp({
  apiKey: "AIzaSyBNpr-ziuoAI-F_vgjjjMetkghT-Amg71Q",
  authDomain: "weighty-7bc57.firebaseapp.com",
  projectId: "weighty-7bc57",
  storageBucket: "weighty-7bc57.appspot.com",
  messagingSenderId: "719031962826",
  appId: "1:719031962826:web:3ba9acfa0dd850a17b7833"
});

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
