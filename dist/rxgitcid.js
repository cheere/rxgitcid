/*!
 * rxgitcid
 * version: 0.0.2
 * repo: https://github.com/cheere/rxgitcid
 * build: 2022-10-08 15:37:18
 */
"use strict";function n(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}const t=n(require("child_process")).default,e={};function o(n){let t="";return n&&"string"==typeof n&&(t="cd "+n+" && "),t+="git log -1",t}function c(n){let t="unknow";if(!n)return t;const e=n.split(" "),o=e.length>1?e[1]:n;return o&&(t=o.length>7?o.substring(0,7):o),t}e.pathCid=function(n,e){const u=o(n);t.exec(u,{encoding:"utf8"},(function(n,t,o){let u="unknow";n||(u=c(t)),function(n){e&&e(n)}(u)}))},e.cid=function(n){t.exec("git log -1",{encoding:"utf8"},(function(t,e,o){let u="unknow";t||(u=c(e)),function(t){n&&n(t)}(u)}))},e.cidSync=function(n){let e="unknow";try{const u=o(n),i=t.execSync(u);e=c(i.toString())}catch(n){e="unknow"}return e},e.version='"0.0.2"';var u=e;module.exports=u;
