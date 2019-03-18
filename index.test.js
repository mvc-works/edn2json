
let index = require('./index')

test('json->edn' , () => {
  let edn = '{:a 1 :b? 2}'
  let json = {a: 1, "b?": 2}
  expect(index.json2edn(json)).toBe(edn)
})

test('edn->json' , () => {
  let edn = '{:a 1 :b [2 :x]}'
  let json = {a: 1, b: [2, 'x']}
  expect(index.edn2json(edn)).toEqual(json)
})
