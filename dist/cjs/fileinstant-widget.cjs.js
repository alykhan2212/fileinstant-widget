'use strict';

const index = require('./index-f5ec0e60.js');
const patch = require('./patch-b5b4f83b.js');

patch.patchBrowser().then(options => {
  return index.bootstrapLazy([["fileinstant-widget-component.cjs",[[1,"fileinstant-widget-component",{"softwares":[32]}]]]], options);
});
