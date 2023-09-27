const childExec = require('child_process')

const LibGit = {}

const GitCommitLogSh = 'git log -1'
const DefaultCid = 'unknow'
const DefaultRes = {cid: DefaultCid, log: DefaultCid, gitDate: DefaultCid}


LibGit.pathCid = function (path, callback) {
  function cb(cid) {
    callback && callback(cid)
  }
  const sh = joinSh(path)
  childExec.exec(sh, { encoding: 'utf8' }, function (err, sdout, stderr) {
    let cid = DefaultCid
    if (!err) {
      cid = formatLog(sdout)
    }
    cb(cid)
  })
}

// 0 ---------------------------------------

LibGit.cid = function (callback) {
  LibGit.coreCid(true, callback)
}

LibGit.cidSync = function (path) {
  return LibGit.coreCidSync(true, path)
}

// 1 ---------------------------------------

LibGit.cidObject = function (callback) {
  LibGit.coreCid(false, callback)
}

LibGit.cidObjectSync = function (path) {
  return LibGit.coreCidSync(false, path)
}

// 2 ---------------------------------------

function joinSh(path) {
  let sh = ''
  if (path && typeof path === 'string') {
    sh = 'cd ' + path + ' && '
  }
  sh += GitCommitLogSh
  return sh
}

// 3 ---------------------------------------

LibGit.coreCid = function (singleCid,callback) {
  singleCid = singleCid || false
  function cb(cid) {
    callback && callback(cid)
  }
  const sh = GitCommitLogSh
  childExec.exec(sh, { encoding: 'utf8' }, function (err, sdout, stderr) {
    let cid = DefaultCid
    if (!err) {
      if (singleCid) {
        cid = formatLog(sdout)
      } else {
        cid = formatLogObject(sdout)
      }
    }
    cb(cid)
  })
}

LibGit.coreCidSync = function (singleCid, path) {
  singleCid = singleCid || false
  let cid = DefaultCid
  try {
    const sh = joinSh(path)
    const logBuffer = childExec.execSync(sh)
    const log = logBuffer.toString()
    if (singleCid) {
      cid = formatLog(log)
    } else {
      cid = formatLogObject(sdout)
    }
  } catch (error) {
    if (singleCid) {
      cid = DefaultCid
    } else {
      cid = DefaultRes
    }
  }
  return cid
}

// 4 ---------------------------------------

function formatLog(log) {
  let cid = DefaultCid
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

/**
 * last cid  log+cid+timer
 * @param {string} log-struct
 * @returns {cid:'', log: '', gitDate:''}
 */
function formatLogObject(log) {
  // console.log('formatLog log=', log)
  let result = {}
  let cid = DefaultCid
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
    result.cid = cid
  }

  const commitArray = log.split('\n')
  // console.log('commitArray=', commitArray)
  const commitLen = commitArray && commitArray.length

  const gitDate = commitLen > 2 ? commitArray[2] : log
  if (gitDate) {
    let gitTimer = ''
    if (gitDate.length > 5) {
      const timeInter = gitDate.substring(5)
      gitTimer = new Date(timeInter).toLocaleDateString("zh-CN", { year: 'numeric', month: '2-digit', day: '2-digit', 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit' }).replace(/\//g, '-');
    } else {
      gitTimer = gitDate
    }
    result.gitDate = gitTimer.trim()
  }

  let commit = commitLen > 2 ? commitArray[commitLen-2] : 'unknow'
  if (commit) {
    commit = commit.trim()
    result.log = commit
  }

  return result
}

// 5 ---------------------------------------

LibGit.version = '__VERSION__'

module.exports = LibGit