
/*!
 * rxgitcid
 * version: 0.0.1
 * repo: https://github.com/cheere/rxgitcid
 * build: 2021-11-15 16:45:32
 */

'use strict';

var require$$0 = require('child_process');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

const childExec = require$$0__default["default"].exec;

const LibGit = {};

const GitCommitLogSh = 'git log -1';
const DefaultRes = 'unknow';

LibGit.cid = function (callback) {
  function cb(cid) {
    callback && callback(cid);
  }

  childExec(GitCommitLogSh, { encoding: 'utf8' }, function (err, sdout, stderr) {
    let cid = DefaultRes;
    if (!err) {
      cid = formatLog(sdout);
    }
    cb(cid);
  });
};

LibGit.cidSync = function () {
  let cid = DefaultRes;
  try {
    const logBuffer = childExecSync(GitCommitLogSh);
    const log = logBuffer.toString();
    cid = formatLog(log);
  } catch (error) {
    cid = DefaultRes;
  }
  return cid
};

function formatLog(log) {
  let cid = DefaultRes;
  if (!log) {
    return cid
  }
  const logArray = log.split(' ');
  const second = logArray.length > 1 ? logArray[1] : log;
  if (second) {
    if (second.length > 7) {
      cid = second.substring(0, 7);
    } else {
      cid = second;
    }
  }
  return cid
}

LibGit.version = '"0.0.1"';

var gitLastCommitId = LibGit;

module.exports = gitLastCommitId;
