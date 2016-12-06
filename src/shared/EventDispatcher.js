import Vue from "vue";

window.EventDispatcher = new class {

    constructor() {
        this.vueInstance = new Vue();
    }

    fire(event, data = null) {
        this.vueInstance.$emit(event,  data);
    }

    listen(event, callback) {
        this.vueInstance.$on(event,  callback);
    }

};
