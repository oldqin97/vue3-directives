/*
 * @Author: qin
 * @Date: 2022-04-18 00:47:47
 * @LastEditTime: 2022-04-18 01:44:11
 * @FilePath: \directive\vue3-v-lazy\lib\src\LazyImg.js
 *  -> The best way to explain it is to do it
 */

import { imgLoad } from '../utils';

export default class LazyImg {
  constructor({ el, src, options, imgRender }) {
    this.el = el;
    this.src = src;
    this.options = options;
    this.imgRender = imgRender;
    this.loaded = false;
    this.state = {
      loading: false,
      error: false,
    };
  }
  checkIsVisible() {
    const { top } = this.el.getBoundingClientRect();

    return top < window.innerHeight * (this.options.preload || 1.3);
  }
  loadImg() {
    this.imgRender(this, 'loading');

    imgLoad(this.src).then(
      () => {
        this.state.loading = true;
        this.imgRender(this, 'ok');
        this.loaded = true;
      },
      () => {
        this.state.error = true;
        this.imgRender(this, 'error');
        this.loaded = true;
      },
    );
  }
}
