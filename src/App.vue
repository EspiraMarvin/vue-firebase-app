<template>
  <div id="app">
      <app-header></app-header>
      <router-view>
          <addBlog />
          <showBlogs />
          <listBlogs />
      </router-view>

  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlogs";
import appHeader from "./components/appHeader";
export default {
  name: 'App',
  components: {
      addBlog,
      showBlogs,
      listBlogs,
      'app-header': appHeader
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>
