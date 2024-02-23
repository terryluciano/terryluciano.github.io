import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$hostname =
  process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:4000'

app.use(pinia)
app.mount('#app')
