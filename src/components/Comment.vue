<template>
    <li class="Comment">
        <div class="Comment__header">
            <div class="Comment__author">
                <figure class="Author__avatar">
                    <img :src="comment.avatar">
                </figure>
                <div class="Author__name">
                    <strong v-text="comment.name"></strong>
                </div>
            </div>
        </div>
        <div class="Comment__body">
            <p>{{ comment.text}}</p>
            <span role="presentation" aria-hidden="true"> · </span>
            <small v-text="createdAt"></small>
        </div>
    </li>
</template>

<script>
    import Moment from "moment";

    export default{
        props: {
            comment: {
                type: Object,
                required: true,
            }
        },

        computed: {
            createdAt() {
                return Moment(this.comment.created_at).fromNow();
            }
        }
    }

</script>

<style scoped>
.Comment {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}

.Comment__header {
    display: flex;
    flex-direction: column;
}

.Comment__author {
    display: flex;
    flex-direction: row;
}

.Author__avatar {
    height: 32px;
    margin-right: .5rem;
    width: 32px;
}

.Author__name {
}

.Comment__body {
    text-align: justify;
}

</style>
