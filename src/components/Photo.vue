<template>
    <li class="Photo">
        <figure class="Photo__container">
            <img class="Photo__source" :src="photo.thumbnail" @click="selectThisPhoto(photo)"/>
        </figure>
    </li>
</template>

<script>
    export default {
        name: "photo",

        props: {
            photo: {
                type: Object,
                required: true
            },
        },

        methods: {
            selectThisPhoto(photo) {
                this.$store.commit("changeSelectedPhoto", photo);
            },
        },
    }
</script>

<style scoped>
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
