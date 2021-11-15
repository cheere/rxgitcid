/*!
 * rxgitcid
 * version: 0.0.1
 * repo: https://github.com/cheere/rxgitcid
 * build: 2021-11-15 17:07:45
 */
define(["child_process"],(function(n){"use strict";function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}const e=t(n).default,c={},i="git log -1",u="unknow";function o(n){let t=u;if(!n)return t;const e=n.split(" "),c=e.length>1?e[1]:n;return c&&(t=c.length>7?c.substring(0,7):c),t}return c.cid=function(n){e.exec(i,{encoding:"utf8"},(function(t,e,c){let i=u;t||(i=o(e)),function(t){n&&n(t)}(i)}))},c.cidSync=function(){let n=u;try{const t=e.execSync(i);n=o(t.toString())}catch(t){n=u}return n},c.version='"0.0.1"',c}));
