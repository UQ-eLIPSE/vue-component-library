import Vue, { VueConstructor } from "vue";
import VButton from '../VButton';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-button", VButton);
    }
}

export default Plugin
