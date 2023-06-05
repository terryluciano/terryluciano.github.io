import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$hostname =
	process.env.NODE_ENV === 'production'
		? window.location.origin
		: 'http://localhost:4000';

app.mount('#app');
