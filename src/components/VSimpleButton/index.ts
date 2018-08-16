import Vue, { VueConstructor } from "vue";
import VSimpleButton from '../VSimpleButton';

const Plugin = {
    install(Vue: VueConstructor) {
        Vue.component("v-simplebutton", VSimpleButton);
        console.log("Hello the simplebutton plugin installed");
    }
}

export default Plugin
