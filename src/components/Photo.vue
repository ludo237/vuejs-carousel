<template>
    <li class="Photo">
        <figure class="Photo__container">
            <img class="Photo__source" :src="thumbnail" @click="selectThisPhoto(photo)"/>
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

        computed: {
            thumbnail() {
                return this.photo.thumbnailUrl;
            }
        },

        methods: {
            selectThisPhoto(photo) {
                this.$store.commit("changeSelectedPhoto", photo);
            },
        },
    }
</script>
