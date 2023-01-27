import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.config.globalProperties.$hostname =
  process.env.NODE_ENV === 'production'
    ? 'https://www.terrenceluciano.com'
    : 'http://192.168.7.77:4000'

app.mount('#app')
