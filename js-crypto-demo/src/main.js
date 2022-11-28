import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 2. 引入组件样式
import "vant/lib/index.css";
import "@/style/common.less";
import vant from "vant";

createApp(App).use(store).use(router).use(vant).mount("#app");
