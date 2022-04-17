<!--
 * @Author: qin
 * @Date: 2022-04-17 23:04:21
 * @LastEditTime: 2022-04-18 01:56:14
 * @FilePath: \directive\vue3-v-lazy\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div>
    <button @click="handleSwitch('home')">home</button>
    <button @click="handleSwitch('displayImg')">img</button>
    <component :is="tag" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import DisplayImg from './components/DisplayImg.vue';
import Home from './components/Home.vue';

export default defineComponent({
  name: 'App',
  components: { DisplayImg, Home },
  setup() {
    const tag = ref('home');
    const handleSwitch = arg => {
      tag.value = arg;
    };

    return {
      tag,
      handleSwitch,
    };
  },
});
</script>

<style lang="scss" scoped></style>
