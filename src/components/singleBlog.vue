<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>Author: {{ blog.author }}</p>
        <ul>
            <p style="text-decoration: underline">Categories</p>
            <li v-for="category in blog.categories" :key="category.id">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "singleBlog",
        data(){
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            axios.get(`https://ninja-firebase-blog.firebaseio.com/posts/${this.id}.json`)
            .then(response => {
                return response.data
                // console.log(response)
            }).then(data => {
                this.blog = data
            })
        }
    }
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
    }
</style>
