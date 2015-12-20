(function () {
    "use strict";
    // Initialise Vue variable
    var gallery;

    gallery = new Vue({
        // Attach the Vue object to the master parent called #gallery
        // Gallery will include all the photos and the photo gallery itself
        el: "#gallery",

        data: {
            photo: {
              // Current photo title
              title: "",
              // Current image src
              src: "",
              // Determine if the photo has been selected
              selected: false,
              next: null,
              previous: null,
            },
        },

        methods: {
          toggleSelectedImage: function(event) {
            this.changeImage(event.target);
          },

          closeGallery: function() {
            this.photo.title = "";
            this.photo.src = "";
            this.photo.selected = false;
          },

          nextPhoto: function () {
            if(this.photo.next !== null && this.photo.next.nodeName === "FIGURE") {
              var photos = this.photo.next.children;
              if(typeof photos !== 'undefined' && photos.length > 0)
              {
                this.changeImage(photos[0]);
              }
            }
          },

          previousPhoto: function () {
            if(this.photo.previous !== null && this.photo.previous.nodeName == "FIGURE") {
              var photos = this.photo.previous.children;
              if(typeof photos !== 'undefined' && photos.length > 0)
              {
                this.changeImage(photos[0]);
              }
            }
          },

          changeImage: function(photo) {
            this.photo.title = photo.getAttribute("title");
            this.photo.src = photo.getAttribute("data-original");
            this.photo.next = photo.parentNode.nextElementSibling;
            this.photo.previous = photo.parentNode.previousElementSibling;
            this.photo.selected = true;
          },

        },
    });
})();
