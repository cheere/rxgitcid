const pathResolve = require('path').resolve
const RxFileWrite = require('rxfile-write')

const distPath = pathResolve(__dirname, '..', 'dist')


RxFileWrite.remove(distPath)
