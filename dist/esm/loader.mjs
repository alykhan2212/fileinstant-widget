import { b as bootstrapLazy } from './index-59463ecd.js';
import { a as patchEsm } from './patch-0915e735.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["fileinstant-widget-component",[[1,"fileinstant-widget-component",{"softwares":[32]}]]]], options);
  });
};

export { defineCustomElements };
