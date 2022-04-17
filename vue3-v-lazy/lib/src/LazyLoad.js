/*
 * @Author: qin
 * @Date: 2022-04-18 00:15:29
 * @LastEditTime: 2022-04-18 01:58:01
 * @FilePath: \directive\vue3-v-lazy\lib\src\lazyload.js
 *  -> The best way to explain it is to do it
 */

import { getScrollParents } from '../utils';
import LazyImg from './LazyImg';

import { nextTick } from 'vue';

function LazyLoad(app) {
  return class Lazy {
    constructor(options) {
      this.options = options;
      this.isAddScrollEvent = false;
      this.lazyImgPool = [];
    }
    bindLazy(el, bindings) {
      nextTick(() => {
        // const scrollParents = getScrollParents(el);

        if (!this.isAddScrollEvent) {
          this.isAddScrollEvent = true;

          window.addEventListener(
            'scroll',
            this.handleScroll.bind(this),
            false,
          );
        }

        const lazyImg = new LazyImg({
          el,
          src: bindings.value,
          options: this.options,
          imgRender: this.imgRender.bind(this),
        });
        this.lazyImgPool.push(lazyImg);
        this.handleScroll();
      });
    }
    handleScroll() {
      let isVisible = false;
      console.log('qqq');
      this.lazyImgPool.forEach(item => {
        if (!item.loaded) {
          isVisible = item.checkIsVisible();
          isVisible && item.loadImg();
        }
      });
    }
    imgRender(lazyImg, state) {
      const { el, options } = lazyImg;
      const { loading, error } = options;
      let src = '';

      switch (state) {
        case 'loading':
          src = loading || '';
          break;
        case 'error':
          src = error || '';
          break;
        default:
          src = lazyImg.src;
      }

      el.setAttribute('src', src);
    }
  };
}
export default LazyLoad;
