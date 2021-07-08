'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5ec0e60.js');
const patch = require('./patch-b5b4f83b.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["fileinstant-widget-component.cjs",[[1,"fileinstant-widget-component",{"softwares":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
