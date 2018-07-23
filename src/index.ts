import Vue from "vue";
import Banner from "./components/Banner.vue";
import Button from "./components/Button.vue";
import SimpleButton from "./components/SimpleButton.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: {
    Banner,
    Button,
    SimpleButton
  }
});

