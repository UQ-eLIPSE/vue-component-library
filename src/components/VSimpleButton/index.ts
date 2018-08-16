import { VueConstructor } from "vue";
import VSimpleButton from './VSimpleButton.vue';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-simplebutton", VSimpleButton);
    }
}

export default Plugin
