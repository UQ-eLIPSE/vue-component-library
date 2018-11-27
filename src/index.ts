import Vue from 'vue'
import _Colors from "./components/_Colors"
import _OtherStyling from "./components/_OtherStyling"
import _Spacing from "./components/_Spacing"
import _Typography from "./components/_Typography"

import Header from "./components/Header"

const VueComponentLibrary = {
  install (Vue : any, options? : any) {
    Vue.component('colors', _Colors);
    Vue.component('other-styling', _OtherStyling);
    Vue.component('spacing', _Spacing);
    Vue.component('typography', _Typography);
    
    Vue.component('v-header', Header);
  }
}

export { VueComponentLibrary };