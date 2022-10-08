/*!
 * rxgitcid
 * version: 0.0.2
 * repo: https://github.com/cheere/rxgitcid
 * build: 2022-10-08 15:37:18
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("child_process")):"function"==typeof define&&define.amd?define(["child_process"],n):((t="undefined"!=typeof globalThis?globalThis:t||self).rxgitcid=t.rxgitcid||{},t.rxgitcid.umd=n(t.require$$0))}(this,(function(t){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}const e=n(t).default,i={},o="git log -1",c="unknow";function u(t){let n="";return t&&"string"==typeof t&&(n="cd "+t+" && "),n+=o,n}function f(t){let n=c;if(!t)return n;const e=t.split(" "),i=e.length>1?e[1]:t;return i&&(n=i.length>7?i.substring(0,7):i),n}return i.pathCid=function(t,n){const i=u(t);e.exec(i,{encoding:"utf8"},(function(t,e,i){let o=c;t||(o=f(e)),function(t){n&&n(t)}(o)}))},i.cid=function(t){e.exec("git log -1",{encoding:"utf8"},(function(n,e,i){let o=c;n||(o=f(e)),function(n){t&&t(n)}(o)}))},i.cidSync=function(t){let n=c;try{const i=u(t),o=e.execSync(i);n=f(o.toString())}catch(t){n=c}return n},i.version='"0.0.2"',i}));
