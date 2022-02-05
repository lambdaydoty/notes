import assert from 'assert'

/* dictionaries */
interface D {
  name: number
  'name!': number
  'name?'?: number
}

const d: D = {
  name: 1,
  'name!': 1,
}

assert(d.name === 1) // d.hasOwnProperty('name') ? d['name'] : undefined
assert(d['name?'] === undefined)
assert(Object.prototype.hasOwnProperty.call(d, 'name'))

delete d['name?']

/* from entries */
assert.deepStrictEqual({ foo: 1, bar: 2 }, Object.fromEntries([
  ['foo', 1],
  ['bar', 2],
]))

/* merge */
assert.deepStrictEqual({ x: 1, y: 2, z: 3 }, {
  ...{ x: 1, y: 0 },
  ...{ y: 2, z: 3 },
})

const map = { foo: 1, bar: 2 }

/* iteration */
for (const [k, v] of Object.entries(map)) {
  assert(typeof k === 'string')
  assert(typeof v === 'number')
}
assert.deepStrictEqual(Object.keys(map), ['foo', 'bar'])
assert.deepStrictEqual(Object.values(map), [1, 2])
