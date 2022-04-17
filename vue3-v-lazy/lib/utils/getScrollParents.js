/*
 * @Author: qin
 * @Date: 2022-04-18 00:25:43
 * @LastEditTime: 2022-04-18 00:41:38
 * @FilePath: \directive\vue3-v-lazy\lib\utils\getScrollParents.js
 *  -> The best way to explain it is to do it
 */

export default function getScrollParents(el) {
  let _parents = el.parentNode;
  let styleOverflow;

  while (_parents) {
    styleOverflow = getComputedStyle(_parents)['overflow'];
    if (/(scroll)|(auto)/.test(styleOverflow)) {
      return _parents;
    }
    _parents = _parents.parentNode;
  }
}
