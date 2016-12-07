require("./shared/EventDispatcher.js");

import Vue from "vue";
import VueResource from "vue-resource";
import Photos from "./components/Photos.vue";
import Theater from "./components/Theater.vue";

Vue.use(VueResource);
Vue.config.debug = true;

const carousel = new Vue({
    el: "#your-application-id",

    components: { Photos, Theater },

    mounted() {
        // Debug purpose
        if(Vue.config.debug) {
            console.log("Debug is on");
        }
    }
});
