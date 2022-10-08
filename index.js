const childExec = require('child_process')

const LibGit = {}

const GitCommitLogSh = 'git log -1'
const DefaultRes = 'unknow'

LibGit.pathCid = function (path, callback) {
  function cb(cid) {
    callback && callback(cid)
  }
  const sh = joinSh(path)
  childExec.exec(sh, { encoding: 'utf8' }, function (err, sdout, stderr) {
    let cid = DefaultRes
    if (!err) {
      cid = formatLog(sdout)
    }
    cb(cid)
  })
}

LibGit.cid = function (callback) {
  function cb(cid) {
    callback && callback(cid)
  }
  const sh = GitCommitLogSh
  childExec.exec(sh, { encoding: 'utf8' }, function (err, sdout, stderr) {
    let cid = DefaultRes
    if (!err) {
      cid = formatLog(sdout)
    }
    cb(cid)
  })
}

LibGit.cidSync = function (path) {
  let cid = DefaultRes
  try {
    const sh = joinSh(path)
    const logBuffer = childExec.execSync(sh)
    const log = logBuffer.toString()
    cid = formatLog(log)
  } catch (error) {
    cid = DefaultRes
  }
  return cid
}

function joinSh(path) {
  let sh = ''
  if (path && typeof path === 'string') {
    sh = 'cd ' + path + ' && '
  }
  sh += GitCommitLogSh
  return sh
}

function formatLog(log) {
  let cid = DefaultRes
  if (!log) {
    return cid
  }
  const logArray = log.split(' ')
  const second = logArray.length > 1 ? logArray[1] : log
  if (second) {
    if (second.length > 7) {
      cid = second.substring(0, 7)
    } else {
      cid = second
    }
  }
  return cid
}

LibGit.version = '__VERSION__'

module.exports = LibGit