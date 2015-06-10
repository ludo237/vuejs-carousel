(function () {
    "use strict";
    // Initialise Vue variable
    var gallery;

    gallery = new Vue({
        // Attach the Vue object to the master parent called #gallery
        // Gallery will include all the photos and the photo gallery itself
        el: "#gallery",

        data: {
            // Toggle photo gallery visibility
            isVisible: false,
            // Current photo title
            title: '',
            // Current image src
            image: '',
            // Next and Previous object
            // from the current photo selected
            next: null,
            previous: null
        },

        methods: {
<<<<<<< HEAD
            // When click on an anchor of image this will be triggered
            viewImage: function () {
=======
            // When click on an anchor of image this will triggered
            viewImage: function (event) {
>>>>>>> origin/master
                // TODO: This seems utter bullshit, refactor this pls
                this.next = event.target.parentNode.nextElementSibling;
                this.previous = event.target.parentNode.previousElementSibling;
                this.title = event.target.parentNode.getAttribute("data-title");
                this.image = event.target.parentNode.getAttribute("data-original");
                // Show the gallery itself
                this.isVisible = !this.isVisible;
                event.preventDefault();
            },
            // Close the gallery
            closeGallery: function (event) {
                this.isVisible = false;
                this.title = '';
                this.image = '';
                this.counter = 0;
                event.preventDefault();
            },
            // Next photo anchor
            nextPhoto: function () {
                if(this.next !== null && this.next.nodeName === "FIGURE"){
                    this.title = this.next.getAttribute("data-title");
                    this.image = this.next.getAttribute("data-original");
                    this.next = this.next.nextElementSibling;
                    if(this.next !== null){
                        this.previous = this.next.previousElementSibling;
                    }
                }

                event.preventDefault();
            },
            // Previous photo anchor
            previousPhoto: function () {
                if(this.previous !== null && this.previous.nodeName === "FIGURE"){
                    this.title = this.previous.getAttribute("data-title");
                    this.image = this.previous.getAttribute("data-original");
                    this.next = this.previous.nextElementSibling;
                    this.previous = this.previous.previousElementSibling;
                }

                event.preventDefault();
            }
        }
    });
})();
