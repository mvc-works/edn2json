
let jsedn = require('jsedn')
let toJson = require('./to-json').toJson
let toEdn = require('./to-edn').toEdn

exports.toJson = toJson
exports.toEdn = toEdn

exports.edn2json = (x) => {
  return toJson(jsedn.parse(x))
}

exports.json2edn = (x) => {
  return jsedn.encode(toEdn(x))
}
