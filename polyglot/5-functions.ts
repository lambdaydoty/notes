import assert from 'assert'

/* define */
function add3 (x: number, y: number = 0, z: number = 0): number {
  return x + y + z
}

const xs: [number, number, number] = [1, 2, 3]

/* invoke */
assert(add3(...xs) === 6)
assert(add3(1, 2, 3) === 6)
assert(add3(1, 2) === 3)
assert(add3(1) === 1)

/* variadic */
function add (...xs: number[]): number {
  return xs.reduce((x, y) => x + y, 0)
}

assert(add(...[1, 2, 3]) === 6)
assert(add(1, 2, 3) === 6)
assert(add(1, 2) === 3)
assert(add(1) === 1)
assert(add() === 0)

/* multiple return values */
function firstAndSecond (xs: number[]): [number, number] {
  if (xs.length < 2) {
    throw new Error()
  } else {
    return [xs[0], xs[1]]
  }
}

assert.deepStrictEqual(firstAndSecond([0, 1, 2, 3]), [0, 1])

/* anonymous function */
assert(xs.reduce((x, y) => x + y, 0) === 6)

/* closure */
function makeCounter (): (() => number) {
  let i = 0
  return function () {
    i += 1
    return i
  }
}

const counter = makeCounter()
counter()
counter()
assert(counter() === 3)

/* generator */
function * makeFibonacci (n: number): Iterable<number> {
  let a = 0
  let b = 1
  for (let i = 0; i < n; i++) {
    ;[a, b] = [b, a + b]
    yield a
  }
}

assert.deepStrictEqual([...makeFibonacci(8)], [1, 1, 2, 3, 5, 8, 13, 21])

/* invoke operator like function */
// None

/* function overload */
function toString (x: number|string|Error): string {
  if (typeof x === 'number') {
    return `${x}`
  } else if (typeof x === 'string') {
    return x
  } else {
    return x.message
  }
}

assert(toString(1) === '1')
assert(toString('foo') === 'foo')
assert(toString(new Error('bar')) === 'bar')
