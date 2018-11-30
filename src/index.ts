import _Vue, { PluginObject } from 'vue'
import _Colors from "./components/_Colors/_Colors.vue"
import _OtherStyling from "./components/_OtherStyling/_OtherStyling.vue"
import _Spacing from "./components/_Spacing/_Spacing.vue"
import _Typography from "./components/_Typography/_Typography.vue"

import VHeader from "./components/Header/VHeader.vue"

// export default {
//   install (Vue : typeof _Vue, options?: any) {
//     // Vue.component('colors', _Colors);
//     // Vue.component('other-styling', _OtherStyling);
//     // Vue.component('spacing', _Spacing);
//     // Vue.component('typography', _Typography);

//     Vue.component('VHeader', VHeader);
//   }
// }
const x: PluginObject<_Vue> = {
  install: (Vue: typeof _Vue, options?: any) => {
    Vue.component('VHeader', VHeader);
  }
}

export default x;