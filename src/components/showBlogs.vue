<template>
<div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blogs Articles</h1>
    <input type="text" class="search-blog" v-model="search" placeholder="search blogs">
    <div v-for="(blog) in filteredBlogs" :key="blog.id" class="single-blog">
        <router-link style="text-decoration: none" v-bind:to="`/blog/${blog.id}`">
            <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
        </router-link>
        <article>{{ blog.content | snippet }}</article>
    </div>
</div>
</template>

<script>
    import axios  from 'axios';
    import searchMixins from "../mixins/searchMixins";

    export default {
        name: "showBlogs",
        data(){
            return{
                blogs: [],
                search: ''
            }
        },
        methods:{

        },
        created() {
            axios.get('https://ninja-firebase-blog.firebaseio.com/posts.json')
                .then(response => {
                   return response.data;
                   // console.log(response);
            }).then(data => {
                let blogsArray = [];
                for (let key in data){
                    data[key].id = key
                    blogsArray.push(data[key]);
                }
                // console.log(blogsArray);
                this.blogs = blogsArray;
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
        mixins:[searchMixins]
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
router-link{
    text-decoration: none;
}
</style>
