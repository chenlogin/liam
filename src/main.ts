import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from './store/index'
import './style.scss'
import 'vant/lib/index.css'
const app = createApp(App).use(router).use(pinia)
app.mount('#app')
