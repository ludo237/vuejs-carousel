<template id="photos">
    <ul class="Photos">
        <li class="Photo" v-for="(photo, index) in photos">
            <figure class="Photo__container">
                <img class="Photo__source" :src="photo.thumbnailUrl" @click="selectThisPhoto(photo, index)"/>
            </figure>
        </li>
    </ul>
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
.Photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}

.Photo {
    list-style-type: none;
}

.Photo__container {
    display: block;
}

.Photo_source {
    display: block;
    max-width: 100%;
}
</style>