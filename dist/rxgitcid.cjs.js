/*!
 * rxgitcid
 * version: 0.0.1
 * repo: https://github.com/cheere/rxgitcid
 * build: 2021-11-15 17:07:45
 */
"use strict";function n(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}const t=n(require("child_process")).default,e={};function o(n){let t="unknow";if(!n)return t;const e=n.split(" "),o=e.length>1?e[1]:n;return o&&(t=o.length>7?o.substring(0,7):o),t}e.cid=function(n){t.exec("git log -1",{encoding:"utf8"},(function(t,e,c){let u="unknow";t||(u=o(e)),function(t){n&&n(t)}(u)}))},e.cidSync=function(){let n="unknow";try{const e=t.execSync("git log -1");n=o(e.toString())}catch(t){n="unknow"}return n},e.version='"0.0.1"';var c=e;module.exports=c;
