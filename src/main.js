import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import axios from 'axios'
import '@/main.css'

import store from "@/services/store";
Vue.prototype.$http = axios

new Vue({
    ...options(Vue),
    el: '#app',
    store,
    render: h => h(App),
})
