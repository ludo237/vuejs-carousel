import Vue from "vue";
import VueResource from "vue-resource";
import Carousel from "./components/Carousel.vue";

Vue.use(VueResource);
Vue.config.debug = true;

const carousel = new Vue({
    el: "#your-application-id",
    components: { Carousel },

    mounted() {
        // Debug purpose
        if(Vue.config.debug) {
            console.log("Debug is on");
        }
    }
});
