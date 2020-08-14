<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blogs Titles</h1>
        <input type="text" class="search-blog" v-model="search" placeholder="search blogs">
        <div v-for="(blog) in filteredBlogs" :key="blog.id" class="single-blog">
            <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
        </div>
    </div>
</template>

<script>
    import axios  from 'axios';
    import searchMixins from "../mixins/searchMixins";

    export default {
        name: "listBlogs",
        data(){
            return{
                blogs: [],
                search: ''
            }
        },
        methods:{

        },
        created() {
            // const axios = require('axios');
            //store it in variable "response" you can name it whatever you want
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    console.log(response);
                    //access the reponse object
                    this.blogs = response.data.slice(0, 10);
                })
        },
        computed:{

        },
        filters:{
            toUppercase (value) {
                return value.toUpperCase();
            },
            snippet(value) {
                return value.slice(0,100) + '...';
            }
        },
        directives: {
            'rainbow':{
                bind(el) {
                    el.style.color = "#" + Math.random().toString().slice(2,8);
                }
            }
        },
        mixins:[searchMixins],
    }
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    .search-blog{
        width: 100%;
        line-height: 2.0em;
    }
</style>
