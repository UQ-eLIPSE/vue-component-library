import Vue from "vue";

import FlockButton from "./Button.vue";
import FlockBanner from "./Banner.vue";

const Components:any = {
  FlockButton,
  FlockBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
