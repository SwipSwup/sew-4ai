import Vue from 'vue'
import options from '@/config'
import App from '@/components/App.vue'
import '@/main.css'

import store from "@/services/store";

new Vue({
    ...options(Vue),
    el: '#app',
    store,
    render: h => h(App),
})
