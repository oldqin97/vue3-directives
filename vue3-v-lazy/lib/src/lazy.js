/*
 * @Author: qin
 * @Date: 2022-04-17 23:50:04
 * @LastEditTime: 2022-04-18 01:59:10
 * @FilePath: \directive\vue3-v-lazy\lib\src\lazy.js
 *  -> The best way to explain it is to do it
 */

import LazyLoad from './LazyLoad';

const lazy = (app, options) => {
  const LazyClass = LazyLoad(app);
  const lazyLoad = new LazyClass(options);

  app.directive('lazy', {
    mounted: lazyLoad.bindLazy.bind(lazyLoad),
    beforeUnmount() {
      console.log('enter');
      window.removeEventListener(
        'scroll',
        lazyLoad.handleScroll,
        false,
      );
    },
  });
};

export default lazy;
