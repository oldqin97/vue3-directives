<!--
 * @Author: qin
 * @Date: 2022-04-18 01:49:03
 * @LastEditTime: 2022-04-18 01:52:34
 * @FilePath: \directive\vue3-v-lazy\src\components\displayImg.vue
 *  -> The best way to explain it is to do it
-->

<template>
  <div class="container">
    <div class="box" v-for="item of imgData" :key="item._id.$oid">
      <div class="img-box">
        <img v-lazy="item.url" />
      </div>
      <div class="content-box">
        <h1>这是标题</h1>
        <p>这是段落内容</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import axios from 'axios';
export default defineComponent({
  name: 'DisplayImg',
  setup() {
    const imgData = ref([]);
    const getData = async () => {
      const res = await axios('http://127.0.0.1:3000/imgs');
      imgData.value = res.data;
    };
    getData();

    return {
      imgData,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.container {
  overflow: auto;
  .box {
    position: relative;
    height: 150px;
    width: 150px;
    padding: 5px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;
    .img-box {
      height: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .content-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-left: 150px;
      height: 1px;
    }
  }
}
</style>
