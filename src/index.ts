import { VueConstructor, PluginFunction } from "vue";
import VBanner from "./components/VBanner";
import VButton from "./components/VButton";
import VSimpleButton from "./components/VSimpleButton";

export interface VueComponentPlugin {
  install: PluginFunction<void>
}

const VueComponentLibrary: VueComponentPlugin = {
  install (Vue: VueConstructor): void {
    Vue.component('v-banner', VBanner);
    Vue.component('v-button', VButton);
    Vue.component('v-simplebutton', VSimpleButton);
  }
};

export default VueComponentLibrary;
