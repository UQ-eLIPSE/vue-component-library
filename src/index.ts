// import VBanner from "./components/VBanner"
// import VButton from "./components/VButton"
// import VSimpleButton from "./components/VSimpleButton"

// export default {
//   install (Vue : any) {
//     Vue.component('vbanner', VBanner);
//     Vue.component('vbutton', VButton);
//     Vue.component('vsimplebutton', VSimpleButton);
//   }
// }

// export { VBanner, VButton, VSimpleButton };

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
    </div>`,
    data: {
        name: "World"
    }
});
