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
            this.$store.dispatch("loadPhotos", this.source);
        }
    }
</script>

<style scoped>
.Photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}
</style>
