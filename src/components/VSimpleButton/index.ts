import Vue, { VueConstructor } from "vue";
import VSimpleButton from '../VSimpleButton';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-simplebutton", VSimpleButton);
    }
}

export default Plugin
