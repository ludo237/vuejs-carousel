<template id="photos">
    <ul class="Photos">
        <photo v-for="photo in photos" :photo="photo"></photo>
    </ul>
</template>

<script>
    import Photo from "./Photo.vue";

    export default {
        name: "photos",

        components: {
            Photo
        },

        computed: {
            photos() {
                return this.$store.getters.photos
            }
        },

        props: {
            source: {
                Type: String
            }
        },

        mounted() {
            this.$http.get(this.source).then((response) => {
                this.$store.commit("writePhotos", response.data);
            }, (response) => {
                console.error(response);
            });
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
