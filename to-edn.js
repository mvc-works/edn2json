
let jsedn = require('jsedn')
let atoms = require('jsedn/lib/atoms')

function guessKeyword(xs) {
  return xs.every(x => {
    return x.match(/^[a-z][a-z-]*[\?\!]?$/)
  })
}

exports.toEdn = function toEdn(jsonObj) {
  if (typeof jsonObj === 'string') {
    return jsonObj
  }
  if (typeof jsonObj === 'number') {
    return new jsedn.BigInt(jsonObj)
  }
  if (typeof jsonObj === 'bigint') {
    return new jsedn.BigInt(jsonObj)
  }
  if (typeof jsonObj === 'boolean') {
    return jsonObj
  }
  if (jsonObj == null) {
    return null
  }
  if (Array.isArray(jsonObj)) {
    let xs = jsonObj.map(toEdn)
    return new jsedn.Vector(xs)
  }
  if (typeof jsonObj === 'object') {
    let betterUseKeyword = guessKeyword(Object.keys(jsonObj))
    let ret = []
    for (let k in jsonObj) {
      if (betterUseKeyword) {
        ret.push(new jsedn.Keyword(':' + k))
      } else {
        ret.push(k)
      }
      ret.push(toEdn(jsonObj[k]))
    }
    return new jsedn.Map(ret)
  }
}
