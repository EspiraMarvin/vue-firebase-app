<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>ICT</label>
                <input type="checkbox" value="ict" v-model="blog.categories"/>
                <label>Health</label>
                <input type="checkbox" value="health" v-model="blog.categories"/>
                <label>Sports</label>
                <input type="checkbox" value="sports" v-model="blog.categories"/>
                <label>Economy</label>
                <input type="checkbox" value="economy" v-model="blog.categories"/>
            </div>
            <label>Author</label>
            <select v-model="blog.author">
              <option v-for="author in authors" :key="author.id"> {{ author }}</option>
            </select>
            <button v-on:click.prevent="postBlog">Add Blog</button>
        </form>
        <div v-if="submitted"></div>
            <h3>post submitted successful</h3>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog Content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="(category) in blog.categories"
                    v-bind:key="category.id"
                >
                    {{ category }}
                </li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "addBlog",
        data(){
            return {
                blog: {
                    title: '',
                    content: '',
                    categories: [],
                    author: ''
                },
                authors: [
                    'Paul Pogba',
                    'Bruno Fernandes',
                    'Anthony Martial'
                ],
                submitted: false,
            }
        },
        methods:{
            postBlog(){
                axios.post("https://ninja-firebase-blog.firebaseio.com/posts.json", this.blog
                ).then(data => {
                    console.log(data);
                    this.submitted = true;
                });
            }
        }
    }
</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog{
        margin: 20px auto;
        max-width: 500px;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type="text"], textarea{
        display: block;
        width: 100%;
        padding: 8px;
    }
    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }
    h3{
        margin-top: 10px;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    #checkboxes label{
        display: inline-block;
    }
</style>
