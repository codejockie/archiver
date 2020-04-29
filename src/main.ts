import Vue from "vue";
import VCalendar from "v-calendar";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VCalendar, {
  datePicker: {
    popover: {
      visibility: "click"
    }
  },
  locales: {
    "en-GB": {
      firstDayOfWeek: 1,
      masks: {
        L: "YYYY/MM/DD"
      }
    }
  },
  masks: {
    title: "MMMM YYYY",
    weekdays: "W",
    navMonths: "MMM",
    input: ["L", "YYYY/MM/DD", "YYYY-MM-DD"],
    dayPopover: "WWW, MMM D, YYYY",
    data: ["L", "YYYY/MM/DD", "YYYY-MM-DD"]
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
