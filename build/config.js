const path = require('path')
const { configBanner } = require('./util.config')
const packageConfig = require('../package.json')

const FilePath = (p) => path.resolve(__dirname, '..', p)

const FileName = packageConfig.name || 'unkonw'

module.exports = [
  {
    file: FilePath('dist/' + FileName + '.js'),
    format: 'cjs',
    name: FileName + '.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/' + FileName + '.cjs.js'),
    format: 'cjs',
    name: FileName + '.cjs', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/' + FileName + '.amd.js'),
    format: 'amd',
    name: FileName + '.amd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
  {
    file: FilePath('dist/' + FileName + '.umd.js'),
    format: 'umd',
    name: FileName + '.umd', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
  },
]