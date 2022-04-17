/*
 * @Author: qin
 * @Date: 2022-04-18 01:10:16
 * @LastEditTime: 2022-04-18 01:11:33
 * @FilePath: \directive\vue3-v-lazy\lib\utils\imgLoad.js
 *  -> The best way to explain it is to do it
 */

export default function imgLoad(src) {
  return new Promise((resolve, reject) => {
    const oImg = new Image();

    oImg.src = src;
    oImg.onload = resolve;
    oImg.onerror = reject;
  });
}
