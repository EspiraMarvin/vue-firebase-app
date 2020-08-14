import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueRouter);
//create new instance of the vue-router
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false


//custom directives
Vue.directive("theme",{
  bind(el,binding){
    if (binding.value=='wide'){
      el.style.maxWidth = "1200px";
    }
    else if(binding.value=='narrow'){
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column'){
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
