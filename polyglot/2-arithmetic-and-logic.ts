import assert from 'assert'
import crypto from 'crypto'

assert(!!true)
assert(!false)
assert(true && true)
assert(!(true && false))
assert(!(false && false))
assert(true || true)
assert(true || false)
assert(!(false || false))

assert(1 + 1 === 2)
assert(2 * 3 === 6)
assert(Math.floor(365 / 7) === 52)
assert(365 % 7 === 1)
assert((22 / 7) > 3.14 && (22 / 7) < 3.15)
assert(2 ** 10 === 1024)

assert(Math.abs(Math.pow(2, 0.5) - 1.414) < 0.01)
assert(Math.abs(Math.sqrt(2) - 1.414) < 0.01)
assert(Math.floor(0.5) === 0)

assert(Math.max(1, 2, 3) === 3)
assert(Math.max(...[1, 2, 3]) === 3)

assert(!Number.isFinite(1 / 0))
assert(Number.isNaN(Math.sqrt(-1)))

// Integer overflow
assert(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2)

// Float overflow
assert(!Number.isFinite(Math.pow(2, 99999)))

// Random
assert(crypto.randomInt(0, 10) >= 0 && crypto.randomInt(0, 10) < 10)

assert((0xFF << 8) === 0xFF00)

assert(parseInt('42', 10) === 42)
