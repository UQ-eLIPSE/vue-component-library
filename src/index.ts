import Vue from 'vue'
// import VBanner from "./components/VBanner"
// import VButton from "./components/VButton"
// import VSimpleButton from "./components/VSimpleButton"
import VSimpleButton from "./VSimpleButton.vue"

export default {
  install (Vue : any) {
    // Vue.component('vbanner', VBanner);
    // Vue.component('vbutton', VButton);
    Vue.component('v-simplebutton', VSimpleButton);
  }
}