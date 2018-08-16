import { VueConstructor } from "vue";
import VButton from './VButton.vue';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-button", VButton);
    }
}

export default Plugin
