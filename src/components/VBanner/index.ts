import Vue, { VueConstructor } from "vue";
import VBanner from '../VBanner';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-banner", VBanner);
    }
}

export default Plugin
