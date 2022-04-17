/*
 * @Author: qin
 * @Date: 2022-04-17 23:04:21
 * @LastEditTime: 2022-04-18 02:15:35
 * @FilePath: \directive\vue3-v-lazy\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import App from './App.vue';
import lazyDirective from '../lib';

const app = createApp(App);

app.use(lazyDirective, {
  loading: 'http://127.0.0.1:3000/images/loading.gif',
  error: 'http://127.0.0.1:3000/images/error.jpg',
  preload: 1.5,
});

app.mount('#app');
