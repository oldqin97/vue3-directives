/*
 * @Author: qin
 * @Date: 2022-04-09 23:38:22
 * @LastEditTime: 2022-04-17 23:52:49
 * @FilePath: \directive\vue3-animation-directive\src\lib\index.js
 *  -> The best way to explain it is to do it
 */
import entry from './src/entry';

const Directives = [entry];

const install = app => {
  Directives.forEach(directive => {
    app.use(directive);
  });
};

const animationDirective = {
  version: '0.0.1',
  install,
};

export { entry };

export default animationDirective;
