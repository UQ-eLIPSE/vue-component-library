import VBanner from "./components/VBanner"
import VButton from "./components/VButton"
import VSimpleButton from "./components/VSimpleButton"

export default {
  install (Vue : any) {
    Vue.component('vbanner', VBanner);
    Vue.component('vbutton', VButton);
    Vue.component('vsimplebutton', VSimpleButton);
  }
}

export { VBanner, VButton, VSimpleButton };