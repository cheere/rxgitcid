# rxgitcid

Get the commit `ID` of the last commit of git.

```sh
npm i rxgitcid --save-dev
```


# Usage
```js
  // node / cjs
  const rxgitcid = require('rxgitcid')
  // or
  import rxgitcid from 'rxgitcid'

  // 1
  const gitLastId = rxgitcid.cidSync()
  console.log('id =', gitLastId) // ec0b419

  // 2
  rxgitcid.cid(id => {
    console.log('cb id =', id) // ec0b419
  })
```

# api
1. cid
1. cidSync

# License
[MIT](https://github.com/cheere/rxgitcid/blob/main/LICENSE)