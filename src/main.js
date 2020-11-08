import Vue from 'vue'
import App from './App.vue'
import router from './router'
import posts from './posts.js'
import recipes from './recipes.js'

Vue.config.productionTip = false

let data = {
    posts: posts,
    recipes: recipes,
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')