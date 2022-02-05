import assert from 'assert'
import { range, replicate } from 'fp-ts/NonEmptyArray'
// import { fromArray, intersection, union, difference } from 'fp-ts/Set'

/* string type */
const s: string = 'Hello'

assert(s === 'Hello')

/* string literal */
const greeting: string =
`Hello,
World!`

assert(greeting === 'Hello,\nWorld!')

/* expression interpolation */
assert(`1 + 1 = ${1 + 1}` === '1 + 1 = 2')

/* concatenation */
assert('x' + 'y' === 'xy')

/* utilities */
assert('Hello'.toUpperCase() === 'HELLO')
assert('Hello'.toLowerCase() === 'hello')
assert(['do', 're', 'mi'].join('-') === 'do-re-mi')
assert.deepStrictEqual('x y  z'.split(/\s+/), ['x', 'y', 'z'])
assert('Hello'.startsWith('H'))
assert('Hello'.length === 5)
assert('Hello'.substring(1, 3) === 'el')

/* arrays */
const xs: number[] = [0, 1, 2, 3]
assert(xs.length !== 0) // test empty
assert(xs.length === 4)
assert(xs[xs.length - 1] === 3)

/* array slice */
assert.deepStrictEqual(xs.slice(0, 2), [0, 1])
assert.deepStrictEqual(xs.slice(1), [1, 2, 3])

/* queues */
const q: number[] = []
q.push(1) // [1]
q.push(2) // [1, 2]
q.push(3) // [1, 2, 3]
q.pop() // [1, 2]
q.unshift(-1) // [-1, 1, 2]
q.shift() // [1, 2]
assert.deepStrictEqual(q, [1, 2])

/* concatenation */
assert.deepStrictEqual([1, 2].concat([3, 4, 5]), [1, 2, 3, 4, 5])

/* replicate */
assert.deepStrictEqual(Array(3).fill(null), [null, null, null])

/* array iteration */
for (const x of [0, 2, 4, 6, 8]) {
  assert(x % 2 === 0)
}

/* array constructors */
assert.deepStrictEqual(range(0, 3), [0, 1, 2, 3]) // ! inclusive !
assert.deepStrictEqual(replicate('x')(3), ['x', 'x', 'x'])

/* array iteration with indices */
const r03 = range(0, 3)
for (let i = 0; i < r03.length; i++) {
  assert(i === r03[i])
}

/* array reverse, sort */
assert.deepStrictEqual(r03.slice().reverse(), [3, 2, 1, 0])
assert.deepStrictEqual(r03, range(0, 3))
r03.reverse() // in-place
r03.sort()

/* array unique */
const dup = replicate('x')(3)
assert.deepStrictEqual([...new Set(dup)], ['x'])

/* array membership */
assert(range(0, 3).includes(3))

/* set operations */
// see: 'fp-ts/Set'

/* map-filter-reduce */
assert.strictEqual(
  range(0, 5)
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((prev, curr) => prev + curr, 0),
  20,
)

/* universal/existential tests */
assert(range(0, 4).every(x => x >= 0))
assert(range(0, 4).some(x => x % 2 === 0))
