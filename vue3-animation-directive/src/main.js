/*
 * @Author: qin
 * @Date: 2022-04-09 23:32:13
 * @LastEditTime: 2022-04-10 04:33:23
 * @FilePath: \directive\vue3-animation-directive\src\main.js
 *  -> The best way to explain it is to do it
 */
import { createApp } from 'vue';
import App from './App.vue';

import animationDirective from './lib';
// import './lib/assets/css/entryAnimation.css'

const app = createApp(App);
app.use(animationDirective);
app.mount('#app');
