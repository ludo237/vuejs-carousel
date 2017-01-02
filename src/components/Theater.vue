<template id="theater">
    <div class="Theater" :class="isTheaterClose">
        <div class="Theater__room">
            <template v-if="isPhotoSelected">
                <div class="Theater__stage">
                    <figure class="Theater__figure">
                        <img :src="selectedPhoto.photo" class="Theater__image"/>
                    </figure>
                    <div class="Theater__commands">
                        <a class="Theater__command" href="#previous" @click.prevent="previousPhoto()">
                            <i class="fa fa-fw fa-lg fa-4x fa-angle-double-left" aria-hidden="true"></i>
                        </a>
                        <a class="Theater__command" href="#next" @click.prevent="nextPhoto()">
                            <i class="fa fa-fw fa-lg fa-4x fa-angle-double-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="Theater__information">
                    <div class="Theater__header">
                        <div class="Header__title">
                            <h4 class="Title__text" v-text="selectedPhoto.name"></h4>
                            <h6 class="Title__date" v-text="selectedPhoto.created_at"></h6>
                        </div>
                        <a class="Theater__command Theater__command--header" href="#close-theater" @click.prevent="closeTheater">
                            <span aria-hidden="true">&times;</span>
                        </a>
                    </div>
                    <div class="Theater__body" v-text="selectedPhoto.body"></div>
                    <comments></comments>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import Comments from "./Comments.vue";

    export default {
        name: "theater",

        components: {
            Comments,
        },

        computed: {
            photoIndex() {
                return this.$store.getters.photoIndex;
            },

            selectedPhoto() {
                return this.$store.getters.selectedPhoto;
            },

            isPhotoSelected() {
                return this.$store.getters.isPhotoSelected;
            },

            isTheaterClose() {
                return {
                    "Theater--closed": !this.isPhotoSelected,
                }
            },

            hasComments() {
                return this.selectedPhoto.comments.length > 0;
            },
        },

        methods: {
            previousPhoto() {
                this.$store.commit("previousPhotoOfIndex", this.photoIndex - 1);
            },

            nextPhoto() {
                this.$store.commit("nextPhotoOfIndex", this.photoIndex + 1);
            },

            closeTheater() {
                this.$store.commit("changeSelectedPhoto", {});
            },
        }
    }
</script>

<style scoped>
.Theater {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 2370;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center
}

.Theater--closed {
    display: none;
}

.Theater__room {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.Theater__information {
    background: white;
    color: black;
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 300px;
}

.Theater__header {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 1.2rem 0 1.2rem;
}

.Header__title {
    flex-wrap: wrap;
}

.Title__text {
    flex-wrap: wrap;
    font-weight: bold;
}

.Title__date {
    color: gray;
    font-size: .8em;
}

.Theater__body {
    padding: 1.2rem;
}

.Theater__stage {
    align-items: center;
    background-color: black;
    display: flex;
    position: relative;
}

.Theater__figure {
    padding: 0;
    margin: 0;
}

.Theater__image {
    max-width: 100%;
    max-height: 100vh;
    vertical-align: middle;
}

.Theater__commands {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 1;
}

.Theater__command {
    color: white;
    text-decoration: none;
}

.Theater__command--header {
    color: black;
    font-weight: bold;
    font-size: 1.8rem;
}
</style>
