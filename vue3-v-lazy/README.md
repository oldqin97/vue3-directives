# vue3-v-lazy

## 首先进入 vue3-v-lazy 文件夹中, 分别在当前文件夹和 server 文件夹执行

```
yarn install
```

### 在两个文件夹分别执行

```
yarn serve
```

### 使用方法

```js
// 在main.js中, 导入lib文件中的 LazyDirective

import lazyDirective from '../lib';

const app = createApp(App);
app.use(lazyDirective, {
  loading: 'http://127.0.0.1:3000/images/loading.gif', // 图片加载中的图片地址
  error: 'http://127.0.0.1:3000/images/error.jpg', // 图片加载错误的图片地址
  preload: 1, // 选择加载页面的倍数, 既window.innerHeight * 1.x 内的图片是需要加载的
});
```
