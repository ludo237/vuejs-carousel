import Vue from "vue";
import {store} from "./store/store";
import Photos from "./components/Photos.vue";
import Theater from "./components/Theater.vue";

const carousel = new Vue({
    el: "#your-application-id",

    store,

    components: {
        Photos,
        Theater
    },
});
