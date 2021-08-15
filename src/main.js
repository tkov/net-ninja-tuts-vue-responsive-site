import { createApp } from 'vue'             // creates an application
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')    // use method takes in the router
