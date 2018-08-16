import { VueConstructor, PluginFunction } from "vue";
import VBanner from "./components/VBanner";
import VButton from "./components/VButton";
import VSimpleButton from "./components/VSimpleButton";
// import * as components from './components'

// export interface VueComponentPlugin {
//   install: PluginFunction<any>
// }

// const VueComponentLibrary: VueComponentPlugin = {
//   install (Vue: VueConstructor, options = {}): void {
//     Vue.component('v-banner', VBanner);
//     Vue.component('v-button', VButton);
//     Vue.component('v-simplebutton', VSimpleButton);
//     // Register component plugins
//     // (<any>Object).values(components).forEach((component: any) => {
//     //   Vue.use(component);
//     // })
//   }
// };

// export default VueComponentLibrary;

export default {
  install (Vue: VueConstructor, options = {}): void {
    Vue.component('v-banner', VBanner);
    Vue.component('v-button', VButton);
    Vue.component('v-simplebutton', VSimpleButton);
  }
};

export {VBanner, VButton, VSimpleButton};