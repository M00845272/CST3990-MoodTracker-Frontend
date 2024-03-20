import { createApp } from 'vue';
import App from './App.vue';
import '@aws-amplify/ui-vue/styles.css';
import './assets/app.css';
import './assets/authentication.css';

const app = createApp(App);
app.mount('#app');