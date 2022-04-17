<!--
 * @Author: qin
 * @Date: 2022-04-09 23:32:13
 * @LastEditTime: 2022-04-10 04:46:02
 * @FilePath: \directive\vue3-animation-directive\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div>
    <button @click="handle">switch</button>
    <button @click="add">{{ num }}</button>
  </div>
  <div class="container">
    <span
      class="box"
      v-if="tag"
      v-entry-in.Q-x="{
        duration: 1000, // 1000 Number ms
        timing: 'liner', // linear / ease / easeIn / easeOut / easeInout
        delay: 0, // 0 Number ms
        count: 'infinite', // 0 / infinite Number / String
        direction: 'normal', // normal / reverse / alternate / alternate-reverse
      }"
    >
      Q
    </span>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'App',
  setup() {
    let num = ref(0);
    let tag = ref(true);
    const handle = () => {
      tag.value = !tag.value;
      // console.log(tag.value);
    };
    const add = () => {
      num.value++;
    };
    return { tag, handle, num, add };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1000px;
  height: 700px;
  border: 1px solid #eee;

  .box {
    /* width: 100px;
    height: 100px;
    background-color: orange; */
    padding: 30px;
    font-size: 200px;
    animation: scale-in-top 500ms linear 0ms 1 normal both;
  }
}
@keyframes scale-in-top {
  0% {
    transform: scale(0);
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 1;
  }
}
</style>
