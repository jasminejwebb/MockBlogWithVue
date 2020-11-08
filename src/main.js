import Vue from 'vue'
import App from './App.vue'
import router from './router'
import post from './posts.js'

Vue.config.productionTip = false

let data = {
    products: post,
}

new Vue({
    router,
    data,
    render: h => h(App)
}).$mount('#app')