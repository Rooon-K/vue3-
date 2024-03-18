import '@arco-design/web-vue/dist/arco.css';
import './assets/main.css';

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ArcoVue);
createApp(App).mount('#app')
