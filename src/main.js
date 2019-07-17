import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/common/reset.css";
import "@/common/public.css";
import VueParticles from "vue-particles";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "animate.css";

Vue.use(ElementUI);
Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
