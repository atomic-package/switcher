/*
 * Author: Daisuke Takayama
 */

'use strict';
let e = eval, global: NodeJS.Global = e('this');

import Switcher from './controller/';

declare namespace NodeJS {
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
    AP: {
      switcher: Switcher
    };
  }
}

// npm & node
if (typeof module !== 'undefined') {
  module.exports = Switcher;
}

// browser
if (typeof (global) !== 'undefined') {
  if (typeof global.AP === 'undefined') {
    Object.assign(global, { AP: {} });
  }
  if (typeof global.AP.switcher === 'undefined') {
    Object.assign(global.AP, { switcher: new Switcher });
  }
}
