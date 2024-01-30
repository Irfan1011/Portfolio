import { createApp } from 'vue'
import App from './App.vue'

import BaseButton from './components/ui/BaseButton.vue';
import ScrollAnimation from './directives/scrollAnimation.js';

const app = createApp(App);

app.directive('scrollanimation',ScrollAnimation);
app.component('base-button',BaseButton);

app.mount('#app');
