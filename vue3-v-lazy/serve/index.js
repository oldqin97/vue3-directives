/*
 * @Author: qin
 * @Date: 2022-04-17 23:03:09
 * @LastEditTime: 2022-04-17 23:19:31
 * @FilePath: \directive\vue3-v-lazy\serve\index.js
 *  -> The best way to explain it is to do it
 */
const express = require('express');
const app = express();
const { resolve } = require('path');
const { readFileSync } = require('fs');

app.all('*', (req, res, next) => {
  res.header('Access-Control-allow-Origin', '*');
  res.header('Access-Control-allow-Methods', 'POST,GET');
  next();
});

app.get('/images/:filename', (req, res) => {
  res.sendFile(
    resolve(__dirname) + '\\images\\' + req.params.filename,
  );
});

app.get('/imgs', (req, res) => {
  const imageData = JSON.parse(
    readFileSync(resolve(__dirname, './images.json'), 'utf-8'),
  );

  res.send(imageData);
});

app.listen(3000, () => {
  console.log('Your server is running at 3000 port');
});
