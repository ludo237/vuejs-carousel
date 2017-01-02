<template>
    <div class="Comments">
        <div class="Comments__header">

        </div>
        <ul class="Comments__list">
            <comment v-for="comment in descendantComments" :comment="comment"></comment>
        </ul>
    </div>
</template>

<script>
    import Comment from "./Comment.vue";

    export default {

        components: {
            Comment
        },

        computed: {
            comments() {
                return this.$store.getters.selectedPhoto.comments;
            },

            descendantComments() {
                return this.comments.sort((a, b) => {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                });
            }
        },
    }

</script>

<style scoped>
.Comments {
    background-color: #f6f7f9;
    border-top: 1px solid #e1e2e3;
    padding: 1.2rem;
}

.Comments_list {

}

</style>
