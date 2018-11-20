import Vue from 'vue'
import Colors from "./components/Colors"
import Spacing from "./components/Spacing"
import Typography from "./components/Typography"

import VBanner from "./components/VBanner"
import VButton from "./components/VButton"
import VSimpleButton from "./components/VSimpleButton"
import VHeader from "./components/VHeader"

export default {
  install (Vue : any) {
    Vue.component('colors', Colors);
    Vue.component('spacing', Spacing);
    Vue.component('typography', Typography);
    
    Vue.component('v-banner', VBanner);
    Vue.component('v-button', VButton);
    Vue.component('v-simple-button', VSimpleButton);
    Vue.component('v-header', VHeader);
  }
}