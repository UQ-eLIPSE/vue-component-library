import Vue from 'vue'
import VBanner from "./components/VBanner"
import VButton from "./components/VButton"
import VSimpleButton from "./components/VSimpleButton"
import VHeader from "./components/VHeader"

export default {
  install (Vue : any) {
    Vue.component('v-banner', VBanner);
    Vue.component('v-button', VButton);
    Vue.component('v-simple-button', VSimpleButton);
    Vue.component('v-header', VHeader);
  }
}