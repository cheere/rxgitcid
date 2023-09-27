const rxgitcid = require('../dist/rxgitcid')
// const rxgitcid = require('../index.js')

// 1
const gitLastId = rxgitcid.cidSync()
console.log('id =', gitLastId)

// 2
rxgitcid.cid(id => {
  console.log('cb id =', id)
})

// 3
rxgitcid.cidObject(res => {
  console.log('cb res =', res)
})
