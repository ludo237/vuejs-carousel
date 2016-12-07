<template id="theater">
    <div class="Theater" :class="isTheaterClose">
        <div class="Theater__room">
            <div class="Theater__stage">
                <template v-if="isPhotoSelected">
                    <figure class="Theater__figure">
                        <img :src="selectedPhoto.url" class="Theater__image"/>
                    </figure>
                    <div class="Theater__commands">
                        <div class="Theater__command">
                            <a href="#previous" @click.prevent="previousPhoto(selectedPhoto.index)">
                                <i class="fa fa-fw fa-lg fa-4x fa-angle-double-left" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div class="Theater__command">
                            <a href="#next" @click.prevent="nextPhoto(selectedPhoto.index)">
                                <i class="fa fa-fw fa-lg fa-4x fa-angle-double-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </template>
            </div>
            <div class="Theater__information">
                <div class="Theater__header">
                    <h4>{{ selectedPhoto.of }}</h4>
                    <div class="Theater__command Theater__command--header">
                        <a href="#close-theater" @click.prevent="closeTheater">
                            <i class="fa fa-fw fa-lg fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="Theater_body">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                selectedPhoto: {},
            }
        },

        mounted() {
            window.EventDispatcher.listen("photoHasBeenSelected", (photo) => {
                this.changeSelectedPhoto(photo);
            });
        },

        methods: {

            changeSelectedPhoto(photo) {
                this.selectedPhoto = photo;
            },

            previousPhoto(index) {
              window.EventDispatcher.fire("previousPhotoHasBeenRequested", index);
            },

            nextPhoto(index) {
                window.EventDispatcher.fire("nextPhotoHasBeenRequested", index);
            },

            closeTheater() {
                this.changeSelectedPhoto({});
            },
        },

        computed: {

            isPhotoSelected() {
                return Object.keys(this.selectedPhoto).length !== 0 && this.selectedPhoto.constructor === Object;
            },

            isTheaterClose() {
                return {
                    "Theater--closed": !this.isPhotoSelected,
                }
            },
        }
    }
</script>
<style>

.Theater {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.85);
    background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6Q…VUIHYzLjUuNUmK/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat scroll transparent\9;
    z-index: 2370;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.Theater--closed {
    display: none;
}

.Theater__room {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
    margin: 0;
    background: black;
}

.Theater__information {
    background: white;
    color: black;
    width: 25%;
}

.Theater__header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
}

.Theater__body {
    display: block;
}

.Theater__stage {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    flex-direction: column;
    width: 75%;
    align-items: center;
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
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
}
.Theater__command > a {
    color: white;
    text-decoration: none;
}

.Theater__command--header > a {
    color: black;
}
</style>
