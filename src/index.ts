import Vue from 'vue'
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


// import Vue from "vue";
// import VSimpleButton from "./components/VSimpleButton"

// let v = new Vue({
//     el: "#app",
//     template: `
//     <div>
//         <div>Hello {{name}}!</div>
//         Name: <input v-model="name" type="text">
//         <VSimpleButton/>
//     </div>`,
//     data: {
//         name: "World"
//     },
//     components: {
//       VSimpleButton
//     }
// });
