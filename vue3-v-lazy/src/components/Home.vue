<!--
 * @Author: qin
 * @Date: 2022-04-18 01:48:53
 * @LastEditTime: 2022-04-18 01:58:22
 * @FilePath: \directive\vue3-v-lazy\src\components\Home.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="box">
    <h1>This is home page</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<style lang="scss" scoped>
.box {
  height: 10000px;
}
</style>
