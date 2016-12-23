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
        name: "Photos",

        props: {
            source: { Type: String }
        },

        computed: {
            photos() {
                return this.$store.getters.photos
            }
        },

        mounted() {
            this.$http.get(this.source).then((response) => {
                this.$store.commit("writePhotos", response.data);
            }, (response) => {
                console.error(response);
            });
        },

        methods: {
            selectThisPhoto(photo, index) {
                this.$store.commit("changeSelectedPhoto", {photo, index});
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
