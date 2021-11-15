const pathResolve = require('path').resolve
const rxfileWrite = require('rxfile-write')
const packageConfig = require('../package.json')

const DistPath = pathResolve(__dirname, '..', 'dist')
const SrcPath = pathResolve(__dirname, '..', 'index.d.ts')
const DstPath = pathResolve(DistPath, packageConfig.name + '.d.ts')

function w() {
  rxfileWrite.exists(SrcPath).then(() => {
    console.log('start write to file...')
    rxfileWrite.cpSync
    rxfileWrite.read(SrcPath).then(data => {
      console.log('read data len = ', data.length)
      rxfileWrite.write(DstPath, data).then(() => {
        console.log('write to succ')
      })
    })
  })
}
const fileInfo = rxfileWrite.existsSync(SrcPath)
if (fileInfo.file) {
  const res = rxfileWrite.cpSync(SrcPath, DstPath)
  const msg = res ? 'succ' : 'fail'
  console.log('cp res =', msg)
} else {
  console.log('cp error SrcPath=null')
}