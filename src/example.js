import Vue from "vue";
import {store, Photos, Theater} from "./carousel";


const example = new Vue({
    el: "#example-application",

    store,

    components: {
        Photos, Theater
    },
});
