import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.config.globalProperties.$hostname =
	process.env.NODE_ENV === 'production'
		? window.location.origin
		: 'http://localhost:4000';

console.log(app.config.globalProperties.$hostname);

app.mount('#app');
