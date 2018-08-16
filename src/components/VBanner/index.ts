import { VueConstructor } from "vue";
import VBanner from './VBanner.vue';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-banner", VBanner);
    }
}

export default Plugin
