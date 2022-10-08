/*!
 * rxgitcid
 * version: 0.0.2
 * repo: https://github.com/cheere/rxgitcid
 * build: 2022-10-08 15:37:18
 */
define(["child_process"],(function(n){"use strict";function t(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}const e=t(n).default,c={},i="git log -1",o="unknow";function u(n){let t="";return n&&"string"==typeof n&&(t="cd "+n+" && "),t+=i,t}function f(n){let t=o;if(!n)return t;const e=n.split(" "),c=e.length>1?e[1]:n;return c&&(t=c.length>7?c.substring(0,7):c),t}return c.pathCid=function(n,t){const c=u(n);e.exec(c,{encoding:"utf8"},(function(n,e,c){let i=o;n||(i=f(e)),function(n){t&&t(n)}(i)}))},c.cid=function(n){e.exec("git log -1",{encoding:"utf8"},(function(t,e,c){let i=o;t||(i=f(e)),function(t){n&&n(t)}(i)}))},c.cidSync=function(n){let t=o;try{const c=u(n),i=e.execSync(c);t=f(i.toString())}catch(n){t=o}return t},c.version='"0.0.2"',c}));
