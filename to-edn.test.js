
let jsedn = require('jsedn')
let toEdn = require('./to-edn').toEdn

test('handle empty object' , () => {
  let jsonData = {}
  let ednData = toEdn(jsonData)
  let edn = '{}'
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle empty array' , () => {
  let jsonData = []
  let ednData = toEdn(jsonData)
  let edn = '[]'
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle string like keyword' , () => {
  let jsonData = ':s'
  let ednData = toEdn(jsonData)
  let edn = '":s"'
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle string like number' , () => {
  let jsonData = '222'
  let ednData = toEdn(jsonData)
  let edn = '"222"'
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle number' , () => {
  let jsonData = 1
  let ednData = toEdn(jsonData)
  let edn = 1
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle boolean' , () => {
  let jsonData = true
  let ednData = toEdn(jsonData)
  let edn = "true"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle null' , () => {
  let jsonData = null
  let ednData = toEdn(jsonData)
  let edn = "nil"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle undefined' , () => {
  let jsonData = undefined
  let ednData = toEdn(jsonData)
  let edn = "nil"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle array of content' , () => {
  let jsonData = [1, "2", ":3"]
  let ednData = toEdn(jsonData)
  let edn = "[1 \"2\" \":3\"]"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle nested array' , () => {
  let jsonData = [1, [2, [3, "4"]]]
  let ednData = toEdn(jsonData)
  let edn = "[1 [2 [3 \"4\"]]]"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle object with complicated keywords' , () => {
  let jsonData = {"a.3#$!/?": 1, ".9": 2}
  let ednData = toEdn(jsonData)
  let edn = "{\"a.3#$!/?\" 1 \".9\" 2}"
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle keywords in object' , () => {
  let jsonData = {a: 1, bbb: 2, "c?": 3, "dd!": 4, "e-e": 5}
  let ednData = toEdn(jsonData)
  let edn = '{:a 1 :bbb 2 :c? 3 :dd! 4 :e-e 5}'
  expect(jsedn.encode(ednData)).toBe(edn)
})

test('handle string keys in object' , () => {
  let jsonData = {a: 1, bbb: 2, "c?": 3, "dd!": 4, "e-E": 5}
  let ednData = toEdn(jsonData)
  let edn = '{"a" 1 "bbb" 2 "c?" 3 "dd!" 4 "e-E" 5}'
  expect(jsedn.encode(ednData)).toBe(edn)
})
