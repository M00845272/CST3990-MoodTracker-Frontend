import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import '@aws-amplify/ui-vue/styles.css';
import './assets/app.css';


const app = createApp(App);
app.mount('#app');