/*!
 * rxgitcid
 * version: 0.0.1
 * repo: https://github.com/cheere/rxgitcid
 * build: 2021-11-15 17:07:45
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("child_process")):"function"==typeof define&&define.amd?define(["child_process"],t):((e="undefined"!=typeof globalThis?globalThis:e||self).rxgitcid=e.rxgitcid||{},e.rxgitcid.umd=t(e.require$$0))}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const n=t(e).default,i={},o="git log -1",c="unknow";function u(e){let t=c;if(!e)return t;const n=e.split(" "),i=n.length>1?n[1]:e;return i&&(t=i.length>7?i.substring(0,7):i),t}return i.cid=function(e){n.exec(o,{encoding:"utf8"},(function(t,n,i){let o=c;t||(o=u(n)),function(t){e&&e(t)}(o)}))},i.cidSync=function(){let e=c;try{const t=n.execSync(o);e=u(t.toString())}catch(t){e=c}return e},i.version='"0.0.1"',i}));
