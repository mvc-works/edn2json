
let jsedn = require('jsedn')
let {toJson} = require('./to-json')

test('handle empty map' , () => {
  let edn = '{}'
  let jsonData = {}
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle simple map with keyword' , () => {
  let edn = '{:a 1}'
  let jsonData = {a: 1}
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})


test('handle simple map' , () => {
  let edn = '{"a" 1}'
  let jsonData = {a: 1}
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle empty vector' , () => {
  let edn = '[]'
  let jsonData = []
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle a simple vector' , () => {
  let edn = '[1]'
  let jsonData = [1]
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('throw error for a symbol' , () => {
  let edn = "'a"
  let jsonData = 'a'
  expect(() => {
    let ednData = jsedn.parse(edn)
    toJson(ednData)
  }).toThrow()
})

test('handle nested data', () => {
  let edn = '{:sessions {:id "xx" :count 1 :data [1 "2" :3] }}'
  let jsonData = {sessions: {id: 'xx', count: 1, data: [1, "2", "3"]}}
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle empty set', () => {
  let edn = '#{}'
  let jsonData = []
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle simple set', () => {
  let edn = '#{1 2}'
  let jsonData = [1, 2]
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle nil', () => {
  let edn = 'nil'
  let jsonData = null
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle boolean', () => {
  let edn = '[true false]'
  let jsonData = [true, false]
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

test('handle list', () => {
  let edn = '(1 2)'
  let jsonData = [1, 2]
  let ednData = jsedn.parse(edn)
  expect(toJson(ednData)).toEqual(jsonData)
})

