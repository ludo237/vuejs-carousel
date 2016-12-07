import Vue from "vue";

/**
 * EventDispatcher class
 * 
 * This class will create a global Vue instance
 * that allows the application to fire and listen 
 * on events from different components
 */
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
