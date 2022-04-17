/*
 * @Author: qin
 * @Date: 2022-04-09 23:39:18
 * @LastEditTime: 2022-04-17 23:55:48
 * @FilePath: \directive\vue3-animation-directive\src\lib\src\entry\index.js
 *  -> The best way to explain it is to do it
 */
import '../../assets/css/entryAnimation.css';

const install = app => {
  app.directive('entry-in', {
    beforeMount(el, { modifiers, value }, vNode) {
      let initial = {
        name: '',
        duration: 1000,
        timing: 'linear',
        delay: 0,
        count: 1,
        direction: 'normal',
        'fill-mode': 'both',
      };
      const result = { ...initial, ...value };
      result['name'] = Object.keys(modifiers)[0];

      console.log(result.count);
      
      el.style.animationDelay = `${result.delay}ms`;
      el.style.animationDirection = `${result.direction}`;
      el.style.animationDuration = `${result.duration}ms`;
      el.style.animationFillMode = 'both';
      el.style.animationIterationCount = `${result.count}`;
      el.style.animationName = `${result.name}`;
      el.style.animationPlayState = 'running';
      el.style.animationTimingFunction = `${result.timing}`;

      console.log(el.style);
    },
  });
};

export default install;
