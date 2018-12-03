import _Vue, { PluginObject } from 'vue'

import _Colors from "./components/_Colors"
import _OtherStyling from "./components/_OtherStyling"
import _Spacing from "./components/_Spacing"
import _Typography from "./components/_Typography"

import VHeader from "./components/Header"
import VIcon from "./components/Icon"

const VueComponentLibrary: PluginObject<_Vue> = {
  install: (Vue: typeof _Vue, options?: any) => {
    Vue.component('colors', _Colors);
    Vue.component('other-styling', _OtherStyling);
    Vue.component('spacing', _Spacing);
    Vue.component('typography', _Typography);

    Vue.component('VHeader', VHeader);
    Vue.component('VHeader', VIcon);
  }
}

export default VueComponentLibrary