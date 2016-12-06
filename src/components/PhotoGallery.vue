<template id="photo-gallery">
    <div class="PhotoGallery">
        <ul class="PhotoGallery__list">
            <li class="PhotoGallery__item" v-for="(photo, index) in photos">
                <figure class="PhotoGallery__figure image">
                    <img class="PhotoGallery__image" :src="photo.thumbnailUrl" @click="selectThisPhoto(photo, index)"/>
                </figure>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

        props: ["source"],

        data() {
            return {
                photos: {},
            }
        },

        mounted() {

            window.EventDispatcher.listen("previousPhotoHasBeenRequested", (index) => {
                index--;
                if (index > 0) {
                    this.selectThisPhoto(this.photos[index], index);
                } else {
                    this.selectThisPhoto({});
                }
            });

            window.EventDispatcher.listen("nextPhotoHasBeenRequested", (index) => {
                index++;
                if (index <= this.photos.length - 1) {
                    this.selectThisPhoto(this.photos[index], index);
                } else {
                    this.selectThisPhoto({});
                }
            });

            this.$http.get(this.source).then((fetchedPhotos) => {
                this.photos = fetchedPhotos.data;
            }, (response) => {
                console.error(response);
            });
        },

        methods: {

            selectThisPhoto(photo, index = null) {

                if (index !== null) {
                    photo.index = index;
                }

                window.EventDispatcher.fire("photoHasBeenSelected", photo);
            },
        },
    }
</script>

<style>
.PhotoGallery {
    overflow: hidden;
}

.PhotoGallery__list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0;
    padding: 0;
}

.PhotoGallery__item {
    list-style-type: none;
}

.PhotoGallery__figure {
    display: block;
}

.PhotoGallery__image {
    display: block;
}
</style>