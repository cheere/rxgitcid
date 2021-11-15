const rxgitcid = require('../dist/rxgitcid')

// 1
const gitLastId = rxgitcid.cidSync()
console.log('id =', gitLastId)

// 2
rxgitcid.cid(id => {
  console.log('cb id =', id)
})

